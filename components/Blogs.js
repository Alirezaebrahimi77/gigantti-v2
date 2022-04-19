import React from "react";
import Link from "next/link"
import Image from "next/image"


function Blogs({blogsData}) {
  return (
    <div className="w-full px-12 py-10">
        <div className="flex max-w-full lg:w-[90%] 2xl:max-w-screen-2xl justify-between m-auto overflow-hidden flex-wrap">
            {blogsData?.map(blog => (
                <SingleBlog key={blog.id} blog={blog}/>
            ))}
        </div>

    </div>
  );
}

export default Blogs;

const SingleBlog = ({blog}) => {
  return (
    <Link href="/blogs">
      <div className="flex flex-col w-full md:w-2/5 lg:w-2/5 xl:w-2/5 2xl:w-[300px] md:mb-10">
          <div className="w-full">
              <Image src={blog.image} alt={"Samsung"} objectFit="contain" className="w-full h-full"/>
          </div>
          <div className="text-bold text-xl font-bold">
              <h3>{blog.title}</h3>
          </div>
          <div className="text-gray-800 my-6 leading-loose">
              <p>{blog.text}</p>
          </div>
          <div className="flex justify-start items-center mt-6">
              <Link href="/blog/:id">
                  <div className="py-2 px-4 rounded-3xl border border-gray-300 text-black font-bold cursor-pointer hover:border-black">
                    {blog.buttonText}
                  </div>
              </Link>
          </div>

      </div>
    </Link>
  );
};
