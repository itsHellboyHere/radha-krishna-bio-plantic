import { NextResponse } from "next/server";

const LOCKED = process.env.SITE_LOCKED === "true";
const KEY = process.env.PREVIEW_KEY || "monk2026";

export function middleware(req) {
  if (!LOCKED) return NextResponse.next();

  const { pathname, searchParams } = req.nextUrl;

  // preview unlock: ?key=monk2026 → cookie set
  if (searchParams.get("key") === KEY) {
    const res = NextResponse.redirect(new URL(pathname, req.url));
    res.cookies.set("preview", KEY, { maxAge: 60 * 60 * 24 * 7, httpOnly: true });
    return res;
  }

  if (req.cookies.get("preview")?.value === KEY) return NextResponse.next();

  return NextResponse.rewrite(new URL("/soon", req.url));
}

export const config = {
  matcher: ["/((?!_next|favicon|icon|apple-icon|og-image|products|robots.txt|sitemap.xml).*)"],
};