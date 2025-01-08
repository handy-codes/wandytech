import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/Topbar";

export default function Home() {
  return (
    <>
     <Topbar/>
     <div className="flex justify-between">
      <Sidebar/>
      <Feed/>
      <Rightbar/>
     </div>
    </>    
  );
}
