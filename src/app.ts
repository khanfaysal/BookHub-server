import express, { Application, Request, Response, NextFunction } from 'express';
import sampleRoutes from './routes/sampleRoutes';
import { connectDB } from './db';

const app: Application = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}))

// application Routes
app.use('/', sampleRoutes);

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  connectDB().catch((error: any) => {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  });
});
