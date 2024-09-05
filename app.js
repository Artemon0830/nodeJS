
// const {saveHello}=require('./helper.js')
// // saveHello();
//
// //Global variables
// saveHello();
//path module
// const path=require('path');
// const joinedPath =path.join(__dirname,'helper.js');
// console.log(joinedPath);
// const normalizedPath=path.normalize('/////__dirname//////helper.js//////');
// console.log(normalizedPath);
//os module
// const os=require('os');
// console.log(os.arch());
// console.log(os.cpus())
// const http = require('node:http');
// const server= http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-Type':'application/json'});
//     res.end(JSON.stringify({data:'Hello World'}));
// })
// server.listen(3000);
// const users=[{
//     name:'John Doe1',
//     age:25,
//     isStudent:true
// },
//     {
//         name:'Jane Doe2',
//         age:22,
//         isStudent:false
//     },
//     {
//         name:'Jane Doe3',
//         age:20,
//         isStudent:false
//     },
//     {
//         name:'Jane Doe4',
//         age:16,
//         isStudent:false
//     },{
//         name:'Jane Doe5',
//         age:27,
//         isStudent:true
//     }];
// const express =require('express');
// const app = express();
// app.use(express.json());
// app.use(express.urlencoded({extended:true}));
// app.get('/users',(req, res)=>{
//     res.json(users)
// })
// app.post('/users',(req, res)=>{
//  const user = req.body;
//  users.push(user);
//  res.status(201).json({massage:'User created successfully'});
// })
// app.put('/users/:id',(req, res)=>{
//     console.log(req.params);
// })
// const port = 3100;
//
// app.listen(port,()=>{
//     console.log(`Server is running on port ${port}`);
// })
const foo= async ()=> {
    //шлях до файлу
    const path = require('path')
    const filePath = path.join(__dirname, 'temp', 'main.txt')
    const filePath1 = path.join(__dirname, 'main1.txt')
    //створення файлу
    const fsPromises = require('fs/promises')
    //прочитання файлу
    await fsPromises.writeFile(filePath, 'Hello World\n')
    await fsPromises.writeFile(filePath1, 'Hello World1\n')
    const data = await fsPromises.readFile(filePath1, 'utf-8')
    const data1 = await fsPromises.readFile(filePath, 'utf-8')
    console.log(data, data1)
    //додаванян даних в файл
    await fsPromises.appendFile(filePath, 'March 2024')
    await fsPromises.appendFile(filePath1, 'March 2024@')
    //створення папки

    // await fsPromises.mkdir(tempDir, {recursive: true});
    // await fsPromises.mkdir(path.join(__dirname,'temp','test1'),{recursive:true})
    // await fsPromises.mkdir(path.join(__dirname,'temp','test2'),{recursive:true})
    // await fsPromises.mkdir(path.join(__dirname,'temp','test3'),{recursive:true})
    // await fsPromises.mkdir(path.join(__dirname,'temp','test4'),{recursive:true})

    //створення шляху
    const baseFolder = path.join(__dirname, 'baseFolder')
    //створення папки
    await fsPromises.mkdir(baseFolder, {recursive: true})
    //створення папок
    for (let i = 1; i <= 5; i++) {
        const folder = path.join(baseFolder, `folder${i}`)
        await fsPromises.mkdir(folder, {recursive: true})
    //створення файлів
        const file = path.join(folder, 'file.txt')
        await fsPromises.writeFile(file, 'Hello world\n')
        await fsPromises.appendFile(file, 'March 2024')
    }

}
void foo()