import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;


    if (pathname.startsWith("/booking")) {
        const token = req.cookies.get("userToken")?.value;
        if (!token) {
            console.log("Where is the token? or is it expired?");
            const signInUrl = new URL("/login", req.url);
            signInUrl.searchParams.set("callbackUrl", req.nextUrl.pathname);
            return NextResponse.redirect(signInUrl);
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/:path*"], // Apply middleware to protected routes
};
