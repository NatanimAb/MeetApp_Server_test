FROM node:16.15.0

RUN mkdir -p /opt/app

WORKDIR /opt/app

COPY ./ ./
RUN npm install

EXPOSE 3005

CMD ["npm","start"]
