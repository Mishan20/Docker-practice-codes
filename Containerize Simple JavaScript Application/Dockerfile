# base image
FROM node:20.18.1-alpine

# set working directory
WORKDIR /app

# copy the package.json file
COPY package.json .

# install dependencies
RUN npm install

# copy the files
COPY . .

# start app
CMD ["npm", "start"]