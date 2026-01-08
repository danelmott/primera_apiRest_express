import { users } from "../db.js";

export default function deleteUserController(req,res){
    try {
        const id = parseInt(req.params.id);
        
        //primer filtro, validando que el id sea valido
        if(!id || typeof id !== 'number'){
            res.status(400).json({message: "ingresa un id valido"});
        }
        
        //buscando al usuario a eliminar en la lista
        const userDelete = users.findIndex(user => user.id === id);
        
        if(!userDelete){
            res.status(404).json({message: "usuario no encontrado"});
        }
        
        //eliminando usuario
        users.splice(userDelete,1);
        res.status(200).json({message: "usuario eliminado correctamente"});
    } 
    catch (error) {
        res.status(500).json({message: "server internal error"});
    }
}
