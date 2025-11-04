"use client";

import ContentBox from "@/shared/ui/content/ContentBox";
import ContentWrapper from "@/shared/ui/content/ContentWrapper";
import TextInput from "@/shared/ui/input/TextInput";

const InputPage = () => {
  return (
    <main>
      <ContentBox>
        <ContentWrapper>
          <h1>Input page : Basic</h1>

          <p>Text</p>

          <TextInput />
        </ContentWrapper>
      </ContentBox>
    </main>
  );
};

export default InputPage;
