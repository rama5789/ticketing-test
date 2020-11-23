FROM node:12.18-alpine

# Npm Pkg Manager --->
# WORKDIR /app
# COPY package.json .
# RUN npm install --only=prod
# COPY . .
# CMD ["npm", "start"]

# Yarn Pkg Manager --->
WORKDIR /app
COPY ["package.json", "yarn.lock", "./"]
RUN yarn install --prod=true
COPY . .
# EXPOSE 3000
CMD ["yarn", "start"]