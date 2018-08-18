const optListar = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10,
    }
}

const optCrear = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10,
    }
}


const argv = require('yargs')
    .command('listar', "Impreme multiplicar", optListar)
    .command('crear', "Crea archivo multiplicar", optCrear)
    .help()
    .argv

module.exports = {
    argv
}