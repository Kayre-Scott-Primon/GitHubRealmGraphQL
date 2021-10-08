# GitHubRealmGraphQL

Neste documento estão alguns pontos de relevancia para que se tenha um projeto React-Native contendo Realm trabalhando junto com uma API preparada com o GraphQL. 



Para iniciar, é valido trazer o que é uma API, de acordo com o canaltech “API é um conjunto de rotinas e padrões de programação para acesso a um aplicativo de software ou plataforma baseado na Web. A sigla API refere-se ao termo em inglês "Application Programming Interface" que significa em tradução para o português "Interface de Programação de Aplicativos".“ Em outras palavras, uma API é um backend, ou seja, é uma interface entre o codigo que o usuario irá acessa, normalmente um frontend, e um banco de dados, responsavel por entregar e/ou manipular as informações contidas no banco.


Assim uma API Rest significa, de acordo com astera, “A forma completa da API REST é a Interface de Programação do Aplicativo de Transferência de Estado Representacional, mais comumente conhecida como serviço da web Rest API. Isso significa que quando uma API RESTful é chamada, o servidor irá transferência a representação do recurso solicitado estado para o sistema do cliente.“, ou seja, é uma API que ira retornar um dado apenas quando for realizado um GET, POST, PUT, PATCH ou DELETE, retornando uma estrutura de dados fixa de acordo com os parametros da requisição.


Para fechar o assunto de API, o conceito de GraphQL, de acordo com redHat “ GraphQL é uma linguagem de consulta e ambiente de execução voltado a servidores para as interfaces de programação de aplicações (APIs) cuja prioridade é fornecer exatamente os dados que os clientes solicitam e nada mais.  “. Essa configuração foi contruida a fim de deixar uma requisição mais flexivel e enxuta para os desenvolvedores e assim melhorando o funcoinamento das plataformas. Vem com o intuito de substituir a arquitetura REST, fazendo com que o usuario possa escolher os dados que quer receber, quebrando a estrutura fixa de resposta da anterior (REST). Ela tambem auxilia ao desenvolvedor da propria API, facilitando muito a manutenção da mesma. No graphQL utiliza-se queries na sua requisição, que são apenas esquemas que descrevem quais dados, em quais ordens de hierarquia, irão ser buscados. Esse recurso tambem permite que se realize alterações nos bancos utilizando as mutations, que no portugues se traduz como mutações, que abrangem as ações de criação, atualização e exclusão.


Para esse projeto usaremos a API do gitHub que é equipada com o GraphQL …


Partindo para o lado do App, usou-se a tecnologia React Native, que em poucas palavras significa…


Para o uso offline de dados, é necessario um banco de dados no dispositivo movel, com base em estudos e pesquisas, foi usado o Realm, que tem pos caracteristicas…

 

Com todos os conceitos, breviamente comentados, esse APP tem por objetivo de mostrar a interação entre uma API com GraphQL e um banco de dados de um dispositivo movel por meio de um aplicativo.

*detalhamento do projeto*
