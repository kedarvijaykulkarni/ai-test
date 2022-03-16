#! /bin/sh
cd
cd /home/kedar/work/mantiumclient-js
npm run build
cd
cd  /home/kedar/work/ai-test
rm -rf node_modules package-lock.json &&  npm install /home/kedar/work/mantiumclient-js


# node --trace-warnings hitl/hitl.js

# node --trace-warnings security/listpolicies.js

# node --trace-warnings files/files.js

# node --trace-warnings health/check.js

# node --trace-warnings intelets/execute.js

# node --trace-warnings intelets/retrieve.js

# node --trace-warnings intelets/update.js

# node --trace-warnings intelets/create.js

# node --trace-warnings intelets/list.js

# node --trace-warnings logs/log.js

# node --trace-warnings prompts/try.js

# node --trace-warnings prompts/update.js

# node --trace-warnings prompts/create.js

# node --trace-warnings  prompts/execute.js

# node --trace-warnings  prompts/remove.js

# node --trace-warnings  prompts/retreive.js

# node --trace-warnings ai_engines/all.js

# node --trace-warnings prompts/update.js

# node --trace-warnings prompts/list.js

# node --trace-warnings prompts/test.js

# node --trace-warnings ai_engines/all.js
