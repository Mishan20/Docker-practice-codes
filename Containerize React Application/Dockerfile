# Use the base image from Docker Hub
FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./  

# Install the dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the port your app will run on
EXPOSE 5173

# Start the application
CMD [ "npm" , "run" , "dev" ]


# docker build -t vite-app .  => // build the image
# docker run --name vite-container -p 3000:5173 vite-app   => // run the container
# docker stop vite-container     => // stop the container
# docker rm vite-container  => // remove the container
# docker rmi vite-app  => // remove the image
# docker ps -a  => // list all containers
# docker images  =>// list all images 
# docker run --name vite-container2 -p 3000:5173 --rm -v /app/node_modules -v ${PWD}:/app -e CHOKIDAR_USEPOLLING=true vite-app => // run the container with volume
# docker system prune -a => // remove all images and containers





# docker exec -it vite-container sh  => // access the container
# docker logs vite-container  => // show the logs of the container
# docker inspect vite-container  => // show the details of the container
# docker-compose up -d  => // start the containers in the background
# docker-compose down  => // stop the containers
# docker-compose logs  => // show the logs of the containers
# docker-compose ps  => // show the status of the containers
# docker-compose exec vite-container sh  => // access the container
# docker-compose exec vite-container npm run build  => // run the build command in the container
# docker-compose exec vite-container npm run dev  => // run the dev command in the container
# docker-compose exec vite-container npm run start  => // run the start command in the container
# docker-compose exec vite-container npm run test  => // run the test command in the container
# docker-compose exec vite-container npm run lint  => // run the lint command in the container
# docker-compose exec vite-container npm run format  => // run the format command in the container
# docker-compose exec vite-container npm run serve  => // run the serve command in the container


