const { serverErrorResponse } = require("../helper/errorResponse")
const model = require("../model/post")

/* 
     this function call add post modal with callback function the error is true call serverErrorResponse
     otherwise send response with added post id
*/
exports.addPost=(req,res)=>{
    //console.log(req);
    model.addPost(
        [
            req.body.authorId,
            req.body.title,
            req.body.description
        ],
        (err,data)=>{
            if(err){
                console.log(err)
                serverErrorResponse(res);
            }
            else if(data[0].invalidUser){
                res.status(400).json({
                    message: "invalid author id",
                })
            }
            else{
                res.status(200).json({
                    message: "your post was successfully posted",
                   // post_id:data.id
                   email:data
                })
            }
        }
    )
}


/* 
     this function call delete post modal with callback function the error is true call serverErrorResponse 
      after check post id is valid if its not valid send logical error response otherwise send success response message
*/
exports.deletePost=(req,res)=>{
    //console.log(req);
    model.deletePost(
        req.params.postId,
        (err,data)=>{
            if(err){
                console.log(err)
                serverErrorResponse(res);
            }
            else if(data.result){
                res.status(200).json({
                    message: "post was successfully deleted"
                })
            }
            else{
                res.status(400).json({
                    message: "invalid post id",
                })
            }
        }
    )
}


/* 
     this function call update post modal with callback function the error is true call serverErrorResponse 
      after check post id is valid if its not valid send logical error response otherwise send success response message*/
exports.updatePost=(req,res)=>{
    //console.log(req);
    model.updatePost(
        [
            req.body.postId,
            req.body.title,
            req.body.description
        ],
        (err,data)=>{
            if(err){
                console.log(err)
                serverErrorResponse(res);
            }
            else if(data.result){
                res.status(200).json({
                    message: "post was successfully updated"
                })
            }
            else{
                res.status(400).json({
                    message: "invalid post id",
                })
            }
        }
    )
}


/* 
     this function call get posts modal( its return all post or specific author data) 
     with callback function the error is true call serverErrorResponse after check author id is invalid and check length of array = 0
     return error response otherwise send response with added post id
*/
exports.getPosts=(req,res)=>{
    //console.log(req);
    model.getPosts(
        req.params.authorId?req.params.authorId:0,
        (err,data)=>{
            if(err){
                console.log(err)
                serverErrorResponse(res);
            }
            else if(data.length==0){
                res.status(400).json({
                    message: "no posts are not available.",
                })
            }
            else if(data[0].invalidAuthor){
                res.status(400).json({
                    message: "invalid author id",
                })
            }
           
            else{
                res.status(200).json({
                    posts:data
                })
                
            }
        }
    )
}
