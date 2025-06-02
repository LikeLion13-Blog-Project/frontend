import styled from "styled-components";
import PostContent from "../components/PostDetail/post/PostContent";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import WriteComment from "../components/PostDetail/comment/WriteComment";
import CommentList from "../components/PostDetail/comment/CommentList";

export default function PostDetail() {
  const [postData, setPostData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { postId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/articles/${postId}`,
          {
            method: "GET",
            headers: {
              "Content-type": "application/json",
              Authorization: `Bearer ${window.localStorage.getItem(
                "accessToken"
              )}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("something went wrong");
        }
        const data = await response.json();
        setPostData(data.data);
      } catch (error) {
        console.error("Error fetching article data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>loading...</div>;
  }

  return (
    <PostDetailWrapper>
      <PostContent data={postData} />
      <WriteComment commentList={postData?.comments} />
      <CommentList commentList={postData?.comments} />
    </PostDetailWrapper>
  );
}

const PostDetailWrapper = styled.section`
  max-width: 74.4rem;
  min-width: 37.5rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 2.4rem;
`;
