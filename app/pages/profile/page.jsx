import Image from "next/image";
import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/Topbar";
import Feed from "../../components/Feed";
import Rightbarprofile from "../../components/Rightbarprofile";

const page = () => {
  return (
    <>
      <Topbar />
      <div className="flex">
        <Sidebar />
        <div className="w-[75vw]">
          <div className="w-full">
            <div className="h-[320px] w-full relative">
              <Image
                className="w-[75vw] h-[250px] object-cover aspect-auto"
                src="/assets/team/avatar.jpg"
                width={2500}
                height={250}
                alt="pix"
              />
              <Image
                className="w-[160px] h-[160px] rounded-full absolute top-[150px] left-0 right-0 border-4 border-white m-auto"
                src="/assets/team/girl.png"
                width={160}
                height={160}
                alt="pix"
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h4 className="text-[24px] font-semibold">Ada Abia</h4>
              <span className="italic font-semibold">
                Hello my friends! Welcome to {new Date().getFullYear()}
              </span>
            </div>
          </div>
          <div className="flex">
            <Feed />
            <Rightbarprofile />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
