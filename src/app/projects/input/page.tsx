"use client";

import ContentBox from "@/shared/ui/content/ContentBox";
import ContentWrapper from "@/shared/ui/content/ContentWrapper";
import TextInput from "@/shared/ui/input/TextInput";
import { useForm, Form } from "react-hook-form";

interface InputForm {
  name: string;
}

const InputPage = () => {
  const form = useForm<InputForm>();
  return (
    <main>
      <ContentBox>
        <ContentWrapper>
          <h1>Input page : Basic</h1>

          <p>Text</p>

          <Form {...form}>
            <TextInput />

            <button type="submit">submit</button>
          </Form>
        </ContentWrapper>
      </ContentBox>
    </main>
  );
};

export default InputPage;
