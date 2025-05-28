import React from "react";
import styled from "styled-components";

const PostEditBtn = ({ data }) => {
  const handleEdit = () => {};
  return <StyledIcon name="pencil-outline" onClick={handleEdit} />;
};

export default PostEditBtn;

const StyledIcon = styled("ion-icon")`
  font-size: 2rem;
  color: var(--icon-tertiary);
  cursor: pointer;
`;
