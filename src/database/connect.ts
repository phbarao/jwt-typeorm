import { createConnection } from 'typeorm';

createConnection()
  .then(() => console.log('>>> DB: OK'))
  .catch((e) => console.log(e));
