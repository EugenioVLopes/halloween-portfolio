"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const menuItems = [
  { href: "#about", label: "Sobre" },
  { href: "#include", label: "Include" },
  { href: "#personal", label: "Personal" },
];

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleMenuItemClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-orange-800 bg-orange-900/90 backdrop-blur-sm">
      <div className="container h-20 flex items-center justify-between max-w-screen-lg">
        <div className="mr-4 md:flex-1">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-orange-100">
              Portfolio Include 🎃
            </span>
          </Link>
        </div>
        <div className="flex md:flex-1 md:justify-end">
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              {menuItems.map((item) => (
                <NavigationMenuItem key={item.href} >
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      {item.label}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="bg-orange-900/95 text-orange-100"
            >
              <SheetHeader>
                <SheetTitle className="hidden">Menu Mobile</SheetTitle>
                <SheetDescription className="hidden">
                  Menu Mobile
                </SheetDescription>
              </SheetHeader>

              <nav className="flex flex-col space-y-4 mt-4">
                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-lg font-medium hover:text-orange-200"
                    onClick={handleMenuItemClick}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export default Header;
