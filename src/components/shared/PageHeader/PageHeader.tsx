import React from "react";

type PageHeaderProps = {
  title: string;
  subtitle: string;
};

const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  return (
    <div className="text-center py-10">
      <h2 className="text-3xl font-bold text-white">{title}</h2>
      <p className="text-gray-400 mt-2">{subtitle}</p>
    </div>
  );
};

export default PageHeader;
