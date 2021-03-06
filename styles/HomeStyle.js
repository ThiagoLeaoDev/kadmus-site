import styled from "styled-components"
import Image from 'next/image'

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden !important;
`;

export const SectionHero = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(194.01deg, #130139 9.6%, #2B145C 89.64%);

  @media(max-width: 992px) {
    height: auto;
    padding-bottom: 40px;
  }
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
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  
  @media(max-width: 992px) {
    flex-direction: column-reverse;
    padding-top: 10px;
  }
`;

export const ContainerTextsButton = styled.div`
  width: 50%;
  padding-left: 50px;

  @media(max-width: 992px) {
    width: 80%;
    padding: 0 20px;
  }
`;

export const TitleHero = styled.h1`
  font-weight: 900;
  color: var(--white);
  max-width: 300px;
  line-height: 130%;

  @media(max-width: 992px) {
    max-width: none;
  }
`;

export const DescHero = styled.h5`
  color: var(--white);
  margin-top: 12px;
`;

export const Button = styled.button`
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

  @media(max-width: 992px) {
    height: 80vw;
    max-height: 500px;
    width: 80%;
  }
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

//------------------- Section Services -------------------

export const SectionServices = styled(SectionHero)`
  height: auto;
  background: none;
  background-color: var(--dark-blue);
`;

export const ContentServices = styled(ContentHero)`
  z-index: 1;
  padding: 80px 0;
  max-width: 1600px;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerTextButtonServices = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media(max-width: 992px) {
    width: 80%;
  }
`;

export const TitleServices = styled.h2`
  font-weight: 900;
  text-align: center;
  color: var(--white);
  max-width: 500px;
  line-height: 120%;

  @media(max-width: 992px) {
    max-width: none;
  }
`;

export const ButtonServices = styled(Button)`
  width: 200px;
  background-color: transparent;
  color: var(--white);
  border: 1px solid var(--white);
  transition: 0.5s ease;

  &:hover{
    cursor: pointer;
    background-color: var(--pink);
    transform: translateY(0px);
  }
  &:active {
    transform: translateY(0px);
  }
`;
export const ContainerCardsServices = styled.div`
  width: 72%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 24px;

  @media(max-width: 992px) {
    width: 80%;
  }
`;

//------------------- Section Who are We -------------------

export const SectionWhoAreWe = styled(SectionHero)`
  height: auto;
  background: none;
  background-color: var(--grey);
`;

export const ContentWhoAreWe = styled(ContentHero)`
  padding: 80px 0;

  @media(max-width: 992px) {
    flex-direction: column;
  }
`;

export const ContainerCellImage = styled.div`
  width: 50%;
  height: 530px;
  padding-right: 50px;
  margin-left: 40px;
  display: flex;
  justify-content: flex-end;

  @media(max-width: 992px) {
    width: 80%;
    height: 70vw;
  }
`;

export const ContainerCellWhite = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const CellWhiteImage = styled(Image)`
  border-radius: 5px;
`;

export const ContainerTextsWAW = styled(ContainerTextsButton)`
  width: 50%;
  padding-left: 50px;
  margin-right: 40px;

  @media(max-width: 992px) {
    width: 80%;
    margin-top: 32px;
  }
`;


export const TitleWAW = styled.h2`
  font-weight: bold;
  color: var(--white);
  line-height: 130%;
`;

export const DescriptionWAW = styled.h5`
  max-width: 500px;
  color: var(--white);
  margin-top: 12px;
  font-weight: 300;
`;

//------------------- Section Jobs -------------------

export const SectionJobs = styled(SectionHero)`
  height: auto;
  background: none;
  background-color: var(--dark-grey);
`;

export const ContentJobs = styled(ContentHero)`
  flex-direction: column;
  padding: 80px 0;
`;

export const TitleJobs = styled(TitleServices)`
  width: 82%;
  max-width: none;
  font-weight: 900;
  text-align: left;
  color: var(--white);
  line-height: 100%;

  @media(max-width: 992px) {
    text-align: center;
  }
`;

export const ContainerCardsImages = styled(ContainerCardsServices)`
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;

//------------------- Section Contact -------------------


export const SectionContact = styled(SectionWhoAreWe)`
  background-color: var(--dark-blue);
  padding-bottom: 0;
`;

export const ContentContact = styled(ContentWhoAreWe)`
  padding: 0;
`;

export const ContainerTextContact = styled(ContainerTextsWAW)`
  justify-content: flex-end;
`;

export const TitleContact = styled(TitleWAW)`
  max-width: 350px;

  @media(max-width: 992px) {
    max-width: none;
  }
`;

export const DescriptionContact = styled(DescriptionWAW)`
  margin-bottom: 40px;
  @media(max-width: 992px) {
    max-width: none;
  }
`;

export const ButtonContact = styled(Button)`
  width: 180px;

  @media(max-width: 992px) {
    margin-bottom: 40px;
  }
`;

export const ContainerContactImage = styled(ContainerCellImage)`
`;

export const ContainerCellContact = styled(ContainerCellWhite)`
  width: 560px;
`;

export const CellContact = styled(Image)`
  border-radius: 5px;
`;

//------------------- Section Footer -------------------

export const Footer = styled.footer`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: var(--black);

  @media(max-width: 992px) {
    flex-direction: column;
    padding: 10px 0;
  }
`;

export const TextBrand = styled.h6`
  color: var(--white);
  font-weight: 300;
`;

export const ContainerLogo = styled.div`
  width: 40%;
`;

export const ContainerSocial = styled.div`
  width: 30%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media(max-width: 992px) {
    width: 80%;
  }
`;

export const CircleIcon = styled.a`
  padding: 8px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  background-color: var(--grey);
  margin: 0 10px;
  transition: 0.5s ease;

  &:hover{
    cursor: pointer;
    background-color: var(--pink);
  }
`;

