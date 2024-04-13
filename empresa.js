class Empresa {
    constructor() {
        this.listaEmpleados = [];
    }

    agregarEmpleado(empleado) {
        this.listaEmpleados.push(empleado);
    }

    mostrarEmpleados() {
        const listaEmpleadosElement = document.getElementById('listaEmpleados');
        listaEmpleadosElement.innerHTML = '';

        this.listaEmpleados.forEach(empleado => {
            const li = document.createElement('li');
            li.textContent = empleado.mostrarInformacion();
            listaEmpleadosElement.appendChild(li);
        });
    }

    calcularTotalSalarios() {
        let totalSalarios = 0;
        this.listaEmpleados.forEach(empleado => {
            totalSalarios += empleado.salario;
        });
        document.getElementById('totalSalarios').textContent = totalSalarios;
    }
}

const empresa = new Empresa();

function agregarEmpleado() {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const salario = parseFloat(document.getElementById('salario').value);
    const cargo = document.getElementById('cargo').value;

    const empleado = new Empleado(nombre, apellido, salario, cargo);
    empresa.agregarEmpleado(empleado);
    empresa.mostrarEmpleados();
    empresa.calcularTotalSalarios();
}
