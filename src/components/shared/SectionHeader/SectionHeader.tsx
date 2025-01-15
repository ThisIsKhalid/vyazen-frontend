interface SectionHeaderProps {
  subtitle: string;
  title: React.ReactNode;
}

const SectionHeader = ({ subtitle, title }: SectionHeaderProps) => {
  return (
    <div className="text-center mb-10">
      <p className="text-sm uppercase text-gray-500 tracking-widest">
        {subtitle}
      </p>
      <h2 className="text-4xl font-bold leading-snug text-black">{title}</h2>
    </div>
  );
};

export default SectionHeader;

// example:
{/* <SectionTitle
  subtitle="ABOUT US"
  title={
    <>
      <span className="font-light">Building Digital Futures </span>
      <span className="font-bold">Together.</span>
    </>
  }
/>; */}

