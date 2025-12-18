"use client";

import ContentBox from "@/shared/ui/content/ContentBox";
import ContentWrapper from "@/shared/ui/content/ContentWrapper";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-slate-900 text-white">
      <ContentBox>
        <ContentWrapper className="py-16 md:py-24 text-center">
          <p className="text-slate-400 text-[12px] md:text-[14px]">
            © {currentYear} idkwiwtk.blog | All rights reserved.
          </p>
        </ContentWrapper>
      </ContentBox>
    </footer>
  );
};

export default Footer;
