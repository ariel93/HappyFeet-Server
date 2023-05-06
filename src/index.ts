import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import ShoeRouter from './shoe/routes/shoe.router';

const port = 3000;
const app = express();
app.use(bodyParser.json());

// Database connection
const dbUser: String = 'ariel93yohimovich';
const dbPassword = 'HJHDdtrh10B6Bx5Y';
mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.oi2q24o.mongodb.net/?retryWrites=true&w=majority`, { dbName: "HappyFeet" })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log(err));


app.use('/shoes', ShoeRouter);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

