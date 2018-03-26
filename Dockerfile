### STAGE1 : INSTALL NPM AND BUILD PROD VERSION ###

FROM node:8.9.4-alpine as builder
RUN mkdir -p /memorizy
WORKDIR /memorizy
ADD . /memorizy
RUN npm install --no-progress && \
    node_modules/.bin/ng build && \
    npm cache verify

### STAGE2 : SETUP NGNIX AND PUT PROD REACTJS FILE INTO HTTP SERVER ###
FROM nginx:1.13.8-alpine
COPY nginx/default.conf /etc/nginx/conf.d/
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /memorizy/dist /usr/share/nginx/html
CMD [ "nginx", "-g", "daemon off;"]