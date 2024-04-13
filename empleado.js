class Empleado {
    constructor(nombre, apellido, salario, cargo) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.salario = salario;
        this.cargo = cargo;
    }

    mostrarInformacion() {
        return `${this.nombre} ${this.apellido}, Salario: ${this.salario}, Cargo: ${this.cargo}`;
    }
}
