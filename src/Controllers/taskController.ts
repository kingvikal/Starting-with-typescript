import { Response, Request } from "express";
import { AppDataSource } from "../../models/datasource";
import { Task } from "../../models/task.entity";
import { User } from "../../models/user.entity";

const taskRepository = AppDataSource.getRepository(Task);
const userRepository = AppDataSource.getRepository(User);

export const getAllTask = async (req: Request, res: Response) => {
  try {
    const task = await taskRepository.find();
    res.status(200).json(task);

    if (task.length == 0 || !task.length) {
      return res.status(400).json("You don't have any task");
    }
  } catch (err) {
    console.log(err);
    res.status(500).json("Something went wrong");
  }
};

export const getTask = async (req: Request, res: Response) => {
  try {
    const task = await taskRepository.findOneBy({
      id: Number(req.params.id),
    });
    if (task) {
      return res.status(200).json(task);
    }
  } catch (err) {
    return res.status(500).json(err);
  }
};

interface UserRequest extends Request {
  user: any;
}
export const postTask = async (req: UserRequest, res: Response) => {
  try {
    const id = req.user.id;
    const user = await userRepository.findOne({ where: { id } });

    const task: any = new Task();
    task.name = req.body.name;
    task.description = req.body.description;
    task.user = user;

    await taskRepository
      .save(task)
      .then(() => {
        return res
          .status(200)
          .json({ message: "Task successfully added", task });
      })
      .catch((err) => {
        return res.status(400).json({ errmessage: err });
      });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

export const updateTask = async (req: Request, res: Response) => {
  try {
    const task: any = await taskRepository.findOneBy({
      id: Number(req.params.id),
    });

    task.name = req.body.name;
    task.description = req.body.description;

    await taskRepository.save(task);
    return res.status(200).json({ message: "Task updated successfully", task });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

export const deleteTask = async (req: Request, res: Response) => {
  try {
    const task: any = taskRepository.findOneBy({ id: Number(req.params.id) });

    await taskRepository.remove(task);
    res.status(200).json("Task deleted succesffully");
  } catch (err) {
    console.log(err);
    res.status(500).json("Unable to delete");
  }
};
