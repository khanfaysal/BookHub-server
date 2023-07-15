import mongoose from 'mongoose';
import app from './app';
import { Server } from 'http';
import config from './config';

process.on('uncaughtException', error => {
  console.log(error);
  process.exit(1);
});

let server: Server;

async function bootstrap() {
  console.log('first')
  try {
    await mongoose.connect(config.database_url as string);
    console.log(`Database connected Successfully`);

    server = app.listen(config.port, () => {
      console.log(`Application listening on port ${config.port}`);
    });
  } catch (error) {
    console.log('Failed to connect database', error);
  }
  process.on('unhandledRejection', error => {
    console.log('unhandledRejection is detected, we are closing our server');
    if (server) {
      server.close(error => {
        console.log(error);
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  });
}
bootstrap();


