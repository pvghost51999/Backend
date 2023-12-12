const jwt=require('jsonwebtoken');


const generateToken=async(data)=>{
   const SECRET_KEY="Prashant_verma_key2432532"
    const username=data.username,phone_no=data.phone_no;
    const token= jwt.sign({username,phone_no},SECRET_KEY,{expiresIn:"1h"})


    return token

}


module.exports={generateToken};

