import styled from "styled-components"
import Image from 'next/image'

export const CardImages = styled.div`
  width: 40%;
  max-width:  500px;
  min-width:  300px;
  height: auto;
  margin: 40px;

  &:hover{
    cursor: pointer;
  }
`;

export const ContainerText = styled.div`
  display: flex;
  flex-direction: row;
  color: var(--white);
  margin-bottom: 20px;
`;

export const TitleCard = styled.h4`
  margin-right: 10px;
  font-weight: bold;
`;

export const DescCard = styled.h4`
  font-weight: 300;
`;

export const ContainerImage = styled.div`
  position: relative;
  width: 100%;
  height: 18vw;
  min-height: 250px;
`;

export const ImageCard = styled(Image)`
  border-radius: 8px;
`;

export const ContainerButton = styled.div`
  display: ${props => (props.hover ? "flex" : "none")};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 70px;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 0 0 7px 7px;
  transition: all 2s linear;
`;

export const TextHover = styled.h6`
  font-weight: 600;
  color: var(--white);
  margin-left: 20px;
`;

export const ButtonHover = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--white);
  background-color: var(--pink);
  border: none;
  border-radius: 5px;
  font-size: 14px;
  font-weight: medium;
  padding: 10px 20px;
  margin-right: 20px;

  &:hover{
    cursor: pointer;
  }
`;

