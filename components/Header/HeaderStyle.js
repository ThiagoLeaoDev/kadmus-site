
import styled from "styled-components"
import Image from 'next/image'

export const Tabbar = styled.header`
  width: 100%;
  height: 90px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerLogo = styled.div`
  margin-left: 40px;
`;

export const ContainerHamburger = styled.div`
  display: none;
  margin-right: 40px;
  cursor: pointer;
  @media (max-width: 1007px) {
    display: block;
  }
`;

export const IconKadmus = styled(Image)`
`;

export const ContainerOptions = styled.div`
  height: 40%;
  width: 45%;
  margin-right: 10%;
  max-width: 1000px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 1007px) {
    display: ${props => props.open ? "none" : "block"};
    position: absolute;
    width: 28%;
    min-width: 200px;
    height: auto;
    flex-direction: column;
    background-color: var(--black);
    top: 90px;
    right: 0;
    border-bottom-left-radius: 6px;
  }
`;

export const TabOption = styled.a`
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  @media (max-width: 1007px) {
    height: 60px;
    border-top: 2px solid #2f2f30;
    justify-content: space-around;
  }
`;

export const TextOption = styled.p`
  color: var(--white);
  &:hover{
    color: var(--pink);
  }
`;

export const HoverIcon = styled.a`
`;

