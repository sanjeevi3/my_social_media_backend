const joy =require('@hapi/joi');
const { validateErrorResponse } = require('../helper/errorResponse');
const schema = require("./schema/post")

exports.addPost=(req,res,next)=>{
        const validation =schema.addPost.validate(req.body)
        validateErrorResponse(validation,res,next)
       
    }

    exports.updatePost=(req,res,next)=>{
        const validation =schema.updatePost.validate(req.body)
        validateErrorResponse(validation,res,next)
       
    }