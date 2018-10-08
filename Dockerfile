# Use an official node runtime as a parent image
FROM node:8

# Set the working directory to
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# Install any needed packages and angular cli
COPY package.json /usr/src/app/package.json
RUN npm install
RUN npm install -g @angular/cli

# Copy the current directory contents into the container at WORKDIR
COPY . /usr/src/app

# Make port 4200 available to the world outside this container and port for live reloading
EXPOSE 4200 49153


# Define environment variable
ENV NAME World

# Run ng serve when the container launches
# CMD ["ng serve]
CMD ng serve --host 0.0.0.0 --poll=1000
