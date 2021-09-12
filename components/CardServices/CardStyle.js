import styled from "styled-components"

export const Card = styled.div`
  width: 278px;
  height: 270px;
  display: flex;
  flex-direction: column;
  background-color: var(--grey);
  border-radius: 8px;
  margin: 16px;
  transition: 0.3s ease;
  padding: 40px 34px;
  color: var(--white);

  &:hover{
    cursor: pointer;
    transform: translateY(-4px);
  }
  &:active {
    transform: translateY(-8px);
  }
`;

export const Title = styled.h4`
  font-weight: bold;
  margin-top: 44px;
`;

export const Desc = styled.h6`
  margin-top: 16px;
`;

export const ContainerCTA = styled.div`
  margin-top: 32px;
  display: flex;
  align-items: center;
`;

export const TextCTA = styled.h6`
  margin-right: 8px;
`;