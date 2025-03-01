import React from "react";

import Image from "next/image";
import { Users } from "../../dummyData";
import Online from "./Online";

const Rightbar = () => {
  return (
    <div className="hidden lg:block w-[30vw] font-semibold overflow-hidden">
      <div className="pt-[20px] pr-[20px]">
        <div className="flex items-center">
          <Image
            src="/assets/team/hennessyad.jpg"
            alt="hennessyad"
            width={40}
            height={40}
            className="w-[40px] h-[40px] mr-[10px]"
          />
          <span className="text-[15px]">
            <b>Agwabunma Owo </b> and <b>3 other friend</b> like this
          </span>
        </div>
        <div className="">
          <Image
            src="/assets/team/hennessyad.jpg"
            alt="hennessy"
            width={500}
            height={500}
            className="w-full rounded-md object-contain my-[30px] hover:scale-110 transition-transform duration-300 overflow-hidden"
          />
        </div>
        <h4 className="mb-[20px]">Online Friends</h4>
        <ul className="">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Rightbar;
