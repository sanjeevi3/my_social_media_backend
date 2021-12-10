const { serverErrorResponse } = require("../helper/errorResponse")
const model = require("../model/post")
exports.addPost=(req,res)=>{
    //console.log(req);
    model.addPost(
        [
            req.headers.id,
            req.body.title,
            req.body.description
        ],
        (err,data)=>{
            if(err){
                console.log(err)
                serverErrorResponse(res);
            }
            else{
                res.status(200).json({
                    message: "your post was successfully posted",
                    post_id:data.id
                })
            }
        }
    )
}