# sistema operacional
FROM node:lts-alpine3.17 

# pasta de trabalho / pasta raiz
WORKDIR /app

# copia o package.json e yarn.lock para a pasta raiz
COPY package.json yarn.lock ./

# instala as dependencias para criar a node_modules
RUN yarn install

# copia o resto do projeto para a pasta raiz
COPY . .

# builda o projeto
RUN yarn build

# expoe a porta 3333
EXPOSE 3333

# comando para iniciar o projeto
ENTRYPOINT ["yarn", "start"]