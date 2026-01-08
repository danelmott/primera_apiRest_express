import { users } from "../db.js";


export default function createUserController(req, res){
    try {
        const {id,nombre, edad} = req.body;
        
        //primer filtro,validando que el body tenga los datos correctos
        if(!id || !nombre || !edad){
            return res.status(400).json({message: "body invalido, asegurate que tu body contenga id nombre y edad validos"});
        }
        
        //segundo filtro, revisando que el id a agregar no este repetido
        const user = users.find(user => user.id === id);
        
        if(user){
            return res.status(409).json({message: "ya existe un usuario con el id que intentas registrar, intenta nuevamente"});
        }
        
        //creando el nuevo usuario y agregandolo a la db
        const newUser = {
            id: id,
            nombre: nombre,
            edad: edad
        }
        
        users.push(newUser);
        
        res.status(201).json({message: "usuario creado correctamente", user: newUser});
    
    } 
    catch (error) {
        res.status(500).json({message: "server internal error"});
    }
}