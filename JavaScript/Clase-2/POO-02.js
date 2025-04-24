//Creamos la clase Empleado que sera la clase padre
class Empleado {
  constructor(nombre, sueldo) {
    this.nombre = nombre;
    this.sueldo = sueldo;
  }

  obtenerDetalles() {
    return `Nombre: ${this.nombre}, Sueldo: ${this.sueldo}`;
  }
}

//Creamos una clase hija
class Gerente extends Empleado {
  constructor(nombre, sueldo, departamento) {
    super(nombre, sueldo); // Llamamos al constructor de la clase padre
    this.departamento = departamento; // Propiedad específica de Gerente
  }

  // Sobreescribimos el método obtenerDetalles de la clase padre
  obtenerDetalles() {
    return `Gerente: ${super.obtenerDetalles()}, Departamento: ${
      this.departamento
    }`; // Llamamos al método de la clase padre
  }
}

//Creamos una instancia de la clase Gerente
const gerente1 = new Gerente("Juan", 5000, "Ventas");
console.log(gerente1.obtenerDetalles()); // Gerente: Nombre: Juan, Sueldo: 5000, Departamento: Ventas
//Creamos una instancia de la clase Empleado
const empleado1 = new Empleado("Ana", 3000);
console.log(empleado1.obtenerDetalles()); // Nombre: Ana, Sueldo: 3000
