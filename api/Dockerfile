FROM node:12-slim
WORKDIR /rgqldocker
COPY package.json /rgqldocker
RUN npm install
COPY . /rgqldocker
CMD ["npm", "start"]
