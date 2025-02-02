const fsPromises = require('fs/promises')
const path = require('path')
const foo= async ()=> {
    //створення шляху
    const baseFolder = path.join(__dirname, 'baseFolder')
    console.log(baseFolder)
    //створення папок
    for (let i = 1; i <= 5; i++) {
        const folder = path.join(baseFolder, `folder${i}`)
        console.log(folder)
        await fsPromises.mkdir(folder, {recursive: true})
        //створення файлів
        for(let j=1;j<=5;j++) {
            const file = path.join(folder, `file${j}.txt`)
            console.log(file)
            await fsPromises.writeFile(file, 'Hello world\n')
            await fsPromises.appendFile(file, 'March 2024')
            //прочитання файлу
            const data = await fsPromises.readFile(file, 'utf-8')
            console.log(data)
        }

    }
    //інформація про папку
    const statDirectory1 = await fsPromises.stat(baseFolder)
    const statDirectory = await fsPromises.stat(path.join(baseFolder, 'folder1'))
    console.log('info for directory baseFolder', statDirectory1.isDirectory())
    console.log('info for directory folder', statDirectory.isDirectory())
    //iнформація про файл
   const filePath = path.join(baseFolder, 'folder1', 'file1.txt');
   const statFile = await fsPromises.stat(filePath)
    console.log('info for file', statFile.isFile())


}
void foo()