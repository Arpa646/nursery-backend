import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import router from './plant/plantRoute';
import bodyParser from 'body-parser';

// Create Express app
const app: Application = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api', router);

app.use((req, res) => {
  res.status(404).json({
      success: false,
      message: 'Route not found'
  });
});

// Define a route handler for the root path
app.get('/', (req: Request, res: Response) => {
  const a = 10;
  res.send(a.toString());
});

// Start the server
export default app;
