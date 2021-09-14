
import * as SC from "./CardImagesStyle";

export default function CardImages() {
  return(
    <SC.CardImages>
      <SC.ContainerText>
        <SC.TitleCard>Byte</SC.TitleCard>
        <SC.DescCard> - New looping video app</SC.DescCard>
      </SC.ContainerText>
      <SC.ContainerImage>
        <SC.ImageCard src="/cell_white.jpeg" layout='fill' objectFit="cover" quality={100}/>
      </SC.ContainerImage>
    </SC.CardImages>
  )
}
