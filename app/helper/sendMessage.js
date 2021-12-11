require('dotenv').config();
const nodemailer =require('nodemailer');
const envData=process.env;

/* 
this function do send message to email
*/
exports.sendMail=(data,callback)=>{
    console.log(envData.email)
    console.log(envData.email)
    const transporter = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:envData.email,
            pass:envData.email_password
        }
    })
    let toEmails="";
    data.email.forEach((toEmail,index)=>{
        if(index ==0) toEmails+=toEmail.email
        else toEmails+=","+toEmail.email
    })
    console.log(toEmails)
        let mailData = {
            from:envData.email,
            to:toEmails,
            text:data.text,
            subject:data.subject,
            html: data.html
        }
          transporter.sendMail(mailData,(err,sendMailData)=>{
            console.log("error",err)
            
            if(err){
                console.log("err")
                callback(err)
            }
            else{
                console.log("sucess")
               callback(null)
            }
            
        });
        
   
   
}