import { Request, Response } from 'express';
import express from "express";
import * as ShoeService from '../services/shoe.service';

// Read about CRUD and RESTful APIs here: https://stackabuse.com/the-crud-rest-api/
// POST "/" (create new shoe) receive data in req.body
// GET "/" (get all shoes)
// GET "/:id" (get shoe by id)
// PUT "/:id" (update shoe by id) receive data in req.body
// DELETE "/:id" (delete shoe by id)

const ShoeRouter = express.Router();

ShoeRouter.get('/', 
  async function getAllShoes(req: Request, res: Response): Promise<void> {
    try {
      const shoes = await ShoeService.getAllShoes();
      res.status(200).json(shoes);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
);

ShoeRouter.get('/:id', 
  async function getShoeById(req: Request, res: Response): Promise<void> {
    const id = req.params.id;
    try {
      const shoe = await ShoeService.getShoeById(id);
      if (!shoe) {
        res.status(404).json({ message: `Shoe with id ${id} not found` });
        return;
      }
      res.status(200).json(shoe);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
); 

ShoeRouter.post('/', 
  async function createShoe(req: Request, res: Response): Promise<void> {
    const shoeData = req.body;
    try {
      const newShoe = await ShoeService.createShoe(shoeData);
      res.status(201).json(newShoe);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
); 

ShoeRouter.put('/:id', 
  async function updateShoe(req: Request, res: Response): Promise<void> {
    const id = req.params.id;
    const shoeData = req.body;
    try {
      const updatedShoe = await ShoeService.updateShoe(id, shoeData);
      if (!updatedShoe) {
        res.status(404).json({ message: `Shoe with id ${id} not found` });
        return;
      }
      res.status(200).json(updatedShoe);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
);

ShoeRouter.delete('/:id', 
  async function deleteShoe(req: Request, res: Response): Promise<void> {
    const id = req.params.id;
    try {
      await ShoeService.deleteShoe(id);
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
);

export default ShoeRouter;