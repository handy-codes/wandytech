import Image from "next/image";

export default function Rightbarprofile() {
  const ProfileRightbar = () => {
    return (
      <>
        <div className="bigcover hidden lg:block mt-4 lg:w-[25vw]">
          <h4 className="font-semibold text-lg">User information</h4>
          <div className="flex flex-col gap-2 mt-3">
            <div className="flex gap-2 items-center">
              <span className="">City</span>
              <span className="font-semibold">Port Harcourt</span>
            </div>
            <div className="flex gap-2 items-center">
              <span className="">From</span>
              <span className="font-semibold">Aba</span>
            </div>
            <div className="flex gap-2 items-center">
              <span className="">Relationship</span>
              <span className="font-semibold">
                Single but not searching!
              </span>
            </div>
          </div>
          <h4 className=" mt-6 font-bold text-lg">User friends</h4>
          <div className="flex flex-wrap mr-4 mt-4 justify-between">
            <div className="flex flex-col items-center mb-[20px] cursor-pointer">
              <Image
                src="/assets/team/eleven.jpeg"
                alt="someone"
                width={100}
                height={100}      
                className="w-[100px] h-[100px] rounded-md object-cover"
              />
              <span className="font-semibold">Osuofia</span>
            </div>
            <div className="flex flex-col items-center mb-[20px] cursor-pointer">
              <Image
                src="/assets/team/one.webp"
                alt="someone"
                width={100}
                height={100}     
                className="w-[100px] h-[100px] rounded-md object-cover"
              />
              <span className="font-semibold">Mr Ibu</span>
              </div>
              <div className="flex flex-col items-center mb-[20px] cursor-pointer">
              <Image
                src="/assets/team/five.webp"
                width={100}
                height={100}      
                alt="someone"
                className="w-[100px] h-[100px] rounded-md object-cover"
              />
              <span className="font-semibold">Ada Abia</span>
            </div>
            <div className="flex flex-col items-center mb-[20px] cursor-pointer">
              <Image
                src="/assets/team/six.webp"
                width={100}
                height={100}     
                alt="someone"
                className="w-[100px] h-[100px] rounded-md object-cover"
              />
              <span className="font-semibold">Nick Bull</span>
            </div>
            <div className="flex flex-col items-center mb-[20px] cursor-pointer">
              <Image
                src="/assets/team/ten.webp"
                width={100}
                height={100}      
                alt="someone"
                className="w-[100px] h-[100px] rounded-md object-cover"
              />
              <span className="font-semibold">Ozi Oma</span>
            </div>
            <div className="flex flex-col items-center mb-[20px] cursor-pointer">
              <Image
                src="/assets/team/nine.webp"
                width={100}
                height={100}      
                alt="someone"
                className="w-[100px] h-[100px] rounded-md object-cover"
              />
              <span className="font-semibold">Guy Richie</span>
            </div>
            <div className="flex flex-col items-center mb-[20px] cursor-pointer">
              <Image
                src="/assets/team/three.webp"
                width={100}
                height={100}      
                alt="someone"
                className="w-[100px] h-[100px] rounded-md object-cover"
              />
              <span className="font-semibold">Akachi Diya</span>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <ProfileRightbar />
      </div>
    </div>
  );
}
