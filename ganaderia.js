class Personal{
    constructor(name, position, Id, payroll){
        this.name = name;
        this.position = position;
        this.Id = Id;
        this.payroll = payroll;
    }
}






class UI {
    addPersonal(empleado){
        const empleadoList = document.getElementById('personal-list');
        const element = document.createElement('div');
        element.innerHTML = `
            <div class="card text.center mb-4">
                 <div class="card-body">
                        <strong>Personal</strong>: ${empleado.name}
                        <strong>Position</strong>: ${empleado.position}
                        <strong>Id</strong>: ${empleado.Id}
                 </div>

            </div>

        `;
        empleadoList.appendChild(element);
    
    }


    deletePersonal(){

    }

    showMessage(){

    }
}


//eventos de accion 

document.getElementById('personal-form')
    .addEventListener('submit', function(e){
    const name = document.getElementById('name').value;
    const position = document.getElementById('position').value;
    const Id = document.getElementById('Id').value;

    const empleado = new Personal(name,position, Id);

    const ui = new UI();
    ui.addPersonal(empleado);
    e.preventDefault();



});

    
