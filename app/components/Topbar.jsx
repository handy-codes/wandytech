"use client";

import Image from "next/image";
import { Chat, Notifications, Person, Search } from "@mui/icons-material";
import Link from "next/link";

const Topbar = () => {
  return (
    <header className="h-[65px] bg-[#1877F2] font-semibold sticky top-0 z-50">
      <nav className="flex justify-between h-full w-full px-6 items-center text-white">
        <div><h1 className="text-3xl">Owosocial</h1></div>
        <div className="topbarCenter w-[30vw]">
          <div className="searchbar h-[40px] bg-[#fff] flex items-center rounded-full px-4">
            <Search className="searchIcon text-black mr-2" />
            <input
              type="text"
              placeholder="Search for friends, posts or videos"
              className=" w-full px-2 focus:outline-none  text-black bg-transparent"
            />
          </div>
        </div>
        <div className="flex  gap-6">
          <div className="flex space-x-4 items-center text-white">
            <Link href="/">
              <h2>HOME</h2>
            </Link>
            <Link href="/profile">
              <h2>PROFILE</h2>
            </Link>
          </div>
          <div className="flex space-x-4 items-center text-white">
            <div className="topbarIconItem relative">
              <Person sx={{ fontSize: 32 }} />
              <span className="text-xs flex items-center justify-center absolute -top-[5px] -right-[5px] bg-[red] w-[15px] h-[15px] rounded-full">
                1
              </span>
            </div>
            <div className="topbarIconItem relative">
              <Chat />
              <span className="text-xs flex items-center justify-center absolute -top-[5px] -right-[5px] bg-[red] w-[15px] h-[15px] rounded-full">
                3
              </span>
            </div>
            <div className="topbarIconItem relative">
              <Notifications />
              <span className="text-xs flex items-center justify-center absolute -top-[5px] -right-[5px] bg-[red] w-[15px] h-[15px] rounded-full">
                2
              </span>
            </div>
            <Link href="/profile">
              <Image
                src="/assets/team/girl.png"
                alt="profile logo"
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Topbar;
