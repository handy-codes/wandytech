import Image from "next/image";

export default function Online({ user }) {
  return (
    <li className="rightbarFriend font-semibold flex items-center gap-2 mb-[15px]">
      <div className="rightbarProfileImgContainer m-[10px] relative">
        <Image
          src={user.profilePicture}
          alt="person_pic"
          width={40}
          height={40}
          className="rightbarProfileImg rounded-full w-[40px] h-[40px] object-cover"
        />
        <span className="rightbarOnline absolute w-[13px] h-[13px] rounded-full right-0 -top-[2px] bg-[limegreen] border border-white"></span>
      </div>
      <span className="font-semibold">{user.username}</span>
    </li>
  );
}
