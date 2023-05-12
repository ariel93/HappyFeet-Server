import { Request, Response } from 'express';
import express from "express";
import * as UserService from '../services/user.service';

// Read about CRUD and RESTful APIs here: https://stackabuse.com/the-crud-rest-api/
// POST "/" (create new User) receive data in req.body
// GET "/" (get all Users)
// GET "/:id" (get User by id)
// PUT "/:id" (update User by id) receive data in req.body
// DELETE "/:id" (delete User by id)

const UserRouter = express.Router();

UserRouter.get('/', 
  async function getAllUser(req: Request, res: Response): Promise<void> {
    try {
      const users = await UserService.getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
);

UserRouter.get('/:id', 
  async function getUserById(req: Request, res: Response): Promise<void> {
    const id = req.params.id;
    try {
      const User = await UserService.getUserById(id);
      if (!User) {
        res.status(404).json({ message: `User with id ${id} not found` });
        return;
      }
      res.status(200).json(User);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
); 

UserRouter.post('/', 
  async function createUser(req: Request, res: Response): Promise<void> {
    const UserData = req.body;
    try {
      const newUser = await UserService.createUser(UserData);
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
); 

UserRouter.put('/:id', 
  async function updateUser(req: Request, res: Response): Promise<void> {
    const id = req.params.id;
    const UserData = req.body;
    try {
      const updatedUser = await UserService.updateUser(id, UserData);
      if (!updatedUser) {
        res.status(404).json({ message: `User with id ${id} not found` });
        return;
      }
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
);

UserRouter.delete('/:id', 
  async function deleteUser(req: Request, res: Response): Promise<void> {
    const id = req.params.id;
    try {
      await UserService.deleteUser(id);
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
);

export default UserRouter;