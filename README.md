<h1 align="center">
📄<br>Documentação Domus Petra 
</h1>

<h1 align="center">
  <img src="/public/outros/doc01.png">
</h1>

Este repositório contém um modelo de aplicativo configurado com as **melhores práticas** para desenvolvimento utilizando Next.js, Tailwind CSS e TypeScript.

## 🧑‍💻 Time Hydra Developer:

[<img src='https://avatars.githubusercontent.com/u/96358624?v=4' alt='Foto Lucas' height='150' >](https://github.com/llucasgomes)   [<img src='https://avatars.githubusercontent.com/u/95360085?v=4' alt='Foto Amanda Spitzner' height='150'>](https://github.com/amandaspitz)[<img src='https://avatars.githubusercontent.com/u/87991807?v=4' alt='Foto Amanda Spitzner' height='150'>](https://github.com/RafaRz76Dev)

## 🦄 Figma
Figma é uma ferramenta de design colaborativo baseada na web, amplamente utilizada por designers para criar interfaces de usuário, protótipos e gráficos vetoriais. 

https://www.figma.com/design/mRfA5Mam9wglPqMXp1v1og/Domus-new-(Copy)?node-id=187-2&t=xqJ9KDJqyUpz0c2P-0


## 📓 Trelo

Trello é uma ferramenta de gerenciamento de projetos visual baseada na web que utiliza o método Kanban para organizar tarefas e projetos. 

https://trello.com/invite/b/6691c78dc97bf7a6dea697bc/ATTI045e6bd616c37cb573815408468a901e113A4C7C/domus-petra


##  ⚙ Dependências Ultilizadas



`**Eslint**`
   - Configurações para linting de código JavaScript e TypeScript, com suporte para React e React Hooks, visando manter o código consistente e livre de erros.

`**Prettier**`
   - Configurações para formatação automática de código, incluindo suporte para Tailwind CSS, garantindo um estilo de código uniforme e legível.

`**Configurações do VSCode**`
   - Configurações específicas para o Visual Studio Code, desabilitando formatação automática ao salvar e ativando a correção automática de problemas detectados pelo ESLint.

`**Shadcn**`
   - Configuração inicial do Shadcn-UI para estruturação e organização de componentes e utilitários dentro do projeto.

`**Husky + Lint-staged**`
   - Utilização de githooks para execução automática de linting (ESLint) e formatação (Prettier) antes de confirmar mudanças, garantindo consistência no código fonte.

`**PrismaORM**`
   - Prisma é um ORM (Object-Relational Mapping) moderno e poderoso para Node.js e TypeScript, utilizado principalmente para trabalhar com bancos de dados relacionais. Ele oferece uma abstração de banco de dados que simplifica o acesso e a manipulação de dados, permitindo aos desenvolvedores interagir com o banco de dados através de uma interface de programação simples e intuitiva, usando tipos de dados e consultas em um estilo declarativo.

`**NextAuth.js**`
   - NextAuth.js é uma biblioteca de autenticação para Next.js, uma estrutura popular de React para desenvolvimento de aplicações web. Ele simplifica a adição de autenticação em seus aplicativos Next.js, oferecendo suporte para vários provedores de autenticação, como Google, Facebook, GitHub, entre outros, além de permitir autenticação própria (self-hosted authentication).

`**React-hook-form**`
   - React-hook-form é uma biblioteca leve e flexível para manipulação de formulários em React. Ela oferece um conjunto de hooks que simplificam a criação e gerenciamento de formulários, proporcionando melhor performance e experiência de usuário. A principal vantagem do React-hook-form é a minimização de renderizações desnecessárias, permitindo que o formulário seja altamente performático, mesmo em aplicações de grande escala.

`**Zod**`
   - Zod é uma biblioteca de validação e tipagem de esquemas para TypeScript e JavaScript. Ele permite definir esquemas de dados e validar entradas de forma declarativa e eficiente. Quando combinado com o React-hook-form, Zod oferece uma maneira poderosa de validar dados do formulário, garantindo que os dados enviados estejam sempre no formato esperado e atendam aos critérios definidos.

   Ao utilizar React-hook-form junto com Zod, é possível criar formulários robustos e bem validados, garantindo uma experiência de usuário mais segura e consistente. A integração entre as duas bibliotecas é direta, aproveitando ao máximo as funcionalidades de ambas.

`**Resend**`
   - Resend é uma biblioteca que facilita o envio de emails a partir de aplicações Node.js. Ela oferece uma interface simples e intuitiva para integração com diversos provedores de email, permitindo que os desenvolvedores enviem emails transacionais e de marketing de maneira eficiente. Com Resend, é possível configurar e personalizar emails facilmente, incluindo suporte para templates HTML, anexos e parâmetros dinâmicos.


###  ⚙ Variaveis  de Ambiente

.env:

``GOOGLE_CLIENT_ID=""``
`GOOGLE_CLIENT_SECRET=""`
`DATABASE_URL=""`
`NEXTAUTH_URL=""`
`NEXT_AUTH_SECRET=""`
`RESEND_API_KEY=""`
`FIREBASE=""`