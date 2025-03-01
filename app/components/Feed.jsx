import React from 'react'

import Share from "./Share";
import { Posts } from "../../dummyData"
import Post from "./Post";

export default function Feeds() {
  return (
    <div className="w-[100vw] md:w-[75vw] lg:w-[45vw] p-5 py-6">
      <div className="">
        <Share/>
        {Posts.map(p=>(
          <Post key={p.id} post={p} /> 
        ))}             
      </div>
    </div>
  );
}
