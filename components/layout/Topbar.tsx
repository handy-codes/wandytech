"use client";

import { UserButton, useAuth } from "@clerk/nextjs";
import { Menu, Home, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Topbar = () => {
  const { isSignedIn } = useAuth();
  const router = useRouter();
  const pathName = usePathname();

  const topRoutes = [
    { label: "Home", path: "/" },
    { label: "Instructor", path: "/instructor/courses" },
    { label: "My Learning", path: "/learning" },
  ];

  const sidebarRoutes = [
    { label: "Courses", path: "/instructor/courses" },
    {
      label: "Performance",
      path: "/instructor/performance",
    },
  ];

  const [searchInput, setSearchInput] = useState("");

  const handleSearch = () => {
    if (searchInput.trim() !== "") {
      router.push(`/search?query=${searchInput}`);
    }
    setSearchInput("");
  };

  return (
    <div className="flex w-full mx-auto content-center justify-between sticky z-50 top-0 bg-blue-700 text-white font-bold text-2xl items-center p-4">
      <Link className="flex items-center content-center gap-4" href="/">
        <Home color="#FDB31D" className="w-6 h-6" />
        {/* <Image src="/wandylogo.jpg" height={20} width={80} alt="logo" /> */}
        {/* <Image src="/logo2.png" height={80} width={200} alt="logo" /> */}
        <h1>LearnHub</h1>
      </Link>

      <div className="max-md:hidden w-[400px] rounded-full flex">
        <input
          className="flex-grow bg-[#FFF8EB] rounded-l-full border-none outline-none text-sm pl-4 py-3"
          placeholder="Search for courses"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button
          className="bg-[#FDAB04] rounded-r-full border-none outline-none cursor-pointer px-4 py-3 hover:bg-[#FDAB04]/80"
          disabled={searchInput.trim() === ""}
          onClick={handleSearch}
        >
          <Search className="h-4 w-4" />
        </button>
      </div>

      <div className="flex gap-6 items-center">
        <div className="max-sm:hidden flex gap-6">
          {topRoutes.map((route) => (
            <Link
              href={route.path}
              key={route.path}
              className="text-sm font-bold hover:text-[#FDAB04]"
            >
              {route.label}
            </Link>
          ))}
        </div>

        <div className="z-20 sm:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu color="#FDB31D" className="w-9 h-9" />
            </SheetTrigger>
            <SheetContent className="flex flex-col gap-4">
              <div className="flex flex-col gap-4">
                {topRoutes.map((route) => (
                  <Link
                    href={route.path}
                    key={route.path}
                    className="text-2xl font-medium hover:text-[#FDAB04]"
                  >
                    {route.label}
                  </Link>
                ))}
              </div>
              
              {pathName.startsWith("/instructor") && (
                <div className="flex flex-col gap-4">
                  {sidebarRoutes.map((route) => (
                    <Link
                      href={route.path}
                      key={route.path}
                      className="text-lg font-medium hover:text-[#FDAB04]"
                    >
                      {route.label}
                    </Link>
                  ))}
                </div>
              )}
            </SheetContent>
          </Sheet>
        </div>
        {isSignedIn ? (
          <UserButton afterSignOutUrl="/" />
          // <UserButton afterSignOutUrl="/sign-in" />
        ) : (
          <Link href="/sign-in">
            <Button>Sign In</Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Topbar;
