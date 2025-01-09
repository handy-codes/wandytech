import Rightbar from "./components/Rightbar";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/Topbar";
import Feed from "./components/Feed";

export default function Home() {
  return (
    <>
      <Topbar />
      <div className="flex justify-between">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
}
