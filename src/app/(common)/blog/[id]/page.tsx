import Image from "next/image";
import posts from "@/assets/data/posts.json";
import postimg from "@/assets/images/featuredPostimg.jpeg";
import authorimg from "@/assets/images/Mask group.png";
import ladyimg from "@/assets/images/pic.png";
import laptopimg from "@/assets/images/pic (1).png";
import commentimg1 from "@/assets/images/comment avatar 2.png";
import commentimg2 from "@/assets/images/comment avatar.png";
import popularImg2 from "@/assets/images/sidebar 2.png";
import popularImg1 from "@/assets/images/sidebar 3.png";
import popularImg3 from "@/assets/images/sidebar 1.png";
import CallToAction from "@/components/shared/CallToAction/CallToAction";
import { FaFacebookF, FaTwitter, FaPinterest, FaVimeoV } from "react-icons/fa";
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
    <div className="container mx-auto px-4 py-8">
      <div className=" w-[1296px] grid grid-cols-1 lg:grid-cols-3 gap-[19px]">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <div>
            <Image
              src={postimg}
              alt={post.authorName}
              width={816}
              height={518}
              className="rounded-[20px] md:w-[816px] md:h-[518] object-cover"
            />
          </div>
          {/* Author Info */}
          <div className="flex justify-between mt-10 mb-5 items-center">
            {/* Author Info Section */}
            <div className="flex items-center gap-4">
              <Image
                src={authorimg}
                alt={post.authorName}
                width={80}
                height={80}
                className="rounded-full"
              />
              <div>
                <h3 className="font-semibold text-[22px] text-black">
                  {post.authorName}
                </h3>
                <p className=" text-black-secondary font-satoshi font-medium">
                  Senior Writer and Editor
                </p>
                {/* Author role  */}
              </div>
            </div>

            {/* Read Time and Date Section */}
            <div className="flex items-center text-black-secondary space-x-4 font-medium font-satoshi">
              <span>10 Min. Read</span>
              <div className="w-[30px] h-[1px] bg-black-secondary"></div>

              <span>{post.date}</span>
            </div>
          </div>
          <div className="border-b mb-[60px]"></div>

          {/* Article Title */}
          <h1 className="md:text-[40px] font-semibold  md:w-[39rem]  mb-6">
            {post.title}
          </h1>

          {/* Article Content */}
          <div className="prose max-w-none mb-8">
            <p className="font-satoshi font-medium text-black-secondary">
              Building a positive work culture in a young office starts with
              fostering an environment of open communication, flexibility, and
              growth. Encouraging team members to share ideas freely promotes a
              culture of trust and collaboration, essential for young
              professionals eager to contribute. Offering flexible work options
              respects their work-life balance, boosting morale and
              productivity. Additionally, investing in learning and development
              opportunities empowers employees to acquire new skills, keeping
              them engaged and motivated. Celebrating achievements—big or
              small—creates a sense of accomplishment, while social gatherings
              build camaraderie, turning coworkers into friends. By prioritizing
              well-being, providing purpose, and leading by example, leaders can
              create a supportive, purpose-driven culture where young
              professionals thrive and feel valued.
            </p>
            <br />
            <p className="font-satoshi font-medium text-black-secondary">
              Creating a thriving work culture in a young office revolves around
              openness, growth, and purpose. When employees feel encouraged to
              share ideas without hesitation, it cultivates trust and sparks
              collaboration. Embracing flexibility, such as remote work options
              and adaptable hours, respects individual needs and fosters
              loyalty. Investing in professional development through workshops,
              mentorship, and training helps young professionals grow and stay
              engaged. Recognizing both team and individual achievements
              reinforces a sense of accomplishment, while social events and
              team-building activities strengthen bonds. By championing
              well-being and aligning personal goals with company vision,
              leaders create a vibrant culture where creativity.
            </p>
          </div>

          {/* Quote Section */}
          <blockquote className="bg-yellow-primary font-satoshi p-6 my-8 rounded-lg">
            <p className="text-[22px] font-medium   mb-4">
              &quot;At Vyazen, we’re passionate about turning your ideas into
              impactful digital solutions. Whether you’re looking to elevate
              your brand, expand your online presence, or drive meaningful
              results, our team is here to help. Let’s collaborate to create
              something extraordinary and bring your vision to life. Take the
              first step toward success—reach out to us today!&quot;
            </p>
            <p className="text-xl flex items-center gap-2  font-medium">
              <span>
                <div className="w-[30px] h-[1px] bg-black"></div>
              </span>{" "}
              Darrell Steward
            </p>
          </blockquote>

          <div className="md:max-w-screen-lg mx-auto my-8">
            {/* First Section */}
            <div className="space-y-4">
              <h1 className="text-[32px] font-semibold text-black">
                Thousand Unknown Plants Are Noticed.
              </h1>
              <p className="text-black-secondary font-medium text-base leading-relaxed">
                Existence in this spot, which was created for the bliss of souls
                like mine. I am so happy, my dear friend, so absorbed drawing a
                single stroke at the present moment; and yet I feel that I never
                was a greater artist than now. When, while the lovely valley
                teems with vapour around me, and the meridian sun strikes the
                upper surface of the impenetrable foliage of my trees, and but a
                few stray gleams steal into the inner sanctuary, I throw myself
                down among the tall grass by the trickling stream; and, as I lie
                close to the earth, a thousand unknown plants.
              </p>
            </div>

            {/* Gallery Section */}
            <div className="grid md:grid-cols-2 gap-6 my-8">
              {/* Left Image */}
              <div className="space-y-4">
                <Image
                  src={ladyimg}
                  alt="Thousand Unknown Plants Are Noticed"
                  width={400}
                  height={300}
                  className="rounded-lg"
                />
              </div>
              {/* Right Image */}
              <div className="space-y-4">
                <Image
                  src={laptopimg}
                  alt="Lonely Valley Teams With Vapour Around Me"
                  width={400}
                  height={300}
                  className="rounded-lg"
                />
              </div>
            </div>
            <div className="space-y-4">
              <h1 className="text-[32px] font-semibold text-black">
                Lovely valley teems with vapour around me.
              </h1>
              <p className="text-black-secondary font-medium text-base leading-relaxed">
                Feel the charm of existence in this spot, which was created for
                the bliss of souls like mine. I am so happy, my dear friend, so
                absorbed drawing a single stroke at the present moment; and yet
                I feel that I never was a greater artist than now. When, while
                the lovely valley teems with vapour around me, and the meridian
              </p>
            </div>

            <div className="flex items-center space-x-4 mt-4">
              <span className="text-sm text-black-secondary font-medium">
                S H A R E S :
              </span>
              {/* Facebook */}
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-black hover:bg-yellow-primary cursor-pointer">
                <FaFacebookF size={16} />
              </div>
              {/* Twitter */}
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-black hover:bg-yellow-primary cursor-pointer">
                <FaTwitter size={16} />
              </div>
              {/* Pinterest */}
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-black hover:bg-yellow-primary cursor-pointer">
                <FaPinterest size={16} />
              </div>
              {/* Vimeo */}
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-black hover:bg-yellow-primary cursor-pointer">
                <FaVimeoV size={16} />
              </div>
            </div>
          </div>

          {/* Comments Section */}
          <div className="mt-12">
            <h2 className="text-[32px] font-semibold mb-6">2 Comments</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <Image
                  src={commentimg1}
                  alt="Kevin Martin"
                  width={120}
                  height={120}
                  className="rounded-full flex-shrink-0"
                />
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-semibold">Kevin Martin</h3>
                  </div>
                  <p className="text-black-secondary font-medium font-satoshi">
                    &quot;Amazing job on this project! Your attention to detail
                    really shows, and it&apos;s made a big impact.&quot;
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Image
                  src={commentimg2}
                  alt="Jacob Jones"
                  width={120}
                  height={120}
                  className="rounded-full flex-shrink-0"
                />
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-semibold">Jacob Jones</h3>
                  </div>
                  <p className="text-black-secondary font-medium font-satoshi">
                    &quot;Amazing job on this project! Your attention to detail
                    really shows, and it&apos;s made a big impact.&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Comment Form */}
          <form className="mt-12">
            <h2 className="text-[32px] font-semibold mb-6">Leave a Comment</h2>
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
              className="w-[839px] h-[160px] p-4 bg-[#F8F8F8] rounded-xl resize-none mb-4"
              rows={6}
              placeholder="Enter Message*"
            />
            <button
              type="submit"
              className="bg-yellow-primary w-[212px] h-[52px] px-6 py-2 rounded-full font-bold hover:bg-yellow-400 transition-colors"
            >
              Submit A Comment
            </button>
          </form>
        </div>

        {/* Sidebar */}
        {/* Sidebar */}
        <aside className="lg:col-span-1 p-8 bg-[#F8F8F8] rounded-[20px]">
          <div className="sticky top-8 space-y-12">
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
            </div>

            {/* Popular Posts */}
            <section>
              <h2 className="font-semibold text-black text-[28px] mb-8">
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
                    <h3 className="font-semibold text-black text-lg">
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
                    <h3 className="font-semibold text-black text-lg">
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
                    alt="Good Design Impact"
                    width={60}
                    height={60}
                    className="rounded-lg object-cover flex-shrink-0"
                  />
                  <div>
                    <h3 className="font-semibold text-black text-lg">
                      How Good Design Impacts Your Brand?
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
              <h2 className="font-semibold text-black text-[28px] mb-8">
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
  );
}
