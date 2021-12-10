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
    exports.required=(field)=>{
        return joy.string().required().empty().messages({
            "any.required" :`Enter the ${field}.`,
            "string.empty"  :`${field} is required.`,
            "string.base":`${field} is must be string`
        })
    }
    exports.email=()=>{
        const field="email"
        return joy.string().required().empty().email().messages({
            "any.required" :`Enter the ${field}.`,
            "string.empty"  :`${field} is required.`,
            "string.base":`${field} is must be string`,
            "string.email":`enter valid ${field}`
        })
        } 