# Etapa de build
FROM node:14 as build

WORKDIR /app

# Copia os arquivos de configuração do npm antes de instalar as dependências
COPY package.json ./
COPY package-lock.json ./
RUN npm install

# Copia o restante dos arquivos da aplicação
COPY . ./

# Executa o build do React
RUN npm run build

# Etapa de produção
FROM nginx:alpine

# Copia os arquivos de build para o diretório padrão do Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Exponha a porta 80 para acessar o serviço
EXPOSE 80

# Comando para iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]
