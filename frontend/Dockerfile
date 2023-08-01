FROM node:18-alpine
WORKDIR /usr/src/app
# COPY package*.json ./
# RUN npm install
EXPOSE 5173
# CMD ["npm", "run", "dev"]

CMD [ -d "node_modules" ] && npm run dev || npm ci && npm run dev