import React from 'react';
import Image from "next/image";

export default function Online({ user }) {
  return (
    <li className="font-semibold flex items-center gap-2 mb-[15px]">
      <div className="flex m-[10px] ">
        <Image
          src={user.profilePicture}
          alt="person_pic"
          width={40}
          height={40}
          className="rounded-full w-[40px] h-[40px] object-cover"
        />
        <span className="-ml-[8px] w-[13px] h-[13px] rounded-full right-0 -top-[2px] bg-[limegreen] border-2 border-white"></span>
      </div>
      <span className="font-semibold">{user.username}</span>
    </li>
  );
}
