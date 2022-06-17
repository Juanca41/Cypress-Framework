#Node version
FROM cypress/base:16
#Working directory
WORKDIR /app

#Copying files
COPY package.json .
COPY package-lock.json .
#Run the cypress installation command
RUN npm install --save-dev cypress
#Verify that the installation was successful
RUN $(npm bin)/cypress verify

#Copying cypress files
COPY cypress cypress
COPY cypress.config.js .
#Run the cypress installation command
RUN $(npm bin)/cypress
