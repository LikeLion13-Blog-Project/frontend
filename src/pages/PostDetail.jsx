import styled from "styled-components";
import PostContent from "../components/PostDetail/post/PostContent";
import { useEffect, useState } from "react";

export default function PostDetail() {
  const [postData, setPostData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = [];

        if (!response.ok) {
          throw new Error("something went wrong");
        }
        const data = await response.json();
        setPostData(data.data);
      } catch (error) {
        console.error("Error fetching article data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <PostDetailWrapper>
      <PostContent data={postData} />
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
