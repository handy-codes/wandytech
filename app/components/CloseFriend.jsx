import Image from "next/image";

export default function CloseFriend({ user }) {
  return (
    <li className="flex items-center gap-3 my-4">
      <Image
        src={user.profilePicture}
        width={32}
        height={32}
        alt="my people"
        className="w-[32x] h-[32px] rounded-full cursor-pointer object-cover"
      />
      <span className="font-semibold">{user.username}</span>
    </li>
  );
}
