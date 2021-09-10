import { useState } from 'react'; 
import { IconContext } from "react-icons";
import Link from 'next/link'
import { BiShoppingBag, BiHeart, BiUser, BiSearch, BiMenu, BiX} from "react-icons/bi";

import * as SC from "./HeaderStyle";


// import { Container } from './styles';

function Header() {
  const [Colapse, setColapse] = useState(true);

  return(
    <SC.Tabbar>
      <SC.ContainerLogo>
          <a>
            <SC.IconKadmus src="/logo.svg" width={100} height={100}/>
          </a>
      </SC.ContainerLogo>

      <SC.ContainerHamburger>
          <SC.HoverIcon onClick={() => setColapse(!Colapse)}>
            {
              Colapse?
                <BiMenu color="white" size="2em"/>
                :
                <BiX color="white" size="2em"/>
            }
          </SC.HoverIcon>
      </SC.ContainerHamburger>

      <SC.ContainerOptions open={Colapse}>
            <SC.TabOption>
              <SC.TextOption>Início</SC.TextOption>
            </SC.TabOption>

            <SC.TabOption>
              <SC.TextOption>Serviços</SC.TextOption>
            </SC.TabOption>

            <SC.TabOption>
              <SC.TextOption>Quem somos nós</SC.TextOption>
            </SC.TabOption>
        
            <SC.TabOption>
              <SC.TextOption>Portifólio</SC.TextOption>
            </SC.TabOption>

            <SC.TabOption>
              <SC.TextOption>Contato</SC.TextOption>
            </SC.TabOption>
      </SC.ContainerOptions>
    </SC.Tabbar>
  );
}

export default Header;