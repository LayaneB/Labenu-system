import { Request, Response } from "express";
import { ClassDataBase } from "../data/ClassDataBase";

export const getAllClasses = async (req: Request, res: Response): Promise<void> => {
    let errorCode = 500
    try {
        const allClasses = new ClassDataBase()

        const classes = await allClasses.getAll()
        if (!classes.length) {
            errorCode = 404
            throw new Error("Sorry, we couldn't find any class!");
        }

        res.send(classes)
    } catch (error: any) {
        res.status(errorCode).send(error.message || "Internal error!")
    }
}