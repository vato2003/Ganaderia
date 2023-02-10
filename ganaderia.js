class Ganaderia {
    constructor (Alimento,Estado,peso){
        this._Alimento=Alimento;
        this._Estado = Estado;
        this._Peso = peso;
    }
}

const vobina = new Ganaderia('pasto','Bien',350);

console.log(vobina._Alimento);
console.log(vobina._Estado);
console.log(vobina._Peso);

console.log();

//Clase Empleado
class Empleado {
    nombre;
    apellidos;
    #correo;
    #salario;
    constructor(name,lastname,email,pay){
        this.nombre = name;
        this.apellidos = lastname;
        this.#correo = email;
        this.#salario = pay; 
    }
}

//Clase Almacen
class Almacen{
    Secciones
    Materia_prima
    #id_Almacen
    #Existencias
    #Productos
    constructor(Seccion,Materia,Almacen,Existencia,Producto){
        this.Secciones = Seccion;
        this.Materia_prima = Materia;
        this.#id_Almacen = Almacen;
        this.#Existencias = Existencia;
        this.#Productos = Producto;
    }
}
    
