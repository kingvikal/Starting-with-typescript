import {Response, Request} from "express";

export const Welcome : any = (req: Request, res: Response) =>{
    res.send("Welcome to the MainPage");
}

export const Hi : any = (req: Request, res: Response)=>{
    let greetedBy: String = "Alish Karki" 
    res.send(`Welcome to our page. Greeting from ${greetedBy}`)
}