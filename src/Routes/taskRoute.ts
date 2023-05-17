import { Router } from 'express';
import { deleteTask, getAllTask, getTask, postTask, updateTask } from '../Controllers/taskController';

const router = Router();

router.get('/getAllTask', getAllTask);
router.get('/getTask/:id', getTask);
router.put('/updateTask/:id', updateTask);
router.delete('/deleteTask/:id', deleteTask);
router.post('/postTask', postTask)

export default router;
