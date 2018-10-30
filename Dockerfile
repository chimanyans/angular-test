FROM node:8

RUN mkdir /app
WORKDIR /app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json
RUN npm install
RUN npm install -g @angular/cli

COPY . /app

EXPOSE 4200 49153

ARG API_URL="123"
ENV API_URL=$API_URL

# RUN npm run build:env /app/src/environments/params.ts

CMD npm run build:env /app/src/environments/params.ts

CMD ng serve --host 0.0.0.0 --poll=1000
