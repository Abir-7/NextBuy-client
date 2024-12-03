import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getCurrentUser } from "./services/authService";
import { IUserToken } from "./interface/token.interface";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const user = (await getCurrentUser()) as IUserToken;

  // auth login signup condition
  if (
    !user &&
    (request.nextUrl.pathname === "/login" ||
      request.nextUrl.pathname === "/signup")
  ) {
    return NextResponse.next();
  }
  //admin route
  if (user?.role == "ADMIN" && request.nextUrl.pathname.startsWith("/admin")) {
    return NextResponse.next();
  }
  //customer route
  if (
    user?.role == "CUSTOMER" &&
    request.nextUrl.pathname.startsWith("/customer")
  ) {
    return NextResponse.next();
  }
  //vendor route
  if (
    user?.role == "VENDOR" &&
    request.nextUrl.pathname.startsWith("/vendor")
  ) {
    return NextResponse.next();
  }

  //protect product details page
  if (request.nextUrl.pathname === "/product") {
    console.log("ff");
    return NextResponse.next();
  }
  console.log("fk");
  const productDetailsPattern = /^\/product\/[^/]+$/;
  console.log(
    productDetailsPattern.test(request.nextUrl.pathname),
    user,
    request.nextUrl.pathname
  );

  if (user && productDetailsPattern.test(request.nextUrl.pathname)) {
    console.log("object");
    return NextResponse.next();
  }

  //default
  return NextResponse.redirect(new URL("/", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/customer/:path*", "/admin/:path*", "/login", "/product/:path*"],
};
