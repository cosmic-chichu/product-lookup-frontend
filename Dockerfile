# Use latest version of node v8
FROM node:8.12.0

#create an app directory
RUN mkdir /app

#make /app as the working directory
WORKDIR /app

COPY package.json /app/

# update the package manager, install git.
# install all the prod dependency and remove the unnnecessary packages again to make the build size small.
# --pure-lockfile: Don’t generate a yarn.lock lockfile
RUN npm install

COPY . /app/

ENV BIND_HOST=0.0.0.0

#expose default port of the docker to 3000
EXPOSE 9000

#runs this command when the container is created, can be overriden in the docker-compose.yml
CMD ["npm", "start"]
