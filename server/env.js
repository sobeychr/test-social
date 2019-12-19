const nodeEnv = require('node-env-file');
const { ENV } = process.env;
const file = ENV === 'development' ? '.env' : '.env.production';

nodeEnv(__dirname + '/../' + file);
