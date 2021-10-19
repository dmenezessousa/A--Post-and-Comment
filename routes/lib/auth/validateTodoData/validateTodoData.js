const { isAlpha } = require("validator");

function validateTodo (req,res,next){
    const {
        todo,
    }= req.body;

        let errObj = {};

        //check if todo has only letters
        if(!isAlpha(todo)){
            errObj.todo = "Alphabet ONLY!";
        }
        
        //check if any field is empty
        if(Object.keys(errObj).length > 0){
            return res.status(500).json({
                message: "error", 
                error: errObj,
            });
        }else{
            next();
        }
}

module.exports = {
    validateTodo,
}