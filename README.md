# Pizzaria

Bem-vindo ao repositório do projeto **Pizzaria**! Este é um sistema de pedidos de pizzas para uma pizzaria fictícia. O projeto é dividido em um backend desenvolvido em Node.js com Prisma e PostgreSQL, e um frontend em desenvolvimento utilizando React com Next.js.

## Funcionalidades

- Abrir mesas, inserir produtos e concluir pedido, mandando para a produção.
- Cadastrar novos produtos a mesas já existentes.
- Controle de vendas
- Acompanhar o status do pedido

## Pré-requisitos

Antes de começar a utilizar o projeto, você precisa ter instalado em sua máquina as seguintes tecnologias:

- Node.js 
- PostgreSQL

## Instalação e Configuração

### Backend

1. Clone este repositório para sua máquina local.
2. Acesse a pasta do backend: `cd backend`.
3. Instale as dependências do projeto: `npm install`.
4. Configure as variáveis de ambiente:
   - Crie um arquivo `.env` baseado no arquivo `.env.example`.
   - Preencha as informações necessárias no arquivo `.env`, como as configurações do banco de dados PostgreSQL.
5. Execute as migrações do banco de dados: `npx prisma migrate dev`.
6. Inicie o servidor do backend: `npm start`.

### Frontend

1. Acesse a pasta do frontend: `cd frontend`.
2. Instale as dependências do projeto: `npm install`.
3. Inicie o servidor de desenvolvimento: `npm run dev`.
4. Abra seu navegador e acesse `http://localhost:3000` para visualizar o frontend em desenvolvimento.

## Contribuição

Contribuições são bem-vindas! Se você tiver sugestões, correções ou novas funcionalidades a serem implementadas, fique à vontade para enviar um pull request.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

## Contato

Se tiver alguma dúvida ou precisar de mais informações sobre o projeto, entre em contato conosco:

- Email: anthony.anthony179@gmail.com
- Linkedin: https://www.linkedin.com/in/anthony-antonelli-andrade/
