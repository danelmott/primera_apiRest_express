
export default function  methodError(allowedMethods){
    
    //convertimos el array a string(si pasan un array, si no es el caso lo dejamos como esta)
    const allowMethodsString = Array.isArray(allowedMethods) ? 
    allowedMethods.join(', '):
    allowedMethods
    
    
    //retornando funcion la cual retornara la respuesta del 405
    // si el metodo no es el correcto
    return (req, res) =>{
        //1 establecemos el header obligatorio
        res.setHeader("allow", allowMethodsString);
        
        
        //2 enviamos respuestas de error al usuario si los metodos no son correctos
        res.status(405).json({
            status:405,
            error: "method not allowed",
            path: req.originalUrl,
            method: req.method,
            allowedMethods: allowedMethods
        })
    }
}