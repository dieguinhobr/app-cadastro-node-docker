
#App de Cadastro - Node.js & Docker


🚀 App Cadastro Node Docker
📋 Sobre o Projeto
Este é um projeto de uma aplicação de cadastro desenvolvida em Node.js, totalmente configurada para rodar em containers Docker.

O objetivo deste repositório é demonstrar a criação de um ambiente backend isolado e consistente, facilitando o deploy e garantindo que a aplicação funcione da mesma forma em qualquer máquina, independentemente do sistema operacional do desenvolvedor.

O projeto conta com a estrutura completa do servidor (server.js) e a orquestração de containers através do docker-compose, além de um Dockerfile otimizado para a aplicação.

🛠️ Tecnologias Utilizadas
Node.js (Ambiente de execução)

Docker (Criação da imagem/container)

Docker Compose (Orquestração do ambiente)

⚙️ Como executar o projeto
Para rodar este projeto na sua máquina, você precisará ter o Docker e o Docker Compose instalados.

1.Clone este repositório:

git clone https://github.com/seu-usuario/app-cadastro-node-docker.git

2.Entre na pasta do projeto:

cd app-cadastro-node-docker

3.Suba os containers com o Docker Compose:

docker-compose up -d

A aplicação estará rodando e pronta para receber requisições (verifique a porta configurada no seu server.js ou docker-compose.yaml).
