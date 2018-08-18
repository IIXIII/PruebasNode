let fs = require('fs')
const colors = require('colors')

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject("No es un numero");
            return
        }
        let data = ''
        let name = `tablas/tabla-${base}.txt`
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i} \n`;
        }
        fs.writeFile(name, data, (err) => {
            if (err) reject(err);
            else resolve(name)
        });
    })
}

let listar = (base, limite) => {
    console.log("===========================".red);
    console.log(`=====TABLA DEL ${base}=====`.red);
    console.log("===========================".red);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i} \n`)
    }
}

module.exports = {
    crearArchivo,
    listar
}