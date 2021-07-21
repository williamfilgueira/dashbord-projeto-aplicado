import React from "react";
import {
  Container,
 
} from "./styles";

import Input from "../Common/Input";

export default function Topbar() {
  return (
    <Container>
      <Input
        placeholder="Pesquise pelo login"
        icon="MagnifyingGlass"
        size="big"
      />
    
    </Container>
  );
}
