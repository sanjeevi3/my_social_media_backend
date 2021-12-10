const joy =require('@hapi/joi');
const { text } = require('./helper');
module.exports ={
    addPost:joy.object({
        title: text("tittle",5,50),
        description : text("description", 10, 200)
    })
}
