# Projeto buscador de repositórios no GitHub

O usuário digita um termo e aperta ENTER.
A aplicação faz uma busca na API do GitHub e exibe os resultados encontrados.

Informações d repositório para exibir:
- Nome e foto do autor 
- Nome do repositório 
- Descrição do repositório 
- Linguagem principal utilizada 
- Número de estrelas 
- Link direto para o repositório

A busca só funciona ao apertar ENTER 
Deve exibir um "loading state" enquanto faz a busca.
Se não tiver resultado, exibir um "empty state".
Em caso de erro, exibir mensagem amigável.

Para a requisição, utilize um fetch.
Coloque o fetch dentro de um try/catch com async/await.
Verifique statuscode para prosseguir.

Todos os daddos devem ser definidos no javascript, sem nenhum evento definido no HTML.


URL da api do GitHub para pesquisar repositórios:
https://api.github.com/search/repositories?q={PALAVRA-CHAVE}&sort=stars&_page=10
- Substituir {PALAVRA-CHAVE} pelo termo que o usúario digitou.

instruções visuais:
- um card para o campo de busca com borda arredondada
- Um card para o resultafdo da busca com a borda arredondada
- Fundo mais escuro que os cards.
- Pagina inteira centralizada com limite de largura de 700px para o conteúdo