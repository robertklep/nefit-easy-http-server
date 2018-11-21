FROM node:10.13.0-alpine

RUN npm install nefit-easy-http-server -g

ENV NEFIT_IP="127.0.0.1"
ENV NEFIT_PORT=3000

CMD easy-server --host=$NEFIT_IP --port=$NEFIT_PORT
