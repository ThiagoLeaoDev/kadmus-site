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