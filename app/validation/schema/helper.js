const joy =require('@hapi/joi');
exports.text=(field,min,max)=>{


    return joy.string().required().empty().min(min).max(max).messages({
        "any.required" :`Enter the ${field}.`,
        "string.empty"  :`${field} is required.`,
        "string.base":`${field} is must be string`,
        "string.min":`minimum length is ${min}.`,
        "string.max":`maximum length is ${max}.`
    })
    }
        exports.number=(field,min,max)=>{
            return joy.number().required().empty().min(min).messages({
                "any.required" :`Enter the ${field}.`,
                "number.empty"  :`${field} is required.`,
                "number.base":`${field} is must be number`,
                "string.minLength":`minimum length is ${ min}.`
            })
        }