import React, { useState } from 'react';

import * as SC from "./CardImagesStyle";

export default function CardImages(props) {
  const [Hover, setHover] = useState(false);

  return(
    <SC.CardImages
    onMouseEnter={() => setHover(true)}
    onMouseLeave={() => setHover(false)}>
      <SC.ContainerText>
        <SC.TitleCard>{props.TitleCard}</SC.TitleCard>
        <SC.DescCard>{props.DescCard}</SC.DescCard>
      </SC.ContainerText>
      <SC.ContainerImage>
        <SC.ImageCard src={props.CardImage} layout='fill' objectFit="cover" quality={100}/>
            <SC.ContainerButton hover={Hover}>
              <SC.TextHover>{props.HoverTitle}</SC.TextHover>
              <SC.ButtonHover>Saiba Mais</SC.ButtonHover>
            </SC.ContainerButton>
      </SC.ContainerImage>
    </SC.CardImages>
  )
}
