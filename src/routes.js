import {Router} from "express";

const routes = new Router();


routes.get('/',(req,res)=>{
    return res.json({message:'Hello Ligia!'});
});

export default routes;