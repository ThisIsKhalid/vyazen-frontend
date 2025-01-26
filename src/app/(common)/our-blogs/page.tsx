import CallToAction from "@/components/shared/CallToAction/CallToAction";
import FAQ from "@/components/shared/FAQ/FAQ";
import PageHeader from "@/components/shared/PageHeader/PageHeader";
import SectionHeader from "@/components/shared/SectionHeader/SectionHeader";
import Blogs from "../../../components/pages/blogs/Blogs";

export default function blog() {
  return (
    <div>
      <PageHeader title="Blogs" subtitle="Blogs" />
      <div className="container  md:mt-[140px] sm:mt-[70px] mt-[50px]">
        <SectionHeader
          subtitle="NEWS & ARTICLES"
          subtitleClass="white"
          title={
            <>
              <span className="font-bold">Discover </span> the Latest in
              <br />
              Digital <span className="font-bold"> Innovation.</span>
            </>
          }
          titleClass="md:text-[64px] md:leading-[74px]"
          align="center"
        />
      </div>
      <Blogs />
      <FAQ />
      <CallToAction />
    </div>
  );
}
