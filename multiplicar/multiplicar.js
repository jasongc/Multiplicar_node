const fs = require("fs");

let listarArchivo = (base, limite) => {

    for (let i = 1; i <= limite; i++) {
        let resul = base * i;
        console.log(`${base} * ${i} = ${resul}`);
    }
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            let resul = base * i;
            data += (`${base} * ${i} = ${resul}\n`);
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {

            if (err)
                reject(err)
            else
                resolve(`tablas/tabla-${base}.txt`);

        })
    })
}

module.exports = {
    crearArchivo,
    listarArchivo
}