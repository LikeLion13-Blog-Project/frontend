import styled from "styled-components";
import HeaderSection from "../components/Home/HeaderSection";
import ListSection from "../components/Home/ListSection";
import { useEffect, useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/articles`
        );

        if (!response.ok) {
          throw new Error("something went wrong");
        }
        const data = await response.json();
        setPosts(data.data.reverse());
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }
    fetchPosts();
  }, []);

  return (
    <HomeContainer>
      <div>
        <HeaderSection />
        <ListSection posts={posts} />
      </div>
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  > div {
    width: 100%;
    max-width: 74.4rem;
    display: flex;
    gap: 0.8rem;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
  }
`;
