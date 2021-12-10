const joy =require('@hapi/joi');
const { validateErrorResponse } = require('../helper/errorResponse');
const schema = require("./schema/post")

exports.addPost=(req,res,next)=>{
    console.log(req.body)
        const validation =schema.addPost.validate(req.body)
        validateErrorResponse(validation,res,next)
       
    }