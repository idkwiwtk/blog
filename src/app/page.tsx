"use client";

import ContentBox from "@/shared/ui/content/ContentBox";
import ContentWrapper from "@/shared/ui/content/ContentWrapper";
import Click from "@/shared/ux/click/Click";
import ScrollingWidget from "@/widgets/scrolling/scrolling";
import { cn } from "@/shared/lib";
import TextWidget from "@/widgets/text/text";
import VideoWidget from "@/widgets/video/VideoWIdget";
import Link from "next/link";

const examplePages = [{ name: "browser", href: "/browser" }];

const PageList = () => {
  return (
    <ul>
      {examplePages.map((page, index) => {
        return (
          <li key={index}>
            <h1>{page.name}</h1>
            <Link href={page.href}>클릭하여 이동하기 {page.href}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default function Home() {
  return (
    <section>
      <ContentBox>
        <ContentWrapper>
          <PageList />
        </ContentWrapper>
      </ContentBox>
      <ContentBox>
        <ContentWrapper>
          <VideoWidget />
        </ContentWrapper>
      </ContentBox>
      <ContentBox>
        <ContentWrapper>
          <TextWidget />
        </ContentWrapper>
      </ContentBox>
      <ContentBox>
        <ContentWrapper>
          <ScrollingWidget />
        </ContentWrapper>
      </ContentBox>
      <ContentBox>
        <ContentWrapper>
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
