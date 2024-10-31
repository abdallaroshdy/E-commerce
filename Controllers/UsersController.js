const responseMSG = require('../Utilities/ResponseMSG')
const errorHandler = require('../Utilities/ErrorHandler')

const regist =  (req,res)=>{

    
    try{
        res.status(200).json({
            status : responseMSG.SUCCESS,
            data : "Register successfull"
        });
    }catch(err){
        errorHandler(res,err)
    }

};

const login =  (req,res)=>{

    
    try{
        res.status(200).json({
            status : responseMSG.SUCCESS,
            data : "You are Login successfully"
        });
    }catch(err){
        errorHandler(res,err)
    }

};


module.exports = {
    regist ,
    login
}