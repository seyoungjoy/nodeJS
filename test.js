const nodemailer = require('nodemailer');
//이렇게 설치한 nodemailer를 불러올 수 있음. 이거를 자유롭게 사용가능.
const email = {
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "a5f9332e7bc36e",
        pass: "713d39aac34e61"
    }
}

const send = async(option) => {
    nodemailer.createTransport(email).sendMail(option, (error, info) => {
        if(error) {
            console.log(error);
        } else{
            console.log(info);
            return info.response;
        }
    })
}

let email_data ={
    from :'diddpwl80@gmail.com',
    to:'diddpwl80@gmail.com',
    subject:'테스트 메일 입니다.',
    text:'nodejs 한시간만에 끝내보자.'
}

send(email_data);
