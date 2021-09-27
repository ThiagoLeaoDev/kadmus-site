import { useEffect } from 'react';
import Link from 'next/link'
import Head from 'next/head'

import { HiArrowNarrowRight } from "react-icons/hi";
import { GrLinkedinOption } from "react-icons/gr";
import { AiOutlineInstagram, AiOutlineTwitter, AiFillYoutube, AiFillGithub } from "react-icons/ai";
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
      {/* <SC.ShadeLeft/> */}
      <SC.SectionHero>
        <Header/> 
        <SC.ContentHero>
          <SC.ContainerTextsButton  data-aos="fade-right"  data-aos-duration="2500">
            <SC.TitleHero>Transforme seu negócio</SC.TitleHero>
            <SC.DescHero>Agência especializada em desenvolvimento de software, nosso foco é o aumento das suas vendas e lucratividade, através da tecnologia. </SC.DescHero>
            <SC.Button>Cadastrar serviços
              <HiArrowNarrowRight color="white" size="2em"/>
            </SC.Button>
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
            <SC.ButtonServices>Visualizar todos {/* Remover este botão */}
              <HiArrowNarrowRight color="white" size="2em"/>
            </SC.ButtonServices>
          </SC.ContainerTextButtonServices>
          <SC.ContainerCardsServices data-aos="fade-up" data-aos-delay="500" data-aos-duration="2500">
            <CardServices
              Title="Criação de Aplicativos - APP's"
              Desc="Criação de aplicativos para iPhone e Android. Desenvolvimento sob medida."
            />
            <CardServices
              Title="Criação de Sites"
              Desc="Sites responsivos, com navegação intuitiva e design profissional. Site com foco em geração de resultados."
            />
            <CardServices
              Title="UX Design e UI Design"
              Desc="Usabilidade que  traz resultados incríveis na forma como os consumidores e marcas irão interagir com você."
            />
            <CardServices
              Title="Lojas Virtuais - E-commerce"
              Desc="Criação de lojas com alta performance. gestão de pedidos, integração com cartões de crédito, boletos, etc."
            />
            <CardServices
              Title="Landing Pages"
              Desc="Desenvolvimento de páginas estratégicas para alavancar o potencial da sua empresa, produtos e serviços oferecidos."
            />
            <CardServices
              Title="Otimização de Sites (SEO)"
              Desc="Aumentar a visibilidade do seu site através de estratégias que geram mais tráfego, portanto, mais negócios."
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
          <SC.ContainerTextsWAW data-aos="fade-left" data-aos-duration="1500">
            <SC.TitleWAW>O que é a Kadmus?</SC.TitleWAW>
            <SC.DescriptionWAW>Nosso maior desafio é materializar boas ideias em soluções de sucesso - práticas e simples, com foco total no aumento das suas vendas e lucratividade. 
              Nosso time é capaz de gerar resultados mensuráveis aos nossos clientes. Oferecemos design moderno com tecnologia de ponta. Atenção total ao seu posicionamento no Google e performance em dispositivos mobile.
            </SC.DescriptionWAW>
          </SC.ContainerTextsWAW>
        </SC.ContentWhoAreWe>
      </SC.SectionWhoAreWe>

      <SC.SectionJobs>
        <SC.ContentJobs>
          <SC.TitleJobs>Portfólio</SC.TitleJobs>
          <SC.ContainerCardsImages data-aos="fade-up" data-aos-delay="300" data-aos-duration="2500">
            <CardImages CardImage={"/mobile_app.jpeg"} TitleCard={"Byte"} DescCard={"- New looping video app"} HoverTitle={"APP DESIGN"}/>
            <CardImages CardImage={"/brand_design.jpeg"} TitleCard={"Slideban"} DescCard={"- Pitch deck design"} HoverTitle={"BRAND ORGANIZATION"}/>
            <CardImages CardImage={"/sistem_dashboard.jpeg"} TitleCard={"Dashkit"} DescCard={"- Track your sales"} HoverTitle={"SISTEM DEVELOPMENT"}/>
            <CardImages CardImage={"/map_app.jpeg"} TitleCard={"Apple park"} DescCard={"- Augmented reality"} HoverTitle={"APP DEVELOPMENT"}/>
          </SC.ContainerCardsImages>
        </SC.ContentJobs>
      </SC.SectionJobs>

      <SC.SectionContact>
        <SC.ContentContact>
          <SC.ContainerTextContact  data-aos="fade-left" data-aos-duration="1500">
            <SC.TitleContact>Requisite um orçamento sem compromisso</SC.TitleContact>
            <SC.DescriptionContact>Preencha o formulário para que possamos avaliar a melhor maneira de lhe ajudar, responderemos em até 1 dia útil.</SC.DescriptionContact>
            <SC.ButtonContact>Ir para formulário
              <HiArrowNarrowRight color="white" size="2em"/>
            </SC.ButtonContact>
          </SC.ContainerTextContact>
          <SC.ContainerContactImage>
            <SC.ContainerCellContact data-aos="fade-right" data-aos-duration="1500">
              <SC.CellContact src="/two_phones.jpeg" layout='fill' objectFit="cover" quality={100}/>
            </SC.ContainerCellContact>
          </SC.ContainerContactImage>
        </SC.ContentContact>
      </SC.SectionContact>
      
      <SC.Footer>
        <SC.TextBrand>©2022 Agência Kadmus. Todos os direitos reservados.</SC.TextBrand>
        <SC.ContainerLogo>
        </SC.ContainerLogo>
        <SC.ContainerSocial>
          <SC.CircleIcon>
            <GrLinkedinOption color="white" size="1.5em"/>
          </SC.CircleIcon>
          <SC.CircleIcon>
            <AiFillGithub color="white" size="1.5em"/>
          </SC.CircleIcon>
          <SC.CircleIcon>
            <AiOutlineInstagram color="white" size="1.5em"/>
          </SC.CircleIcon>
          <SC.CircleIcon>
            <AiOutlineTwitter color="white" size="1.5em"/>
          </SC.CircleIcon>
          <SC.CircleIcon>
            <AiFillYoutube color="white" size="1.5em"/>
          </SC.CircleIcon>
        </SC.ContainerSocial>
      </SC.Footer>
    </SC.Main>
    )
}
