import Image from "next/image";
import Link from "next/link";

import { CiCalendar, CiPen } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";
import posts from "../../../assets/data/posts.json"; // Adjust the path as necessary

export default function Blogs() {
  const featuredPost = posts.posts.find((post) => post.featured);
  const regularPosts = posts.posts.filter((post) => !post.featured);

  return (
    <div className="container md:mt-20 mt-10">
      {/* Featured Post */}
      {featuredPost && (
        <div className="mb-8 flex justify-center ">
          <article className="relative overflow-hidden rounded-2xl">
            {/* Image */}
            <Image
              src={featuredPost.image || "/placeholder.svg"}
              alt={featuredPost.title}
              width={1296}
              height={580}
              className="md:w-[1296px]  object-cover h-[300px] sm:h-[400px] md:h-[580px] rounded-2xl"
            />
            {/* Content Overlay */}
            <div className="absolute bottom-5 left-5 sm: bg-yellow-primary w-full sm:w-[80%] md:w-[600px] md:h-[296]  p-4 sm:p-6  md:px-10 md:pt-9 rounded-xl">
              {/* Author and Date */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-4 font-medium text-black-secondary italic font-satoshi text-xs sm:text-sm mb-4">
                <div className="flex items-center gap-2">
                  <CiPen className="w-4 h-4 -rotate-90" />
                  <span>{featuredPost.authorName}</span>
                </div>
                <span className="hidden sm:inline text-gray-700">/</span>
                <div className="flex items-center gap-2">
                  <CiCalendar className="w-4 h-4" />
                  <span>{featuredPost.date}</span>
                </div>
              </div>
              {/* Title */}
              <h1 className=" md:text-[28px] font-semibold text-black md:mb-4 sm:mb-8">
                {featuredPost.title}
              </h1>
              <div className="w-full pt-4 border-t border-[#0000001A]"></div>
              {/* Excerpt */}
              <p className="text-black-secondary md:font-medium md:w-[90%] text-sm  md:mt-4">
                {featuredPost.excerpt}
              </p>
            </div>
          </article>
        </div>
      )}

      {/* Regular Posts Grid */}
      <div className="grid md:max-w-[1296px] mx-auto gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {regularPosts.map((post) => (
          <article
            key={post.id}
            className="bg-[#F8F8F8] rounded-[20px] shadow-sm p-6 sm:p-8 lg:p-10"
          >
            {/* Author and Date */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm italic text-black-secondary mb-4">
              <div className="flex items-center gap-2">
                <CiPen className="w-4 h-4 -rotate-90" />
                <span>{post.authorName}</span>
              </div>
              <span className="hidden sm:inline text-black-secondary">/</span>
              <div className="flex items-center gap-2">
                <CiCalendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
            </div>
            {/* Post Title */}
            <h2 className="text-base sm:text-lg lg:text-[22px] font-semibold mb-4 text-black">
              {post.title}
            </h2>
            {/* View Details Link */}
            <Link
              href={`/our-blogs/${post.id}`}
              className="inline-flex items-center gap-2 text-black hover:text-gray-900 transition-colors group"
            >
              <span className="font-bold font-satoshi">View Details</span>
              <span className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-yellow-primary flex items-center justify-center transition-colors">
                <FaArrowRightLong />
              </span>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
