import Image from "next/image";

export default function Online({ user }) {
  return (
    <li className="rightbarFriend flex items-center gap-4 mb-[15px]">
      <div className="rightbarProfileImgContainer">
        <Image
          src={user.profilePicture}
          alt="person_pic"
          width={40}
          height={40}
          className="rightbarProfileImg relative rounded-full w-[40px] h-[40px] object-cover"
        />
        <span className="rightbarOnline absolute w-[12px] h-[12px] ring-0 -top-[2px] bg-[limegreen]"></span>
      </div>
      <span className="rightbarUsername">{user.username}</span>
    </li>
  );
}
