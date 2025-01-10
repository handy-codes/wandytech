
import React from 'react'
import { Bookmark, Chat, Event, Group, HelpOutline, PlayCircleFilledOutlined, RssFeed, School, WorkOutline } from "@mui/icons-material"
import {Users} from "../../../dummyData";
import CloseFriend from "../CloseFriend";
import "./sidebar.css"

const Sidebar = () => {
  return (
    <div className="sidebar w-[25vw] px-5 py-3 font-semibold">
      <div className="">
        <ul className="">
          <li className="flex items-center my-4 gap-4">
            <RssFeed sx={{ fontSize: 25 }}/>
            <span className="">Chats</span>
          </li>
          <li className="flex items-center my-4 gap-4">
            <Chat sx={{ fontSize: 25 }}/>
            <span className="">Videos</span>
          </li>
          <li className="flex items-center my-4 gap-4">
            <PlayCircleFilledOutlined sx={{ fontSize: 25 }}/>
            <span className="">Groups</span>
          </li>
          <li className="flex items-center my-4 gap-4">
            <Group sx={{ fontSize: 25 }}/>
            <span className="">Bookmarks</span>
          </li>
          <li className="flex items-center my-4 gap-4">
            <Bookmark sx={{ fontSize: 25 }}/>
            <span className="">Questions</span>
          </li>
          <li className="flex items-center my-4 gap-4">
            <HelpOutline sx={{ fontSize: 25 }}/>
            <span className="">Jobs</span>
          </li>
          <li className="flex items-center my-4 gap-4">
            <WorkOutline sx={{ fontSize: 25 }}/>
            <span className="">Events</span>
          </li>
          <li className="flex items-center my-4 gap-4">
            <School sx={{ fontSize: 25 }}/>
            <span className="">Courses</span>
          </li>
          <li className="flex items-center my-4 gap-4">
            <Event sx={{ fontSize: 25 }}/>
            <span className="">Feed</span>
          </li>
        </ul>
        <button className="mb-4 mt-2 border-2 border-black rounded-md px-10 text-sm py-2 bg-[#F0F0F0] font-semibold">Show More</button>
        <hr className=""/>
        <ul className="mb-3 mt-6">
          {Users.map(u=>(
            <CloseFriend key={u.id} user={u}/>
          ))}        
        </ul>
      </div>      
    </div>
  );

}

export default Sidebar