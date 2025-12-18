"use client";

import React, { Suspense } from "react";
import ContentBox from "@/shared/ui/content/ContentBox";
import ContentWrapper from "@/shared/ui/content/ContentWrapper";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const ContentTitle = ({ children }: { children: React.ReactNode }) => {
  return <h1 className="text-4xl mb-8">{children}</h1>;
};

const Content = ({ children }: { children: React.ReactNode }) => {
  return <p className="text-lg mb-8">{children}</p>;
};

const RouterTestContent = () => {
  const search = useSearchParams();

  const [name, setName] = React.useState<string>("");
  const [age, setAge] = React.useState<string>("");

  return (
    <main>
      <ContentBox>
        <ContentWrapper className="h-screen flex flex-col justify-center">
          <ContentTitle>Router Test Page</ContentTitle>

          <Content>
            This is a test page for the router. It is used to test the router
            functionality.
          </Content>

          <Content>
            <div className="flex flex-col gap-10">
              <div>
                <label className="w-100 inline-block">name</label>
                <input
                  className="border"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div>
                <label className="w-100 inline-block">age</label>
                <input
                  className="border"
                  type="decimal"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>

              <Link
                href={`/router-test?name=${name}&age=${age}`}
                className="text-blue-500 underline"
              >
                Go to query params test page : ?name={name}&age={age}
              </Link>

              <Link href={`/router-test`} className="text-blue-500 underline">
                Go to query params test page : No query params
              </Link>
            </div>
          </Content>
          <Content>
            Current search params origin: {search.toString() || "None"}
          </Content>

          <Content>
            query params name : {search.get("name") || "None"}
            <br />
            query params age : {search.get("age") || "None"}
          </Content>
        </ContentWrapper>
      </ContentBox>
    </main>
  );
};

const RouterTestPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterTestContent />
    </Suspense>
  );
};

export default RouterTestPage;
