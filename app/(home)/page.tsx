import { db } from "@/lib/db";
import getCoursesByCategory from "../actions/getCourses";
import Categories from "@/components/custom/Categories";
import CourseCard from "@/components/courses/CourseCard";
import Intro from "@/components/layout/Intro";
import FooterPage from "@/components/layout/Footer";

export default async function Home() {
  const categories = await db.category.findMany({
    orderBy: {
      name: "asc",
    },
    include: {
      subCategories: {
        orderBy: {
          name: "asc",
        },
      },
    },
  });

  const courses = await getCoursesByCategory(null);
  return (
    <>
    <div className="mb-0">
    {/* Atuo-scrolling texts start */}
      <div className="scroll-cover">
      <div className="scrolling-text-container">
          <marquee behavior="" direction="left">
              <h4>The Bethel Academy is proud to graduate our first set of Frontend Developers | This day - 22nd June, 2024!</h4>       
          </marquee>
          <span>Top News!</span>
      </div>
      </div>
    {/* Atuo-scrolling texts ends */}
      <Intro/>
      <div className="md:mt-5 mb-0 md:px-10 xl:px-16 pb-16">
        <Categories categories={categories} selectedCategory={null} />
        <div className="flex flex-wrap gap-7 justify-center">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>   
      </div>
        <FooterPage/>   
    </div>
    </>
  );
}
