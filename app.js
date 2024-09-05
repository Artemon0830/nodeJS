const fsPromises = require('fs/promises')
const path = require('path')
const foo= async ()=> {
    //створення шляху
    const baseFolder = path.join(__dirname, 'baseFolder')
    console.log(baseFolder)
    //створення папки
    await fsPromises.mkdir(baseFolder, {recursive: true})
    //створення папок
    for (let i = 1; i <= 5; i++) {
        const folder = path.join(baseFolder, `folder${i}`)
        console.log(folder)
        await fsPromises.mkdir(folder, {recursive: true})
        //створення файлів
        const file = path.join(folder, 'file.txt')
        console.log(file)
        await fsPromises.writeFile(file, 'Hello world\n')
        await fsPromises.appendFile(file, 'March 2024')
        //прочитання файлу
        const data = await fsPromises.readFile(file, 'utf-8')
        console.log(data)
        //інформація про папку
        const statDirectory1 = await fsPromises.stat(baseFolder)
        const statDirectory = await fsPromises.stat(folder)
        console.log('info for directory baseFolder', statDirectory1.isDirectory())
        console.log('info for directory folder', statDirectory.isDirectory())
        //iнформація про файл
        const statFile = await fsPromises.stat(file)
        console.log('info for file',statFile.isFile())
    }



}
void foo()