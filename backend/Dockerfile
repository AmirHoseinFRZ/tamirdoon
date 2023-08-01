FROM node:18-alpine
WORKDIR /usr/src/app
# COPY package*.json ./
# RUN npm install
EXPOSE 3000
# CMD ["npm", "start"]

CMD [ -d "node_modules" ] && npm start || npm ci && npm start