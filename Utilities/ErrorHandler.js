const responseMSG = require('./ResponseMSG') 

const errorHandler = (res,err)=>{

    let error = err

    // you should complete 
    // this function here 

    res.status(400).json({
        status : responseMSG.FAIL,
        data : error
    })
}

module.exports = errorHandler;