"use client";

import Image from "next/image";
import { Chat, Notifications, Person, Search } from "@mui/icons-material";
import Link from "next/link";

const Topbar = () => {
  return (
    <header className="h-[65px] bg-[#1877F2] font-semibold sticky top-0 z-50">
      <nav className="flex justify-between h-full w-full px-4 sm:p-6 items-center text-white">
        <Link href="/">
          <h1 className="sm:block text-2xl mr-3">MeX</h1>
        </Link>
        <div className="w-[30vw]">
          <div className="h-[40px] bg-[#fff] hidden md:flex items-center rounded-full px-4">
            <Search className="text-black mr-2" />
            <input
              type="text"
              placeholder="Search for friends, posts or videos"
              className=" w-full px-2 focus:outline-none  text-black bg-transparent"
            />
          </div>
        </div>
        <div className="flex gap-6">
          <div className="flex gap-4 items-center text-white">
            <Link href="/">
              <h2>HOME</h2>
            </Link>
            <Link href="/pages/profile">
              <h2>PROFILE</h2>
            </Link>
          </div>
          <div className="hidden sm:flex gap-2 sm:gap-4 items-center text-white">
            <div className="relative cursor-pointer">
              <Person sx={{ fontSize: 32 }} />
              <span className="text-xs flex items-center justify-center absolute -top-[5px] -right-[5px] bg-[red] w-[15px] h-[15px] rounded-full">
                1
              </span>
            </div>
            <div className="relative cursor-pointer">
              <Chat />
              <span className="text-xs flex items-center justify-center absolute -top-[5px] -right-[5px] bg-[red] w-[15px] h-[15px] rounded-full">
                3
              </span>
            </div>
            <div className="relative cursor-pointer">
              <Notifications />
              <span className="text-xs flex items-center justify-center absolute -top-[5px] -right-[5px] bg-[red] w-[15px] h-[15px] rounded-full">
                2
              </span>
            </div>
            <Link href="/pages/profile" className="cursor-pointer ml-4">
              <Image
                src="/assets/team/girl.png"
                alt="profile logo"
                width={32}
                height={32}
                className="w-[32px] h-[32px] rounded-full object-cover"
              />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Topbar;
