"use client"; 
import { ModeToggle } from "@/components/mode-toggle";
import { MoveUpRightIcon } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { SheetLeftbar } from "./leftbar";
import { CommandMenu } from "@/components/command-menu";
import { LogoI } from "./Logo";
import { Icons } from "./icons";
import Anchor from "./anchor";
import { SheetClose } from "@/components/ui/sheet";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

interface NavLink {
  title: string;
  href: string;
  external?: boolean;
}

export const NAVLINKS: NavLink[] = [
];

export function Navbar() {

  return (
    <nav className="w-full border-b h-16 sticky top-0 z-50 bg-background">
      <div className="max-w-[1300px] sm:px-0 px-3 mx-auto h-full flex items-center justify-between md:gap-2">
        <div className="flex items-center gap-5">
          <SheetLeftbar />
          <div className="flex items-center gap-6">
            <div className="sm:flex hidden">
              <Logo />
            </div>
            <div className="lg:flex hidden items-center gap-4 text-sm font-medium text-muted-foreground">
              
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
          <CommandMenu data={[]} />
            
            <div className="flex ml-2.5 sm:ml-0">
              <Link
                href="https://github.com/codetil/Period-Cramp-Soother"
                className={buttonVariants({ variant: "ghost", size: "icon" })}
              >
                <Icons.gitHub className="size-5" />
              </Link>
              <ModeToggle />
              <div className="flex items-center mx-2">
              <SignedIn>
               <UserButton />
              </SignedIn>
              </div>

            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5">
      <LogoI />
      <h2 className="text-md font-bold">Period Cramp Soother</h2>
    </Link>
  );
}


export function NavMenu({ isSheet = false }) {
  return (
    <>
      {NAVLINKS.map((item) => {
        const Comp = (
          <Anchor
            key={item.title + item.href}
            activeClassName="!text-primary md:font-semibold font-medium"
            absolute
            className="flex items-center gap-1 dark:text-stone-300/85 text-stone-800"
            href={item.href}
          >
            {item.title}{" "}
            {item.external && (
              <MoveUpRightIcon
                className="w-3 h-3 align-super"
                strokeWidth={3}
              />
            )}
          </Anchor>
        );
        return isSheet ? (
          <SheetClose key={item.title + item.href} asChild>
            {Comp}
          </SheetClose>
        ) : (
          Comp
        );
      })}
    </>
  );
}
