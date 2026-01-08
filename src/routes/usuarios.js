import express from 'express';
import methodError from '../middlewares/methodError.js';
import getAllController from '../controllers/getAllController.js';
import getUserController from '../controllers/getUserController.js';
import createUserController from '../controllers/createUserController.js';
import deleteUserController from '../controllers/deleteUserController.js';
import putUserController from '../controllers/putUserController.js';

//creando router de express
const router = express.Router();


//rutas estaticas '/'

router.route('/')
    .get(getAllController)
    .post(createUserController)
    .all(methodError(['GET' , 'POST'])); // MIDDLEWARE QUE SE EJECUTA SI EL METODO USADO EN LA RUTA ES DIFERENTE A LOS DE EL ARRAY





//RUTAS DINAMICAS '/:id'
router.route('/:id')
    .get(getUserController)
    .put(putUserController)
    .delete(deleteUserController)
    .all(methodError(['GET', 'PUT', 'DELETE'])) //MIDDLEWARE QUE SE EJECUTA SI EL METODO USADO EN ESA RUTA ES DIFERENTE A LOS DE EL ARRAY


export default router