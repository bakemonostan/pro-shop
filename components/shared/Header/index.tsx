import { ShoppingCart, UserIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/constants";
import ModeToggle from "./mode-toggle";
function Header() {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link
            href="/"
            className="flex items-center flex-start gap-2">
            <Image
              src="/images/logo.svg"
              alt={`${APP_NAME} Logo`}
              width={48}
              height={48}
              priority={true}
            />
            <span className="sr-only lg:not-sr-only hidden lg:block font-bold text-2xl ml-3">
              {APP_NAME}
            </span>
          </Link>
        </div>
        <div className="space-x-3.5">
          <ModeToggle />
          <Button
            variant="ghost"
            asChild>
            <Link href="/cart">
              <ShoppingCart /> Cart
            </Link>
          </Button>
          <Button asChild>
            <Link href="/sign-in">
              <UserIcon /> Sign In
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
