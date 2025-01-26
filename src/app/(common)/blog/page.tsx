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
          subtitle="GET IN TOUCH"
          subtitleClass="white"
          title={
            <>
              <span className="font-bold">Need </span> Assistance
              <br />
              Want to <span className="font-bold"> Collaborate!</span>
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
