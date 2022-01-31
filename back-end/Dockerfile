#Arquivo Dockerfile são os passos para construir o container e nesse caso construimos todo container do Backend
#Onde copiamos os arquivos para o diretorio dentro do Docker e executamos o npm e startamos o docker do Backend
FROM node:alpine
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN npm i
CMD ["npm", "run", "start"]




