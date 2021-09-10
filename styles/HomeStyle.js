
import styled from "styled-components"
import Image from 'next/image'

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContentHome = styled.div`
  width: 100vw;
  align-self: center;
`;

export const SectionHero = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(194.01deg, #130139 9.6%, #2B145C 89.64%);
`;

export const ShadeLeft = styled.div`
  position: absolute;
  width: 1687px;
  height: 1687px;
  left: -800px;
  top: -742px;

  background: radial-gradient(41.76% 41.76% at 50% 50%, #095DFF 0%, rgba(191, 9, 255, 0) 100%);
`;

export const ContentHero = styled.div`
  z-index: 2;
  padding-top: 90px;
  max-width: 1600px;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;

`;

export const ContainerTextsButton = styled.div`
  width: 50%;
  padding-left: 50px;
`;

export const TitleHero = styled.h1`
  font-weight: 900;
  color: var(--white);
  max-width: 300px;
  line-height: 130%;
`;

export const DescHero = styled.h5`
  color: var(--white);
  margin-top: 12px;
`;

export const ButtonHero = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 220px;
  color: var(--white);
  background-color: var(--pink);
  border: none;
  border-radius: 5px;
  font-size: 14px;
  font-weight: bold;
  padding: 10px 20px;
  margin-top: 24px;
  opacity: 1;
  transition: 0.3s ease;

  &:hover{
    cursor: pointer;
	  transform: translateY(2px);
  }
  &:active {
    transform: translateY(8px);
  }
`;

export const ContainerRocket = styled.div`
position: relative;
  width: 50%;
  height: 100%;
  padding-right: 50px;
`;


export const RocketImage = styled(Image)`
  @keyframes float {
    0% {
      transform: translatey(0px);
    }
    50% {
      transform: translatey(-30px);
    }
      100% {
        transform: translatey(0px);
    }
  }

	transform: translatey(0px);
	animation: float 3s ease-in-out infinite;
`;