import React from "react";
import Image from "next/image";
import { Users } from "../../dummyData";
import Online from "./Online";

const Rightbar = () => {
  return (
    <div className="rightbar w-[30vw] overflow-hidden">
      <div className="rightbarWrapper pt-[20px] pr-[20px]">
        <div className="birthdayContainer flex items-center">
          <Image
            src="/assets/team/hennessyad.jpg"
            alt="hennessyad"
            width={40}
            height={40}
            className="birthdayImg w-[40px] h-[40px] mr-[10px]"
          />
          <span className="birthdayText text-[15px]">
            <b>Agwabunma Owo </b> and <b>3 other friend</b> like this
          </span>
        </div>
        <div className="hennessy">
          <Image
            src="/assets/team/hennessyad.jpg"
            alt="hennessy"
            width={500}
            height={500}
            className="rightbarAd w-full rounded-md object-contain my-[30px]"
          />
        </div>
        <h4 className="rightbarTitle mb-[20px]">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Rightbar;
