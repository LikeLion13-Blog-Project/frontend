import { useState } from "react";
import styled from "styled-components";
import DeleteModal from "../../common/DeleteModal";

const CommentDeleteBtn = ({ commentId }) => {
  const [renderModal, setRenderModal] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleDelete = () => {
    setIsVisible(true);
    setRenderModal(true);
  };

  const handleCancelBtn = () => {
    setTimeout(() => {
      setRenderModal(false);
    }, 200);
    setIsVisible(false);
  };

  return (
    <>
      <StyledModal $isVisible={isVisible}>
        {renderModal && (
          <DeleteModal isPost={false} handleCancelBtn={handleCancelBtn} />
        )}
      </StyledModal>
      <Button onClick={handleDelete}>
        <StyledIcon name="trash-outline" />
      </Button>
    </>
  );
};

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: none;
  cursor: pointer;
  border-radius: 50%;
  padding: 0.5rem;

  &:hover {
    background-color: var(--surface-primary);
  }
`;

const StyledIcon = styled("ion-icon")`
  font-size: 2rem;
  color: var(--icon-tertiary);
`;

const StyledModal = styled.div`
  opacity: ${(props) => (props.$isVisible ? 1 : 0)};
  transition: opacity 0.2s ease-in-out;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default CommentDeleteBtn;
