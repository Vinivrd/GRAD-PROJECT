FROM node:22

WORKDIR /app

# Copia os arquivos de configuração do npm antes de instalar as dependências
COPY package.json ./
COPY package-lock.json ./
RUN npm install

# Copia o restante dos arquivos da aplicação
COPY . ./

# Exponha a porta usada pelo Node.js (geralmente 3001)
EXPOSE 5000

# Comando para iniciar a aplicação Node.js em modo de desenvolvimento
CMD ["npm", "run", "dev"]
