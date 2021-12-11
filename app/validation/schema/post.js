const { number } = require('./helper');
const joy =require('@hapi/joi');
const { text } = require('./helper');
const post={
    title: text("tittle",5,50),
    description : text("description", 10, 200)
}
module.exports ={
    addPost:joy.object({
        authorId:number("authorId",0),
        ...post
    }),
    updatePost:joy.object({
        postId:number("postId",0),
        ...post
    })
}
