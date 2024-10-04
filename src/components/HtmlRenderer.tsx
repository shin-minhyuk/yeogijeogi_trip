import React from "react";

interface HtmlContentProps {
  htmlContent: string;
}

const HtmlRenderer: React.FC<HtmlContentProps> = ({ htmlContent }) => {
  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
};

export default HtmlRenderer;
