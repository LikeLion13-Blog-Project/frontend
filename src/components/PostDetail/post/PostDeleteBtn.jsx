import React, { useState } from "react";
import styled from "styled-components";
import DeleteModal from "../../common/DeleteModal";

const PostDeleteBtn = ({ data }) => {
  const deletePost = async () => {};

  const handleDelete = () => {};

  const handleCancelBtn = () => {};

  return (
    <>
      <StyledModal>
        {/* <DeleteModal
            isPost={true}
            handleDeleteBtn={deletePost}
            handleCancelBtn={handleCancelBtn}
          /> */}
      </StyledModal>
      <StyledIcon name="trash-outline" />
    </>
  );
};

export default PostDeleteBtn;

const StyledIcon = styled("ion-icon")`
  font-size: 2rem;
  color: var(--icon-tertiary);
  cursor: pointer;
`;

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
