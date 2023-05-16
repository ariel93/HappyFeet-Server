import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import ShoeRouter from './shoe/controllers/shoe.controller';
import UserRouter from './user/controllers/user.controller';

const port = 8080;

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Database connection
const dbUser: String = 'ariel93yohimovich';
const dbPassword = 'ieJ0a2A6BVhNN7CT';
mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.093esbr.mongodb.net/?retryWrites=true&w=majority`, { dbName: "HappyFeet" })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log(err));


app.use('/shoes', ShoeRouter);
app.use('/users', UserRouter);
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

