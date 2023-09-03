
ARG NODE_VERSION=18.16.0

FROM node:${NODE_VERSION}-alpine

# Use production node environment by default.
ENV NODE_ENV production


WORKDIR /usr/src/app


# Copy the rest of the source files into the image.
COPY . .


RUN cd FrontEnd-ReactApp/ && npm install && npm run build && rm -fr node_modules && cd .. && npm install

# Expose the port that the application listens on.
EXPOSE 5005

# Run the application.
CMD ["node","index.js"]
