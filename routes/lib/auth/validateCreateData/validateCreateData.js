const {
    isEmail,
    isStrongPassword,
    isAlphanumeric,
    isAlpha,
} = require("validator");

function validateCreateData (req,res,next){
    const {firstName, lastName, userName, email,password} = req.body;
    let errObj = {};
    //check if first name has symbols or numbers
    if(!isAlpha(firstName)){
        errObj.firstName = "First Name cannot have special characters";
    };
    //check if last name has symbols or numbers
    if(!isAlpha(lastName)){
        errObj.lastName = "First Name cannot have special characters";
    };
    //check for special characters
    if(!isAlphanumeric(userName)){
        errObj.firstName = "UserName cannot have special characters";
    };
    //check password
    if(!isStrongPassword(password)){
        errObj.firstName = "Please enter a valid password";
    };
    //check email
    if(!isEmail(email)){
        errObj.firstName = "Please enter a valid email";
    };
    //check if its empty
    if(Object.keys(errObj).legnth > 0){
        return res.status(500).json({
            message: "Error",
            error: errObj,
        });
    }else{
        next();
    }
};

module.exports = {
    validateCreateData,
};