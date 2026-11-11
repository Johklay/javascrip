# PRD — Buscador de repositórios do GitHub

## Visão geral

Aplicação web para pesquisar repositórios públicos do GitHub. A pessoa informa um termo, pressiona Enter e vê os repositórios encontrados.

## Funcionalidades

### Busca de repositórios

- Disponibilizar um campo para digitar o termo de busca.
- Iniciar a busca somente quando a pessoa pressionar Enter.
- Exibir os repositórios retornados pela busca.
- Para cada repositório, apresentar:
  - nome e foto do autor;
  - nome do repositório;
  - descrição;
  - linguagem principal;
  - quantidade de estrelas;
  - link direto para o repositório.

### Estados da interface

- Exibir um estado de carregamento enquanto a busca estiver em andamento.
- Exibir um estado vazio quando a busca não retornar resultados.
- Exibir uma mensagem amigável quando ocorrer um erro.

### Apresentação visual

- Usar um card com bordas arredondadas para o campo de busca.
- Usar um card com bordas arredondadas para os resultados.
- Aplicar um fundo mais escuro que os cards.
- Centralizar o conteúdo na página e limitar sua largura a 700 px.

## Decisões técnicas

- Consultar a API de busca de repositórios do GitHub:
  `https://api.github.com/search/repositories?q={termo}&sort=stars&page=1&per_page=10`
- Fazer a requisição com `fetch`, usando `async/await` dentro de `try/catch`.
- Verificar o status HTTP da resposta antes de processar os dados.
- Implementar em JavaScript a definição dos dados e o tratamento dos eventos; não declarar eventos diretamente no HTML.

> **Decisão de implementação:** usar `page=1` e `per_page=10`, conforme confirmado pelo usuário, para priorizar os 10 repositórios com mais estrelas.

## Critérios de aceite

- A busca é executada ao pressionar Enter, e não apenas ao digitar.
- Durante a requisição, a interface indica que está carregando.
- Os resultados exibem as informações listadas nesta especificação e oferecem um link para cada repositório.
- Uma busca sem resultados apresenta um estado vazio.
- Uma falha na requisição apresenta uma mensagem amigável.
- A página mantém o conteúdo centralizado, com largura máxima de 700 px e os cards descritos acima.
