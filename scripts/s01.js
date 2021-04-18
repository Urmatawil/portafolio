const texto = "Cras nibh justo, fringilla id lorem nec, commodo ultrices justo.";

console.log(texto.match(/a/g))

/*-------------------------*/
//desconstructuring

const animal = {
    raza: 'lobo',
    color:'blanco',
    ojos: 'azul',
    edad: 20
}

function detalles({raza,color,ojos}){
    return `Detalles animal ${raza}, color ${color}, ojos ${ojos}`
}

let detallesAnimal = detalles(animal);

console.log(detallesAnimal)

function detalles2(){
    const {raza, color, ojos} = animal;
    return `Detalles 2 animal ${raza}, color ${color}, ojos ${ojos}`
}

console.log(detalles2(animal));

function edadAnimal(str,raza,edad){
    const edadStr = edad > 5 ? 'viejo' : 'joven';
    return `${str[0]} ${raza} ${edadStr} tiene ${edad} años`;
}

const detalles3 = edadAnimal`Este${animal.raza}${animal.edad}`

console.log(detalles3)
/*-----------------------------------------------*/
//loops, encontrar el total, el mayor y agregarle 10%
const ordenar = [100, 25, 325, 111, 800, 42, 5]
//reduce para sumar todos los valores del arreglo
const total = ordenar.reduce((acumulador, datoActual) => acumulador + datoActual)
//recorremos el arreglo y le agregamos el 10%
const impuesto = ordenar.map(valor => valor * 1.1)
//buscamos los numeros mayores a 100
const mayor = ordenar.filter(valor => valor > 100);

console.table(ordenar)
console.log(total)
console.log(impuesto)
console.log(mayor)

/*--------------------------------------------------------------*/
//Promesas buenas practicas

const sumaRandomAsincrona = async() => {

    const primera = await random();
    const segunda = await random();
    const tercera = await random();

    console.log(`Resultado ${primera + segunda + tercera}`);
}