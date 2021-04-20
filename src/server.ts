import express from 'express';
import './database'

const app = express();

app.get('/', (resquest, response) => {
  return response.json({
    message: 'Victor'
  })
})

app.listen(3333, () => console.log('Server is running on port 3333'));