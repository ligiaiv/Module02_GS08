import {Router} from "express";
import User from './app/models/User';

const routes = new Router();


routes.get('/',async (req,res)=>{
    console.log("OIEEEEE 1");

    const user = await User.create({
        name: 'Ligia Iunes',
        email: 'ligiaeevee@hotmail.com',
        password_hash : '123456',
    });
    console.log("OIEEEEE 2");

    return res.json(user);
});

export default routes;
