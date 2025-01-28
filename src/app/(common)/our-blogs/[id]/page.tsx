import posts from "@/assets/data/posts.json";
import commentimg1 from "@/assets/images/comment avatar 2.png";
import commentimg2 from "@/assets/images/comment avatar.png";
import postimg from "@/assets/images/featuredPostimg.jpeg";
import authorimg from "@/assets/images/Mask group.png";
import laptopimg from "@/assets/images/pic (1).png";
import ladyimg from "@/assets/images/pic.png";
import popularImg1 from "@/assets/images/sidebar 1.png";
import popularImg2 from "@/assets/images/sidebar 2.png";
import popularImg3 from "@/assets/images/sidebar 3.png";
import CallToAction from "@/components/shared/CallToAction/CallToAction";
import PageHeader from "@/components/shared/PageHeader/PageHeader";
import Image from "next/image";
import { FaFacebookF, FaPinterest, FaTwitter, FaVimeoV } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

export default async function BlogPost({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const post = posts.posts.find((p) => p.id === Number(id));

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <section>
      <PageHeader title="Blog Details" subtitle="Blog Details" />
      <div className="container mx-auto px-4 pb-8 md:mt-[140px] sm:mt-[70px] mt-[50px]">
        <div className="flex flex-wrap md:justify-center  lg:flex-nowrap gap-6">
          {/* Main Content */}
          <div className="lg:w-[816px]">
            <div className="flex-1 w-full  ">
              <div>
                <Image
                  src={postimg}
                  alt={post.authorName}
                  width={816}
                  height={518}
                  className="rounded-lg md:h-[518px]  w-full object-cover"
                />
              </div>

              {/* Author Info */}
              <div className="flex flex-col md:flex-row  justify-between items-center mt-10 mb-5">
                <div className="flex items-center gap-4">
                  <Image
                    src={authorimg}
                    alt={post.authorName}
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold text-xl md:text-2xl">
                      {post.authorName}
                    </h3>
                    <p className="text-black-secondary font-medium text-sm md:text-base">
                      Senior Writer and Editor
                    </p>
                  </div>
                </div>
                <div className="flex items-center text-black-secondary space-x-4 mt-4 md:mt-0">
                  <span>10 Min. Read</span>
                  <div className="w-8 h-[1px] bg-gray-500"></div>
                  <span>{post.date}</span>
                </div>
              </div>
              <div className="border-b mb-10"></div>

              {/* Article Title */}
              <h1 className="text-2xl md:text-4xl md:w-[591px] font-semibold mb-6">
                {post.title}
              </h1>

              {/* Article Content */}
              <div className="prose max-w-none  mb-8">
                <p className="text-gray-600 text-base leading-relaxed">
                  Building a positive work culture in a young office starts with
                  fostering an environment of open communication, flexibility,
                  and growth. Encouraging team members to share ideas freely
                  promotes a culture of trust and collaboration, essential for
                  young professionals eager to contribute.
                </p>
                <p className="text-gray-600 text-base leading-relaxed mt-4">
                  Creating a thriving work culture in a young office revolves
                  around openness, growth, and purpose. Embracing flexibility,
                  such as remote work options and adaptable hours, respects
                  individual needs and fosters loyalty.
                </p>
              </div>

              {/* Quote Section */}
              <blockquote className="bg-yellow-primary font-satoshi p-6 my-8 rounded-lg">
                <p className="md:text-[22px] font-medium mb-4">
                  &quot;At Vyazen, we’re passionate about turning your ideas
                  into impactful digital solutions. Whether you’re looking to
                  elevate your brand, expand your online presence, or drive
                  meaningful results, our team is here to help. Let’s
                  collaborate to create something extraordinary and bring your
                  vision to life. Take the first step toward success—reach out
                  to us today!&quot;
                </p>
                <p className="text-xl flex items-center gap-2 font-medium">
                  <span>
                    <h1 className="w-[30px] h-[1px] bg-black"></h1>
                  </span>{" "}
                  Darrell Steward
                </p>
              </blockquote>

              {/* Additional Sections and Comments */}
              <div className="md:max-w-screen-lg mx-auto my-8">
                <div className="space-y-4">
                  <h1 className="lg:text-[32px] text-2xl font-semibold text-black">
                    Thousand Unknown Plants Are Noticed.
                  </h1>
                  <p className="text-black-secondary font-medium text-base leading-relaxed">
                    Existence in this spot, which was created for the bliss of
                    souls like mine. I am so happy, my dear friend, so absorbed
                    drawing a single stroke at the present moment; and yet I
                    feel that I never was a greater artist than now.
                  </p>
                </div>

                {/* Gallery Section */}
                <div className="flex flex-wrap gap-6 my-8">
                  <Image
                    src={ladyimg}
                    alt="Thousand Unknown Plants Are Noticed"
                    width={400}
                    height={300}
                    className="rounded-lg w-full md:w-[48%]"
                  />
                  <Image
                    src={laptopimg}
                    alt="Lonely Valley Teams With Vapour Around Me"
                    width={400}
                    height={300}
                    className="rounded-lg w-full md:w-[48%]"
                  />
                </div>

                <div className="space-y-4">
                  <h1 className="md:text-[32px] text-xl font-semibold text-black">
                    Lovely valley teems with vapour around me.
                  </h1>
                  <p className="text-black-secondary font-medium text-base leading-relaxed">
                    Feel the charm of existence in this spot, which was created
                    for the bliss of souls like mine.
                  </p>
                </div>

                {/* Share Section */}
                <div className="flex items-center space-x-4 mt-4">
                  <span className="text-sm text-black-secondary font-medium">
                    S H A R E S :
                  </span>
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-black hover:bg-yellow-primary cursor-pointer">
                    <FaFacebookF size={16} />
                  </div>
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-black hover:bg-yellow-primary cursor-pointer">
                    <FaTwitter size={16} />
                  </div>
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-black hover:bg-yellow-primary cursor-pointer">
                    <FaPinterest size={16} />
                  </div>
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-black hover:bg-yellow-primary cursor-pointer">
                    <FaVimeoV size={16} />
                  </div>
                </div>
                {/* Comments Section */}
                <div className="mt-12">
                  <h2 className="md:text-[32px] text-xl font-semibold mb-6">
                    2 Comments
                  </h2>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <Image
                        src={commentimg1}
                        alt="Kevin Martin"
                        width={120}
                        height={120}
                        className="rounded-full sm:w-24 h-24 flex-shrink-0"
                      />
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold">Kevin Martin</h3>
                        </div>
                        <p className="text-black-secondary md:font-medium text-sm md:text-base font-satoshi">
                          &quot;Amazing job on this project! Your attention to
                          detail really shows, and it&apos;s made a big
                          impact.&quot;
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Image
                        src={commentimg2}
                        alt="Jacob Jones"
                        width={120}
                        height={120}
                        className="rounded-full sm:w-24 h-24 flex-shrink-0"
                      />
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold">Jacob Jones</h3>
                        </div>
                        <p className="text-black-secondary md:font-medium text-sm md:text-base font-satoshi">
                          &quot;Amazing job on this project! Your attention to
                          detail really shows, and it&apos;s made a big
                          impact.&quot;
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Comment Form */}
                <form className="mt-12">
                  <h2 className="md:text-[32px] text-xl  font-semibold mb-6">
                    Leave a Comment
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <input
                      type="text"
                      placeholder="Enter Name*"
                      className="w-full p-4 bg-[#F8F8F8] rounded-xl"
                    />
                    <input
                      type="email"
                      placeholder="Enter Email*"
                      className="w-full p-4  bg-[#F8F8F8] rounded-xl"
                    />
                  </div>
                  <textarea
                    className="lg::w-[839px] w-full h-[160px] p-4 bg-[#F8F8F8] rounded-xl resize-none mb-4"
                    rows={6}
                    placeholder="Enter Message*"
                  />
                  <button
                    type="submit"
                    className="bg-yellow-primary w-full  md:w-[212px] h-[52px] px-6 py-2  rounded-full font-bold hover:bg-yellow-400 transition-colors"
                  >
                    Submit A Comment
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="w-full lg:w-[456px] p-8 bg-[#F8F8F8] rounded-[20px]">
            <div className="sticky top-8 space-y-12">
              {/* Search Box */}
              <div className="relative mb-8">
                <input
                  type="text"
                  placeholder="Search here..."
                  className="w-full p-3 pl-10 pr-12 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <FiSearch className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-400" />
              </div>

              {/* Popular Posts */}
              <section>
                <h2 className="font-semibold text-black md:text-[28px] text-xl mb-8">
                  Popular Post
                </h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <Image
                      src={popularImg1}
                      alt="Designing for Accessibility"
                      width={60}
                      height={60}
                      className="rounded-lg object-cover flex-shrink-0"
                    />
                    <div>
                      <h3 className="md:font-semibold text-black font-medium md:text-lg">
                        Designing for Accessibility Making Websites Usable.
                      </h3>
                      <p className="text-base font-satoshi font-medium text-black-secondary">
                        June 15, 2024
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Image
                      src={popularImg2}
                      alt="Rebranding"
                      width={60}
                      height={60}
                      className="rounded-lg object-cover flex-shrink-0"
                    />
                    <div>
                      <h3 className="md:font-semibold text-black font-medium md:text-lg">
                        Rebranding When and How to Refresh Brand Identity.
                      </h3>
                      <p className="text-base font-satoshi font-medium text-black-secondary">
                        June 15, 2024
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Image
                      src={popularImg3}
                      alt="Responsive Design"
                      width={60}
                      height={60}
                      className="rounded-lg object-cover flex-shrink-0"
                    />
                    <div>
                      <h3 className="md:font-semibold text-black font-medium md:text-lg">
                        Responsive Design Essentials: Adaptive Experiences.
                      </h3>
                      <p className="text-base font-satoshi font-medium text-black-secondary">
                        June 15, 2024
                      </p>
                    </div>
                  </div>
                </div>
              </section>
              {/* Categories */}
              <section>
                <h2 className="font-semibold text-black md:text-[28px] text-2xl mb-8">
                  Categories
                </h2>
                <ol className="space-y-2 list-item list-disc ">
                  <li className=" text-black-secondary  font-medium font-satoshi">
                    Branding (02)
                  </li>
                  <li className="text-black-secondary font-medium font-satoshi">
                    Digital Marketing (04)
                  </li>
                  <li className="text-black-secondary font-medium font-satoshi">
                    Design Trends (01)
                  </li>
                  <li className="text-black-secondary font-medium font-satoshi">
                    User Experience (03)
                  </li>
                  <li className="text-black-secondary font-medium font-satoshi">
                    Case Studies (05)
                  </li>
                  <li className="text-black-secondary font-medium font-satoshi">
                    Tips & Tutorials (02)
                  </li>
                  <li className="text-black-secondary font-medium font-satoshi">
                    Industry Insights (04)
                  </li>
                </ol>
              </section>

              {/* Tags */}
              <section>
                <h2 className="text-xl font-bold mb-6">Tags</h2>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-white font-medium font-satoshi text-black-secondary rounded-[10px] ">
                    Branding
                  </span>
                  <span className="px-[10px] py-[7px] bg-white font-medium font-satoshi  text-black-secondary rounded-[10px]  ">
                    Digital Marketing
                  </span>
                  <span className="px-[10px] py-[7px] bg-white font-medium font-satoshi text-black-secondary  rounded-[10px] ">
                    Graphic Design
                  </span>
                  <span className="px-[10px] py-[7px] bg-white font-medium font-satoshi text-black-secondary rounded-[10px]  ">
                    Web Design
                  </span>
                  <span className="px-[10px] py-[7px] bg-white font-medium font-satoshi text-black-secondary rounded-[10px]  ">
                    SEO
                  </span>
                  <span className="px-[10px] py-[7px] bg-white font-medium font-satoshi text-black-secondary rounded-[10px]  ">
                    Content Marketing
                  </span>
                  <span className="px-[10px] py-[7px] bg-white font-medium font-satoshi text-black-secondary rounded-[10px]  ">
                    Design Trends
                  </span>
                </div>
              </section>
            </div>
          </aside>
        </div>
        <CallToAction />
      </div>
    </section>
  );
}
