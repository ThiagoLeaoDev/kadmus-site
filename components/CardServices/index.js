import Link from 'next/link'
import {BiMenu} from "react-icons/bi";
import {HiArrowNarrowRight} from "react-icons/hi";

import * as SC from "./CardStyle";

export default function CardServices(props) {
  return(
    <SC.Card>
      <BiMenu color="white" size="3em"/>
      <SC.Title>{props.Title}</SC.Title>
      <SC.Desc>{props.Desc}</SC.Desc>
      <SC.ContainerCTA>
        <SC.TextCTA>Explore</SC.TextCTA>
        <HiArrowNarrowRight color="white" size="1.5em"/>
      </SC.ContainerCTA>
    </SC.Card>
  );
}