//DESTRUCTURING
//Sirve para desarmar una estructura de datos [array u objeto] y poder guardarlo en variables. Se desarma la estructura y se crean variables a partir del objeto. Las variables corresponden a las propiedades/elementos de la estructura y guardan sus valores.
//En objetos las variables deben tener el mismo nombre que las propiedades, no importa el orden
const persona = {
    nombre: 'Ada',
    apellido: 'Lovelace'
}
const {nombre, apellido} = persona

//Con arrays se debe respetar el orden de los elementos del array para asignar las variables
const frutas = ['🍎', '🍐']
const [manzana, pera] = frutas //si o si respetar el orden, caso contrario "pera" va a contener el emoji de manzana


//SPREAD OPERATOR
//Nos permite acceder a todos los elementos que contiene una estructura de datos (array u objeto). Esos elementos estan contenidos adentro pero no podemos trabajar con ellos directamente.
//La ventaja que tiene es que simplifica la sintaxis.
const frutas = ['🍎', '🍐', '🍊', '🍒', '🍓']

//Sintaxis
//Se puede asignar a un nuevo array, al cual podemos manipular sin modificar el array original. No son el mismo array. Se genera una copia de un array que no esta relacionada
const fruits = [...frutas]

//Si se quiere agregar un elemento. Se agregan elementos separados por "," luedo del spread
const frutasConUva = [...frutas, '🍇']

//Se puede hacer el spread la cantidad de veces que sea necesario. Por cada vez que se haga el spread se vuelven a esparcir todos los elementos del array original
const frutasMultiplicadas = [...frutas, ...frutas]

//Se pueden agregar elementos tambien antes del spread
const frutasEnAmbosLados = ['🍑', ...frutas, '🍌']

//Para concatenar dos arrays
const verduras = ['🥦', '🌽', '🧅']
const alimentos = [...frutas, ...verduras]

//Para insertar un elemento en el medio
const frutaInsertada = [...frutas.slice(0,3), '🥥', ...frutas.slice(3)]

//Tambien se pueden esparcir objetos. Permite realizar una copia. No son el mismo objeto
const persona = {
    nombre: 'Ada',
    apellido: 'Lovelace'
}

const clon = {...persona}

const infoExtra = {
    email: 'ada@gmail.com',
    nacionalidad: 'inglesa'
}

const adaLovelace = {...persona, ...infoExtra}

//Tambien se pueden agregar propiedades
const adaProfesion = {
    ...adaLovelace, 
    profesion: 'programadora'
}

//Si agregamos dos objetos que tienen la misma propiedad, prevalece la ultima. Ej 
const emailCorrecto = {
    email: 'adalovelace@gmail.com'
}
const usuarioActualizado = {
    ...adaLovelace,
    ...emailCorrecto
}


//Para esparcir objetos anidados
const persona = {
    nombreCompleto: {
        nombre: 'Ada',
        apellido: 'Lovelace'
    },
    infoExtra: {
        nacionalidad: 'inglesa',
        email: 'ada@gmail.com'
    }
}
//Al hacer el spread de persona creamos un objeto y esparcimos las propiedades. Esas propiedades a su vez tienen objetos, pero esos objetos no los esparcimos, por lo tanto siguen estando conectados al objeto original. Si los modificamos se modifica el objeto original
const clon = {...persona}

//Para evitar eso se hace una deep copy. Mismo caso para arrays anidados
const copiaPosta = {
    nombreCompleto: {...persona.nombreCompleto},
    infoExtra: {...persona.infoExtra}
}

//REST OPERATOR
//Lo utilizamos para obtener el resto de algo. Se utiliza en dos casos:
//-cuando estamos desestructurando 
//-cuando existe el rest parameter
const persona = {   
    nombre: 'Ada',
    apellido: 'Lovelace',
    nacionalidad: 'inglesa',
    email: 'ada@gmail.com'    
}
const {nombre, apellido, nacionalidad, email} = persona

//Si queremos nacionalidad e email en otro objeto 
const {nombre, apellido, ...infoExtra} = persona

//Para crear una copia de un objeto sacando propiedades
const {nacionalidad, ...ada} = persona//ada es un objeto que contiene todas las propiedades de persona menos nacionalidad
//Tambien se puede hacer con arrays. Como es resto solo sirve para los primeros elementos
const frutas = ['🍎', '🍐', '🍊', '🍒', '🍓']
const [manzana, ...otras] = frutas//Otras es un array que contiene todos los demas items menos la manzana
//Si solo quiero algunos elementos
const [apple,,,, frutilla] = frutas
const [apple,,naranja,, frutilla] = frutas

//REST PARAMETER
//Crea un array con los numeros
const sumarN = (...numeros) => console.log(numeros)
sumarN(1, 2, 5, 6, 82, 33)

//Podemos esparcir un array dentro de un objeto. Las propiedades van a ser los indices.
//NO SE PUEDE ESPARCIR UN OBJETO A UN ARRAY
const fruits = {...frutas}

