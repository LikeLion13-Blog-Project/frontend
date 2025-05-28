import styled from "styled-components";
import TitleSection from "../components/WritePost/TitleSection";
import ContentSection from "../components/WritePost/ContentSection";
import WriteButton from "../components/WritePost/WriteButton";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function WritePost() {
  const navigate = useNavigate();
  const location = useLocation();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <WritePostContainer onSubmit={onSubmit}>
      <TitleSection title={title} onChangeTitle={onChangeTitle} />
      <ContentSection content={content} onChangeContent={onChangeContent} />
      <WriteButton />
    </WritePostContainer>
  );
}

const WritePostContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;

  gap: 2.4rem;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.4rem;
    width: 100%;
    max-width: 74.4rem;
    padding: 2rem;
  }
`;
