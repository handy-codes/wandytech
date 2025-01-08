"use client";

import Image from "next/image";
import { Chat, Notifications, Person, Search } from "@mui/icons-material";
import Link from "next/link";

const Topbar = () => {
  return (
    <header className="h-[65px] bg-[#1877F2] sticky top-0 z-50">
      <nav className="flex justify-between h-full w-full px-6 items-center text-white">
        <div className="topbarLeft">Owosocial</div>
        <div className="topbarCenter">
          <div className="searchbar">
            <Search className="searchIcon" />
            <input
              placeholder="Search for friends, posts or videos"
              className="searchInput"
            />
          </div>
        </div>
        <div className="flex gap-6">
          <div className="flex space-x-4 items-center text-white">
            <h2>HOME</h2>
            <h2>PROFILE</h2>
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
            <Image
              src="/assets/team/girl.png"
              alt="profile logo"
              width={40}
              height={40}
              className="rounded-full object-cover"
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Topbar;
