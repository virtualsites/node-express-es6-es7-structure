import { Router } from 'express';
import subjectsController from '../controllers/subjectsController';

export default () => {
    const api = Router();

    // GET /subjects
    api.get('/:id', subjectsController.findOne);

    return api;
}