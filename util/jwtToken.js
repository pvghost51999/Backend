const jwt=require('jsonwebtoken');


const generateToken=async(data)=>{
   
    const username=data.username,phone_no=data.phone_no;
    const token= jwt.sign({username,phone_no},process.env.SECRET_KEY,{expiresIn:"1h"})


    return token

}


module.exports={generateToken};

