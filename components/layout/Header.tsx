"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const Header = () => {
  const pathname = usePathname();
  const navLinkBase =
    "inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium bg-transparent text-white hover:bg-transparent hover:text-white focus:bg-transparent active:bg-transparent";

  const activeLineBase =
    "pointer-events-none absolute inset-x-0 -bottom-1 mx-auto h-[2px] w-full rounded-full bg-white origin-center transform transition-transform duration-300 ease-out";

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  return (
    <header className="p-3 bg-primary">
      <div className="container mx-auto">
        <div className="flex items-center justify-between w-full">
          <Link href="/" className="cursor-pointer flex items-center gap-2">
            <Image src="/logo.webp" alt="Logo" width={100} height={100} className="w-10 h-10 rounded-full" />
            <span className="text-white text-lg font-bold">Tech$torm</span>
          </Link>

          <NavigationMenu>
            <NavigationMenuList className="gap-4">
              <NavigationMenuItem className="relative">
                <Link
                  href="/"
                  className={navLinkBase}
                >
                  Home
                </Link>
                <span
                  className={`${activeLineBase} ${
                    isActive("/") ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </NavigationMenuItem>
              <NavigationMenuItem className="relative">
                <Link
                  href="/about"
                  className={navLinkBase}
                >
                  About
                </Link>
                <span
                  className={`${activeLineBase} ${
                    isActive("/about") ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </NavigationMenuItem>
              <NavigationMenuItem className="relative">
                <Link
                  href="/support"
                  className={navLinkBase}
                >
                  Support
                </Link>
                <span
                  className={`${activeLineBase} ${
                    isActive("/support") ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </NavigationMenuItem>
              <NavigationMenuItem className="relative">
                <Link
                  href="/contact"
                  className={navLinkBase}
                >
                  Contact
                </Link>
                <span
                  className={`${activeLineBase} ${
                    isActive("/contact") ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="bg-transparent border-none hover:bg-transparent cursor-pointer px-1">
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                    className="grayscale"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-72 p-3 rounded-xl border border-gray-700 bg-black text-white shadow-xl"
            >
              {/* Workspace header */}
              <div className="flex items-start gap-3 px-4 pt-4 pb-3">
                <div className="flex-1">
                  <p className="text-sm font-semibold text-white">My Workspace</p>
                  <p className="text-xs text-gray-400">1 member</p>
                </div>
                <Button className="bg-transparent border border-gray-600 hover:bg-gray-900 cursor-pointer text-white">
                  Settings
                </Button>
              </div>

              {/* Monthly credits */}
              <div className="border rounded-2xl py-3">
              <div className="px-4 pb-3">
                <p className="text-xs font-medium text-gray-300">
                  Monthly Credits
                </p>
                <div className="mt-2 h-1.5 w-full rounded-full bg-gray-800">
                  <div className="h-full w-[10%] rounded-full bg-white" />
                </div>
                <div className="mt-1 flex items-center justify-between text-[11px] text-gray-400">
                  <span>2.4/25</span>
                  <span>Renews at 12/3/26 | 12:00am</span>
                </div>
              </div>

              {/* Daily credits */}
              <div className="px-4 pb-3">
                <p className="text-xs font-medium text-gray-300">
                  Daily Credits
                </p>
                <div className="mt-1 flex items-center justify-between text-[11px] text-gray-400">
                  <span>2.4/5</span>
                </div>
                <button className="mt-1 text-xs font-semibold text-white hover:underline">
                  Upgrade your plan
                </button>
              </div>
              </div>

              {/* Workspaces */}
              <div className="border-gray-800 px-4 py-3">
                <p className="text-xs font-semibold text-gray-400 mb-2">
                  My Workspaces
                </p>
                <button className="flex w-full items-center justify-between rounded-md bg-gray-900 px-3 py-2 text-xs font-medium text-white">
                  <span className="flex items-center gap-2">
                    My Workspace
                  </span>
                  <span className="text-[10px] text-gray-400">Current</span>
                </button>
                <button className="mt-2 flex items-center gap-2 text-xs font-medium text-white hover:underline">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full border border-gray-500 text-sm leading-none">
                    +
                  </span>
                  New workspace
                </button>
              </div>

              <DropdownMenuSeparator />

              {/* Email */}
              <div className="border-gray-800 px-4 py-2 text-[11px] text-gray-400">
                vikasdeshmukh63@gmail.com
              </div>


              <DropdownMenuSeparator />

              <DropdownMenuItem className="px-4 py-1.5 text-sm cursor-pointer text-white hover:bg-gray-900">
                Account Settings
              </DropdownMenuItem>
              <DropdownMenuItem className="px-4 py-1.5 text-sm cursor-pointer text-white hover:bg-gray-900">
                Become an Affiliate
              </DropdownMenuItem>
              <DropdownMenuItem className="px-4 py-1.5 text-sm cursor-pointer text-white hover:bg-gray-900">
                Refer a Friend
              </DropdownMenuItem>

              <DropdownMenuSeparator />

              <DropdownMenuItem className="px-4 py-2 text-sm font-medium text-white cursor-pointer hover:bg-gray-900">
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
