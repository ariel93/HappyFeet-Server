import express from "express";
import { getAllShoes, getShoeById, createShoe, updateShoe, deleteShoe } from "../controllers/shoe.controller";

const ShoeRouter = express.Router();
ShoeRouter.get('/', getAllShoes);
ShoeRouter.get('/:id', getShoeById);
ShoeRouter.post('/', createShoe);
ShoeRouter.put('/:id', updateShoe);
ShoeRouter.delete('/:id', deleteShoe);

export default ShoeRouter;