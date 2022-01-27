FROM node:12.18-alpine as buildContainer
WORKDIR /app
COPY ./package.json ./package-lock.json /app/
RUN npm install
COPY . /app
# RUN npm run build-dev:ssr
ARG BUILDENV
RUN npm run ${BUILDENV}

FROM node:12.18-alpine as server
WORKDIR /app
COPY --from=buildContainer /app/package.json /app
COPY --from=buildContainer /app/dist /app/dist
EXPOSE 4000
