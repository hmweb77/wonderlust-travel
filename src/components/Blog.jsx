"use client";
import { useState } from "react";
import BlogCard from "./BlogCard";
import image1 from "../app/assets/pexels-james-lee-9326693.jpg";
import image2 from "../app/assets/pexels-siegfried-poepperl-7928094.jpg";

const blogs = [
  {
    id: 1,
    title: "How to Pack for Your Next Trip",
    imgURL: image1,
  },
  {
    id: 2,
    title: "how to find the best spot",
    imgURL: image2,
  },
];

export default function Blogs() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goPrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : blogs.length - 1
    );
  };

  const goNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex < blogs.length - 1 ? prevIndex + 1 : 0
    );
  };
  return (
    <>
    <div className="relative w-full overflow-hidden">
      <div
        className="whitespace-nowrap transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {blogs.map((blog, index) => (
          <div className="inline-block w-full align-middle" key={blog.id}>
            <BlogCard blog={blog} />
          </div>
        ))}
      </div>
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg"
        onClick={goPrev}
      >
        ❮
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg"
        onClick={goNext}
      >
        ❯
      </button>
    </div>
    <button> Explore more</button>
    </>
  );
}
