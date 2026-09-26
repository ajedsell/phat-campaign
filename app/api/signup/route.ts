import { google } from "googleapis";

const EMAIL_RE = /^\S+@\S+\.\S+$/;

export async function POST(request: Request) {
  const body = await request.json();
  const { firstName, lastName, email, phone, smsConsent, interests, hp, startedAt } = body as {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    smsConsent?: boolean;
    interests?: string[];
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

  if (!firstName || !lastName || !email || !EMAIL_RE.test(email)) {
    return Response.json({ ok: false, error: "invalid_input" }, { status: 400 });
  }

  const {
    GOOGLE_SERVICE_ACCOUNT_EMAIL,
    GOOGLE_PRIVATE_KEY,
    GOOGLE_SHEET_ID,
    GOOGLE_SHEET_TAB,
  } = process.env;

  if (!GOOGLE_SERVICE_ACCOUNT_EMAIL || !GOOGLE_PRIVATE_KEY || !GOOGLE_SHEET_ID) {
    console.error("Signup route missing Google Sheets env vars");
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
    range: `${GOOGLE_SHEET_TAB || "Signups"}!A:G`,
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [[
        firstName,
        lastName,
        email,
        phone ?? "",
        (interests ?? []).join(", "),
        new Date().toISOString(),
        phone ? (smsConsent ? "yes" : "no") : "",
      ]],
    },
  });

  return Response.json({ ok: true });
}
