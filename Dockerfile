FROM nodered/node-red:4.0

USER root
COPY package.json /data/package.json
RUN cd /data && npm install --omit=dev
COPY settings.js /data/settings.js
COPY flows.json /data/flows.json
RUN chown -R node-red:root /data
USER node-red

ENV PORT=1880
EXPOSE 1880
CMD ["node-red", "--userDir", "/data", "--settings", "/data/settings.js"]
