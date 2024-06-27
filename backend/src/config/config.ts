import * as process from 'node:process';

export default () => ({
  accessToken: process.env.ACCESS_TOKEN,
});
