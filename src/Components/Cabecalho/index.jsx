import React from "react";
import styled from "styled-components";
import bank_logo from "../../assets/images/bank_logo.svg";
import { corPrimaria, corSecundaria } from "../UI/variaveis";

const Btncabecalho1 = styled.a`
  text-align: center;
  border-radius: 3px;
  padding: 5px 20px;
  margin: 0 10px;
  font-weight: 600;
  border: 2px solid white;
  background: white;
  color: "white";
`;

const Btncabecalho2 = styled.a`
  text-align: center;
  border-radius: 3px;
  padding: 5px 20px;
  margin: 0 10px;
  font-weight: 600;
  border: 2px solid white;
  background: ${({theme}) => theme.color};
  color: white;
`;

const StyledHeader = styled.nav`
  background-color: ${({theme}) => theme.color};
  display: flex;
  justify-content: space-between;
  padding: 0 15vw;
  height: 10vh;
  align-items: center;
`;

const Logo = styled.img`
  height: 50px;
  width: 50px;
`;

const Cabecalho = () => {
  return (
    <StyledHeader>
      <Logo src={bank_logo} alt="Logo Smart Bank" />
      <div>
        <Btncabecalho1 href="https://google.com">Ajuda</Btncabecalho1>
        <Btncabecalho2 href="https://google.com">Sair</ Btncabecalho2 >
      </div>
    </StyledHeader>
  );
};

export default Cabecalho;
