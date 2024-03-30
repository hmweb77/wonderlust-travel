
import React from 'react';
import Image from 'next/image';

export default function BlogCard({ blog }) {
  return (
    <div className="carousel-item relative w-full">
    <div className="aspect-w-1 aspect-h-1">
        <Image src={blog.imgURL} alt={blog.title}  style={{ objectFit: 'cover' }} />
      </div>
      <div className="absolute bottom-0 left-0 w-full p-4 bg-white bg-opacity-80">
        <h3 className="text-lg md:text-xl font-semibold">{blog.title}</h3>
      </div>
    </div>
  );
}





