import { users } from "../db.js";

export default function getUserController(req, res){
    try{
        const id = parseInt(req.params.id);
        
        //PRIMER FILTRO, VALIDANDO QUE HAYA UN ID VALIDO
        if(!id || typeof id !== 'number'){
            return res.status(400).json({message: "ingresa un ID valido porfavor"});
        }
        
        //buscando usuario
        const user = users.find(user => user.id === id);
        
        //SEGUNDO FILTRO VALIDANDO QUE EXISTA UN USUARIO CON ESE ID
        if(!user){
            return res.status(404).json({message: `no se ha encontrado ningun usuario con id ${id}`});
        }
        
        return res.status(200).json({user: user});
    }
    
    catch(e){
        return res.status(500).json({message: "server internal error"});
    }
}