
import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { connectDB } from './server';
import config from './config';

const app: Application = express();
const port = config.port || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// application Routes
// app.use('api/v1', routes)

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start the server
const startServer = async () => {
  console.log('first')
  try {
    await connectDB();
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });

  } catch (error) {
    console.error('Error starting the server:', error);
    process.exit(1);
  }
};

startServer();
