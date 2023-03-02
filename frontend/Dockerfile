# Parte 01

# Sistema operacional vai ser o build
FROM node:lts-alpine3.17 as builder

# Definir pasta de trabalho / pasta raiz
WORKDIR /app


COPY package.json yarn.lock ./

# Instala a aplicação
RUN yarn install

# Copiar o resto do projeto para a pasta raiz
COPY . .

# Buildar o projeto
RUN yarn build


# Parte 02
# Definir imagem base
FROM nginx:alpine

# Copiar a página estática para o diretório padrão do Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Expor a porta padrão do Nginx
EXPOSE 80