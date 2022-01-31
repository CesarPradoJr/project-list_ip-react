# Projeto com objetivo de realizar 3 endpoints.
`1- endpoint GET que devolve todos IPs TOR obtido de duas fontes externas`
`2- endpoint POST que receba um IP e o agregue à uma base de dados onde se encontram todos os IPs que não queremos que apareçam no output do endpoint 3 (detalhado abaixo)`
`3- endpoint GET que devolve os IPs obtidos das fontes externas, EXCETO os que se encontram na base de dados (IPs do endpoint 2)`
# Projeto Web com Backend em Node, Frontend em React e utilizando Docker container.

> Para uma melhor organização do código fonte, eu criei dois sub diretórios dentro do diretório principal. Um diretório pra o código da API com Node/Express chamada de "backend" e outro diretório para o código React, HTML, CSS e JS da interface gráfica, chamado de "frontend".

# Node
> No Node realizamos todo o processo o Back-end, todas as rotas, todas requisições.
> Utilizamos algumas bibliotecas como nodemon, express, route, axios entre outros.

# React
> Nosso React é responsável por todo o Front-end, Navbar, todas as tabelas que foram usadas foram feitas elo react e a biblioteca material-table

### Como testar este app?

1. Primeiro você deve ter o Docker instalado em sua máquina, você pode realizar o download no seguinte link: `https://www.docker.com/products/docker-desktop`
2. Clone o reposiório: `git clone https://github.com/ceesinha/desafio.git`.
3. Entre no diretório raiz : E digite `docker-compose up`.
    3.1.Esse comando ja irá instalar todas as dependências do projeto.
4. Para abrir o Frontend você ira usar `http://localhost:3001/`.
5. Nosso Frontend possui três páginas.
    5.1.`http://localhost:3001/`: Onde podemos gerar a lista de IPs geral, sem nenhum filto.
    5.2.`http://localhost:3001/exclude`: Onde podemos enviar um ip, por vez para a lista de exclusão.
    5.3.`http://localhost:3001/filtered_list`: Onde podemos gerar a lista de IPs filtrada, com o filtro removendo os IPs que foram adicionados na lista de exclusão
    5.4.`http://localhost:3001/exclude_list`: Onde podemos gerar a lista de exclusão, retornando id, ip e obs.


Dúvidas? cesarhenrique_prado@hotmail.com
