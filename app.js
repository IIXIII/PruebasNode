const { argv } = require('./config/yargs')
let { crearArchivo, listar } = require('./multiplicar/multiplicar')
const colors = require('colors')


let comando = argv._[0]
    // console.log("ARGV 1 ===>>", comando)

switch (comando) {
    case "listar":
        listar(argv.base, argv.limite)
        break;
    case "crear":
        crearArchivo(argv.base, argv.limite).then(
            archivo => console.log("Se creo el archivo ", colors.rainbow(`${archivo}`))
        ).catch(err => console.log("Error", err))
        break;
    default:
        break;
}



// let argv2 = process.argv
// let param = argv[2]
// let base = param.split("=")[1]
// console.log("PROCESSS ===>>", base)