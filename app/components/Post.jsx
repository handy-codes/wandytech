"use client";

import { MoreVert } from "@mui/icons-material";
import { Users } from "../../dummyData";
import { useState } from "react";
import Image from "next/image";

export default function Post({ post }) {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);
  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
  return (
    <div className="post w-[100%] rounded-md hover:scale-[1.025]">
      <div className="postWrapper p-3">
        <div className="postTop flex items-center justify-between">
          <div className="postTopLeft flex items-center">
            <Image
              src={Users.filter((u) => u.id === post.userId)[0].profilePicture}
              alt="our member"
              width={40}
              height={40}
              className="postProfileImg w-[32px] h-[32px] rounded-full object-cover mr-[10px]"
            />
            <span className="postUsername text-[15px] font-semibold mx-[10px]">
              {Users.filter((u) => u.id === post.userId)[0].username}{" "}
            </span>
            <span className="postDate text-[12px]">{post.date} </span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter my-[20px]">
          <span className="postText">{post?.desc}</span>
            <Image
              className="postImg w-full max-h-[500px] mt-[20px] object-contain"
              src={post.photo}
              alt="lagos_rail"
              width={500}
              height={500}
            />
        </div>
        <div className="postBottom flex items-center justify-between">
          <div className="postBottomLeft flex items-center">
            <Image
              className="likeIcon cursor-pointer w-[24px] h-[24px] mr-[5px]" 
              src="/assets/team/like.png"
              onClick={likeHandler}
              alt="like_image"
              width={40}
              height={40}
            />
            <Image
              className="likeIcon cursor-pointer w-[24px] h-[24px] mr-[10px]" 
              src="/assets/team/heart.jpg"
              onClick={likeHandler}
              alt="heart_image"
              width={40}
              height={40}
            />
            <span className="postlikeCounter text-[15px]">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText text-[15px]">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
