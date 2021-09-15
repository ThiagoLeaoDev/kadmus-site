import { useEffect } from 'react';
import Link from 'next/link'
import Head from 'next/head'
import { HiArrowNarrowRight } from "react-icons/hi";
import AOS from "aos";
import "aos/dist/aos.css";

import * as SC from "../styles/HomeStyle";

import Header from '../components/Header';
import CardServices from '../components/CardServices';
import CardImages from '../components/CardImages';

export default function Home() {
  useEffect(() => { //function for launch the aos library
    AOS.init();
    AOS.refresh();
  }, []);

  return(
    <SC.Main>
      <Head>
        <title>Kadmus | Início</title>
      </Head>
      <SC.ShadeLeft/>
      <SC.SectionHero>
        <Header/> 
        <SC.ContentHero>
          <SC.ContainerTextsButton  data-aos="fade-right"  data-aos-duration="2500">
            <SC.TitleHero>Transforme seu negócio</SC.TitleHero>
            <SC.DescHero>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis auctor tellus. Proin sem lorem, elementum in sem in, viverra maximus enim. Nullam porttitor mollis justo ut eleifend, sed dapibus purus turpis.</SC.DescHero>
            <SC.ButtonHero>Cadastrar serviços
              <HiArrowNarrowRight color="white" size="2em"/>
            </SC.ButtonHero>
          </SC.ContainerTextsButton>
          <SC.ContainerRocket data-aos="zoom-in-right" data-aos-duration="2000">
            <SC.RocketImage src="/rocket.png" layout='fill' objectFit="cover" quality={100}/>
          </SC.ContainerRocket>
        </SC.ContentHero>
      </SC.SectionHero>

      <SC.SectionServices>
        <SC.ContentServices>
          <SC.ContainerTextButtonServices  data-aos="fade-up" data-aos-delay="300" data-aos-duration="2500">
            <SC.TitleServices>Serviços que ajudarão seu negócio a decolar</SC.TitleServices>
            <SC.ButtonServices>Visualizar todos
              <HiArrowNarrowRight color="white" size="2em"/>
            </SC.ButtonServices>
          </SC.ContainerTextButtonServices>
          <SC.ContainerCardsServices data-aos="fade-up" data-aos-delay="500" data-aos-duration="2500">
            <CardServices
              Title="Mobile Application"
              Desc="Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat."
            />
            <CardServices
              Title="Web Application"
              Desc="Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat."
            />
            <CardServices
              Title="User Interface Design"
              Desc="Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat."
            />
            <CardServices
              Title="Strategy and Branding"
              Desc="Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat."
            />
            <CardServices
              Title="Performance Marketing"
              Desc="Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat."
            />
            <CardServices
              Title="Project Management"
              Desc="Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat."
            />
          </SC.ContainerCardsServices>
        </SC.ContentServices>
      </SC.SectionServices>

      <SC.SectionWhoAreWe>
        <SC.ContentWhoAreWe>
          <SC.ContainerCellImage>
            <SC.ContainerCellWhite data-aos="fade-right" data-aos-duration="1500">
              <SC.CellWhiteImage src="/cell_white.jpeg" layout='fill' objectFit="cover" quality={100}/>
            </SC.ContainerCellWhite>
          </SC.ContainerCellImage>
          <SC.ContainerTextsWAW  data-aos="fade-left" data-aos-duration="1500">
            <SC.TitleWAW>O que é a Kadmus?</SC.TitleWAW>
            <SC.DescriptionWAW>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam orci pretium a pharetra, feugiat cursus. Dictumst risus, sem egestas odio cras adipiscing vulputate. Nisi, risus in suscipit non. Non commodo volutpat, pharetra, vel.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam orci pretium a pharetra, feugiat cursus. Dictumst risus, sem egestas odio cras adipiscing vulputate. Nisi, risus in suscipit non. Non commodo volutpat, pharetra, vel.
            </SC.DescriptionWAW>
          </SC.ContainerTextsWAW>
        </SC.ContentWhoAreWe>
      </SC.SectionWhoAreWe>

      <SC.SectionJobs>
        <SC.ContentJobs>
          <SC.TitleJobs>Selected works</SC.TitleJobs>
          <SC.ContainerCardsImages data-aos="fade-up" data-aos-delay="300" data-aos-duration="2500">
            <CardImages CardImage={"/mobile_app.jpeg"} TitleCard={"Byte"} DescCard={"- New looping video app"} HoverTitle={"APP DESIGN"}/>
            <CardImages CardImage={"/brand_design.jpeg"} TitleCard={"Slideban"} DescCard={"- Pitch deck design"} HoverTitle={"BRAND ORGANIZATION"}/>
            <CardImages CardImage={"/sistem_dashboard.jpeg"} TitleCard={"Dashkit"} DescCard={"- Track your sales"} HoverTitle={"SISTEM DEVELOPMENT"}/>
            <CardImages CardImage={"/map_app.jpeg"} TitleCard={"Apple park"} DescCard={"- Augmented reality"} HoverTitle={"APP DEVELOPMENT"}/>
          </SC.ContainerCardsImages>
        </SC.ContentJobs>
      </SC.SectionJobs>
    </SC.Main>
    )
}
