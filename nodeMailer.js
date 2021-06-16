//************************************thsi is th important project **********************************************/
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";


const nodemailer = require('nodemailer');
const port = 3005;

const transporter = nodemailer.createTransport({    
    service: "Gmail",
    auth: {
        user: "rnrgus5897@gmail.com",
        pass: "dkswoah589318"
    },
    host: "smtp.maill.com",
    host: "465"
});

const mailOption = {
    from: "martino <rnrgus5897@gmail.com>",
    to: "LG <rnrgus012345@daum.net>",
    subject: "this is the important emaill",
    html: "<h2>this is the important email because this is the most important project so i hope you receive this email very well</h2>" 
};

transporter.sendMail(mailOption, (err, infor) => {
    if(err){
        console.log(err);
    }else{
        console.log(infor);
    }

    transporter.close();
})













// const nodemailer = require('nodemailer');


// //npm i nodemailer 설치 

// const transporter = nodemailer.createTransport({
//     service: 'Gmail',
//     auth: {
//         user: 'rnrgus5897@gmail.com',
//         pass: 'dkswoah589318'
//     },
//     host: 'smtp.mail.com',
//     port: '465'
// });

// const mailOption = {
//     from: '유국현<rnrgus5897@gmail.com>',
//     to: '유국현<rnrgus012345@naver.com>',
//     subject: 'node.js로 보내는 메일',
//     html: '<h2>THIS IS THE IMPORTANT EMAIL, THIS IS MY PROJECT.. </h2>'

// };

// transporter.sendMail(mailOption , (err,info) => {
//     if(err){
//         console.log(err)

//     }else{
//         console.log(info);
//     }
//     transporter.close()
// });