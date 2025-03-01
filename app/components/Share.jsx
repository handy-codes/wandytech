import { EmojiEmotions, Label, PermMedia, Room } from "@mui/icons-material"
import Image from "next/image"

export default function Share() {
  return (
    <div className="share w-[100%] h-[170px] rounded-md shadow-md">
        <div className="p[10px]">
            <div className="pl-4 pt-4 flex items-center">
                <Image className="w-[50px] h-[50px] rounded-full object-cover mr-[10px]" src="/assets/team/girl.png" alt="a lady" width={50}
              height={50} />
                <input placeholder="What's in your mind Ada Abia?" className="shareInput focus:outline-none w-full font-semibold"/>
            </div>
            <hr className="m-[20px] border-black" />
            <form className="flex items-center justify-between" >
                <div className="flex items-center px-6 gap-2">
                    <label htmlFor="file" className="file flex items-center mr-[15px] cursor-pointer">
                        <PermMedia htmlColor="tomato" className="font-bold mr-[3px]"/>
                        <span className="text-[14px] font-bold">Photo or Videos</span>
                        <input style={{display:"none"}} type="text" id="file" accept=".png, .jpeg, .jpg"/>
                    </label>
                    <button className="border-none p-[7px] text-[12px] rounded-md text-white cursor-pointer mr-[20px] bg-[green]" type="button">Share</button>
                    <div className="">
                        <Label htmlColor="green" className=""/>
                        <span className="">Tag</span>
                    </div>
                    <div className="">
                        <Room htmlColor="blue" className=""/>
                        <span className="">Location</span>
                    </div>
                    <div className="">
                        <EmojiEmotions htmlColor="goldenrod" className=""/>
                        <span className="">Feelings</span>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}
