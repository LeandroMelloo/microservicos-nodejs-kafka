import express from 'express';
import { Kafka } from 'kafkajs';
import routes from './routes'

const app = express();

const kafka = new Kafka({
  clientId: 'api-producer',
  brokers: ['kafka:9092']
});

app.use(routes);

async function run() {
  //await producer.connect()

  app.listen(3333);
}

run().catch(console.error)

const producer = kafka.producer()

