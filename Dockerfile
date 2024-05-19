FROM node:lts-alpine

WORKDIR /app
COPY . ./
RUN npm install --force

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]