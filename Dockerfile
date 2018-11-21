FROM node:11

WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install 
RUN npm install nefit-easy-http-server -g

# Bundle app source
COPY . .

ENV NEFIT_IP="127.0.0.1"
ENV NEFIT_PORT=3000



CMD easy-server --host=$NEFIT_IP --port=$NEFIT_PORT 
