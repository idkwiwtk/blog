"use client";

import ContentBox from "@/shared/ui/content/ContentBox";
import ContentWrapper from "@/shared/ui/content/ContentWrapper";
import Click from "@/shared/ux/click/Click";
import ScrollingWidget from "@/widgets/scrolling/scrolling";
import { cn } from "@/shared/lib";
import TextWidget from "@/widgets/text/text";

export default function Home() {
  return (
    <section>
      <ContentBox>
        <ContentWrapper
          className={cn("h-[100vh]", "flex justify-center items-center")}
        >
          <TextWidget />
        </ContentWrapper>
      </ContentBox>
      <ContentBox>
        <ContentWrapper
          className={cn("h-[100vh]", "flex justify-center items-center")}
        >
          <ScrollingWidget />
        </ContentWrapper>
      </ContentBox>
      <ContentBox>
        <ContentWrapper className="h-[100vh]">
          <h1>my blog</h1>

          <p>this is my blog.</p>

          <h1>나의 블로그</h1>

          <p>이것은 나의 블로그.</p>

          <p className="p-12"></p>
        </ContentWrapper>
      </ContentBox>
    </section>
  );
}
