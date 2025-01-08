import { EmojiEmotions, Label, PermMedia, Room } from "@mui/icons-material"
import Image from "next/image"

export default function Share() {
  return (
    <div className="share w-[100%] h-[170px] rounded-md shadow-md">
        <div className="shareWrapper p[10px]">
            <div className="shareTop pl-4 pt-4 flex items-center">
                <Image className="shareProfileImg w-[50px] h-[50px] rounded-full object-cover mr-[10px]" src="/assets/team/girl.png" alt="a lady" width={50}
              height={50} />
                <input placeholder="What's in your mind Ada Abia?" className="shareInput focus:outline-none w-full"/>
            </div>
            <hr className="shareHr m-[20px]" />
            <form className="shareBottom flex items-center justify-between" >
                <div className="shareOptions flex items-center px-6 gap-2">
                    <label htmlFor="file" className="shareOption file flex items-center mr-[15px] cursor-pointer">
                        <PermMedia htmlColor="tomato" className="shareIcon font-bold mr-[3px]"/>
                        <span className="shareOptionText text-[14px] font-bold">Photo or Videos</span>
                        <input style={{display:"none"}} type="text" id="file" accept=".png, .jpeg, .jpg"/>
                    </label>
                    <button className="shareButton border-none p-[7px] text-[12px] rounded-md text-white cursor-pointer mr-[20px] bg-[green]" type="button">Share</button>
                    <div className="shareOption show1">
                        <Label htmlColor="green" className="shareIcon"/>
                        <span className="shareOptionText">Tag</span>
                    </div>
                    <div className="shareOption show2">
                        <Room htmlColor="blue" className="shareIcon"/>
                        <span className="one shareOptionText">Location</span>
                    </div>
                    <div className="two shareOption">
                        <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
                        <span className="two shareOptionText">Feelings</span>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}
