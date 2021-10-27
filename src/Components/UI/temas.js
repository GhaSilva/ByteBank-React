import {
  corPrimaria,
  fundoClaro,
  conteudoClaro,
  textoFundoClaro,
  fundoEscuro,
  conteudoEscuro,
  textoFundoEscuro,
  corSecundaria
} from "./variaveis";

export const temaClaro = {
  color: corPrimaria,
  body: fundoClaro,
  inside: conteudoClaro,
  text: textoFundoClaro,
  filter: ""
};
export const temaEscuro = {
  color: corSecundaria,
  body: fundoEscuro,
  inside: conteudoEscuro,
  text: textoFundoEscuro,
  filter: "invert(100%)"
};
