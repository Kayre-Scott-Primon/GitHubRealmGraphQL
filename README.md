# GitHubRealmGraphQL

 Neste documento estão alguns pontos de relevância para que se tenha um projeto React-Native contendo Realm trabalhando junto com uma API preparada com o GraphQL. 

 

     Para iniciar, é valido trazer o que é uma API, de acordo com o canal-tech “API é um conjunto de rotinas e padrões de programação para acesso a um aplicativo de software ou plataforma baseado na Web. A sigla API refere-se ao termo em inglês "Application Programming Interface" que significa em tradução para o português "Interface de Programação de Aplicativos".“ Em outras palavras, uma API é um backend, ou seja, é uma interface entre o código que o usuário irá acessa, normalmente um frontend, e um banco de dados, responsável por entregar e/ou manipular as informações contidas no banco.


     Assim uma API Rest significa, de acordo com astera, “A forma completa da API REST é a Interface de Programação do Aplicativo de Transferência de Estado Representacional, mais comumente conhecida como serviço da web Rest API. Isso significa que quando uma API RESTful é chamada, o servidor irá transferência a representação do recurso solicitado estado para o sistema do cliente.“, ou seja, é uma API que ira retornar um dado apenas quando for realizado um GET, POST, PUT, PATCH ou DELETE, retornando uma estrutura de dados fixa de acordo com os parâmetros da requisição.

     Para fechar o assunto de API, o conceito de GraphQL, de acordo com redHat “ GraphQL é uma linguagem de consulta e ambiente de execução voltado a servidores para as interfaces de programação de aplicações (APIs) cuja prioridade é fornecer exatamente os dados que os clientes solicitam e nada mais.  “. Essa configuração foi construída a fim de deixar uma requisição mais flexível e enxuta para os desenvolvedores e assim melhorando o funcionamento das plataformas. Vem com o intuito de substituir a arquitetura REST, fazendo com que o usuário possa escolher os dados que quer receber, quebrando a estrutura fixa de resposta da anterior (REST). Ela também auxilia ao desenvolvedor da própria API, facilitando muito a manutenção da mesma. No GraphQL utiliza-se queries na sua requisição, que são apenas esquemas que descrevem quais dados, em quais ordens de hierarquia, irão ser buscados. Esse recurso também permite que se realize alterações nos bancos utilizando as mutations, que no português se traduz como mutações, que abrangem as ações de criação, atualização e exclusão.


     Para esse projeto usaremos a API do GitHub que é equipada com o GraphQL, como o próprio GitHub explica “ O GitHub escolheu o GraphQL para a nossa API v4 porque ele oferece muito mais flexibilidade para os nossos integradores. A capacidade de definir precisamente os dados que você deseja—e apenas os dados que você quer—é uma vantagem poderosa dos pontos de extremidades da API REST v3. O GraphQL permite que você substitua várias solicitações de REST por uma única chamada para buscar os dados que você especificar. “. Assim sendo, mostra-se ser um bom recurso para que se possa apresentar os resultados para o objetivo desejado. A escolha dela, para o projeto, foi devidos aos fatos que: é gratuita, equipada com a tecnologia GraphQL e que pode-se alterar dados e buscá-los nas chamadas da API, sabendo onde exatamente ocorreu a alteração e qual foi ela.


     Partindo para o lado do App, usou-se a tecnologia React Native, que em poucas palavras significa, nas palavras do site Organica Digital, “ O React Native é um framework baseado no já aclamado React, desenvolvido pela equipe do Facebook, que possibilita o desenvolvimento de aplicações mobile, tanto para Android, como para iOS, utilizando apenas Javascript.  “ . Em outras palavras, é uma tecnologia que permite que utilize-se da linguagem JavaScript para projetar um App mobile, que serve tanto para Android quanto para IOS (e algumas outras OS) onde tem por objetivo tentar utilizar o máximo dos recursos nativos do dispositivo. Desenvolvido pela empresa Facebook, recebe melhorias e correções constantemente e está cada vez sendo adotados pelos desenvolvedores.


     Para o uso offline de dados, é necessário um banco de dados no dispositivo móvel, com base em estudos e pesquisas, foi usado o Realm, que pela iMasters “ A Plataforma Realm Mobile oferece a sincronização automática e contínua de dados em tempo real e gerenciamento de eventos entre o servidor e os dispositivos, suportando o iOS e o Android. “. Sendo assim, é um candidato de banco de dados para dispositivos mobiles, uma vez que é de fácil implementação, fácil uso, rápido, atualizado/melhorado constantemente, sendo para lidar com grandes volumes de dados de todos os tipos e apresentando bons e novos recursos para o desenvolvedor.

 

     Com todos os conceitos, previamente comentados, esse APP tem por objetivo de mostrar a interação entre uma API com GraphQL e um banco de dados de um dispositivo móvel por meio de um aplicativo.

*detalhamento do projeto*
