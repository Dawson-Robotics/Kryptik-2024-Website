FROM node

WORKDIR /

COPY ./** .
RUN npm run build

EXPOSE 3000

CMD npm run run
