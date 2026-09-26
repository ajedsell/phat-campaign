import { google } from "googleapis";

const EMAIL_RE = /^\S+@\S+\.\S+$/;

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, message, hp, startedAt } = body as {
    name?: string;
    email?: string;
    message?: string;
    hp?: string;
    startedAt?: number;
  };

  // Honeypot tripped — pretend success, don't let bots learn anything.
  if (hp) {
    return Response.json({ ok: true });
  }

  // Submitted implausibly fast — likely a bot.
  if (typeof startedAt !== "number" || Date.now() - startedAt < 1500) {
    return Response.json({ ok: false, error: "invalid_submission" }, { status: 400 });
  }

  if (!name || !email || !message || !EMAIL_RE.test(email)) {
    return Response.json({ ok: false, error: "invalid_input" }, { status: 400 });
  }

  const { GOOGLE_SERVICE_ACCOUNT_EMAIL, GOOGLE_PRIVATE_KEY, GOOGLE_SHEET_ID } = process.env;

  if (!GOOGLE_SERVICE_ACCOUNT_EMAIL || !GOOGLE_PRIVATE_KEY || !GOOGLE_SHEET_ID) {
    console.error("Contact route missing Google Sheets env vars");
    return Response.json({ ok: false, error: "not_configured" }, { status: 500 });
  }

  const jwt = new google.auth.JWT({
    email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth: jwt });

  await sheets.spreadsheets.values.append({
    spreadsheetId: GOOGLE_SHEET_ID,
    range: "Contact!A:D",
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [[name, email, message, new Date().toISOString()]],
    },
  });

  return Response.json({ ok: true });
}
