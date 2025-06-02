import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const WriteComment = ({ commentList }) => {
  const { postId } = useParams();

  return (
    <WriteWrapper>
      <h1>댓글 {commentList?.length ?? 0}</h1>

      <Textarea placeholder="댓글을 남겨주세요" id="content" />
      <WriteFooter>
        <button>댓글 남기기</button>
      </WriteFooter>
    </WriteWrapper>
  );
};

export default WriteComment;

const WriteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  > h1 {
    color: var(--text-tertiary);
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 700;
    line-height: 142.9%; /* 20.006px */
    letter-spacing: 0.203px;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 7rem;
  padding: 1.2rem 1.6rem;
  border-radius: 1rem;
  border: 1px solid var(--line-primary);
  resize: none;
`;

const WriteFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  > button {
    display: flex;
    padding: 0.7rem 1.4rem;
    justify-content: center;
    align-items: center;
    border-radius: 0.8rem;
    background: ${({ $disabled }) =>
      $disabled ? "var(--button-disable)" : "var(--button-primary)"};
    border: none;
    transition: all 0.2s ease-in-out;
    cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};

    //text
    color: ${({ $disabled }) =>
      $disabled ? "var(--icon-quaternary)" : "var(--text-brand-invert)"};
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 700;
    line-height: 2rem;
    letter-spacing: 0.0203rem;
  }
`;
