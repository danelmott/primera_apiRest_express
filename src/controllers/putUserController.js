import { users } from "../db.js";

export default function putUserController(req,res){
    try{
        const id = parseInt(req.params.id);
        const { nombre, edad } = req.body;
        
        //primer filtro validando que el id sea valido
        if(!id || typeof id !== 'number'){
            return res.status(400).json({message: "ingresa un id valido"});
        }
        
        //segundo filtro verficar que el id tiene un usuario
        const userIndex = users.findIndex(user => user.id === id);
        
        if(userIndex === -1){
            return res.status(404).json({message: "no se a encotrado ningun usuario con el id puesto, intentalo de nuevo"});
        }
        //actualizando los datos
        users[userIndex] = {
            ...users[userIndex],
            nombre: nombre || users[userIndex].nombre,
            edad: edad || users[userIndex].edad
        };
        
        return res.status(200).json({message: "Usuario actualizado", user: users[userIndex]});
    }
    catch(e){
        res.status(500).json({message: "server internal error"});
    }
}