#! /bin/sh
cd 
cd /home/kedar/work/mantiumclient-js
npm run build
cd
cd  /home/kedar/work/ai-test
rm -rf node_modules &&  npm install /home/kedar/work/mantiumclient-js
node prompt/create.js