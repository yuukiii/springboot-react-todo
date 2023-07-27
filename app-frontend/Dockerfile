FROM node:13.12.0-alpine
RUN mkdir /app
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app
RUN npm install
COPY . /app

RUN npm install --silent
RUN npm run build

# add app
COPY . ./

# start app
CMD ["npm", "start"]