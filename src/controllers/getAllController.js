import { users } from "../db.js";

export default function getAllController(req,res){
    try {
        return res.status(200).json({usuarios: users});
    } 
    catch (error) {
        return res.status(500).json({message: 'server internal error'});
    }
}