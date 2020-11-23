FROM node:12.18-alpine

WORKDIR /app
COPY ["package.json", "yarn.lock", "./"]
RUN yarn install --prod=true
COPY . .
# EXPOSE 3000
CMD ["yarn", "start"]