//filesystem
const filesystem = require('fs');
/* filesystem.writeFile("noddy","Hello i'm Arun",function(err,result){
    console.log(err);
}); */ // to create a file.
/* filesystem.unlink("filename",callbackfunc); remove
.mkdir() to create a directory
.remdir() to remove */

/* const operatingSystem = require('os');
//console.log(operatingSystem.platform()); //to print the operating system
console.log(operatingSystem.arch());  *///to print the bits

/* const server1 = require('http');
const importModule = require('./main');
server1.createServer(function(req,res)  {
    //console.log(req.headers);
    //res.write("the current date is"+importModule.myDateTime());
    if(req.url === '/') {
        res.end("Hello buddy!"); // '/' means root url.
    }
    else {
        res.end("Hello buddy!it not root url");
    }
    
}).listen(3000); */

/* const file = require('fs');
file.writeFile("main.html",`exports.myDateTime = function () {
    return Date();
}`,function (err, result) {
    console.log(err);
}); */

//express

const express = require('express');

//initializing
const noddy = express();

noddy.use(express.json());

/* noddy.get('/', function (req, res) {
    return res.json({1:hello});
}); */

noddy.get('/b/:id', function (req, res) {
    const getStudent = [
        {
            id:1,
            student:"Arun"
        },
        {
            id:2,
            student:"Arun"
        },
        {
            id:3,
            student:"Arun"
        },
        {
            student:"Arun"
        },
        {
            id:4,
            student:"Arun"
        }
    ];
    const getStudentId = req.params.id;
    const realId = getStudent.filter((stu) => stu.id === parseInt(getStudentId) );
    return res.json({data:realId});
})

noddy.listen(3000,() => {
    console.log("Server is running");
})

