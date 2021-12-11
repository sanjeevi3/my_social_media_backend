const { serverErrorResponse } = require("../helper/errorResponse")
const { sendMail } = require("../helper/sendMessage")
const model = require("../model/post")

/* 
     this function call add post modal with callback function the error is true call serverErrorResponse
     otherwise call other user contact modal if its return err send server error response other wise send mail
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
                model.otherUserContact(req.body.authorId,
                    (err,otherUserContactData)=>{
                        if(err){
                            serverErrorResponse(res)
                        }
                        else{
                            const sendData={
                                email:otherUserContactData,
                                subject:"New post was added",
                                text: `${data[0].name} add new post`,
                                html: `<table style="background-color:black; color: white;" width="100%"><tbody><tr><td>Title</td><td>${req.body.title}</td></tr><tr> <td>description</td>${req.body.description}<td></td></tr><tr> <td>Author</td><td>${data[0].name}</td></tr><tbody><table>`
                            }
                            sendMail(sendData,
                                err=>{
                                    
                                    if(err!=null){
                                        console.log("sanjai")
                                        res.status(200).json({
                                            message: "your post was successfully posted but error in send notification"
                                        })
                                    }else if(err==null){
                                        res.status(200).json({
                                            message: "your post was successfully posted"
                                        })
                                    }
                                }
                            )
                        }
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
