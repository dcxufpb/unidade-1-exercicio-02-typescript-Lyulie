const cupom = require('./cupom');

test('Exercício 1', () => {
  expect(cupom.imprime_dados_loja()).toBe(
    `Arcos Dourados Com. de Alimentos LTDA
Av. Projetada Leste, 500 EUC F32/33/34
Br. Sta Genebra - Campinas - SP
CEP:13080-395 Tel (19) 3756-7408
Loja 1317 (PDP)
CNPJ: 42.591.651/0797-34
IE: 244.898.500.113
`);
});

test('Exercício 2 - tudo vazio', () => {

  cupom.dados.nome_loja = "";
  cupom.dados.logradouro = "";
  cupom.dados.numero = 0;
  cupom.dados.complemento = "";
  cupom.dados.bairro = "";
  cupom.dados.municipio = "";
  cupom.dados.estado = "";
  cupom.dados.cep = "";
  cupom.dados.telefone = "";
  cupom.dados.observacao = "";
  cupom.dados.cnpj = "";
  cupom.dados.inscricao_estadual = "";

  expect(cupom.imprime_dados_loja()).toBe(`
, 0 
 -  - 
CEP: Tel 

CNPJ: 
IE: 
`);
});

test('Exercício 2 - customizado', () => {

  // Defina seus próprios valores para as variáveis a seguir
  cupom.dados.nome_loja = "Rodolpho Vidros LTDA"
  cupom.dados.logradouro = "Av. Rui Carneiro"
  cupom.dados.numero = 50;
  cupom.dados.complemento = "de esquina";
  cupom.dados.bairro = "Miramar";
  cupom.dados.municipio = "João Pessoa";
  cupom.dados.estado = "PB";
  cupom.dados.cep = "58038-000";
  cupom.dados.telefone = "(83) 8888-0000";
  cupom.dados.observacao = "Loja 202/2";
  cupom.dados.cnpj = "42.591.651/0797-34";
  cupom.dados.inscricao_estadual = "244.898.500.113";

  //E atualize o texto esperado abaixo
  expect(cupom.imprime_dados_loja()).toBe(
    `Rodolpho Vidros LTDA
Av. Rui Carneiro, 50 de esquina
Miramar - João Pessoa - PB
CEP:58038-000 Tel (83) 8888-0000
Loja 202/2
CNPJ: 42.591.651/0797-34
IE: 244.898.500.113
`);
});