class Personal{
    constructor(name, position, Id, payroll){
        this.name = name;
        this.position = position;
        this.Id = Id;
        this.payroll = payroll;
    }
}

class UI {
    addPersonal(personal){
        const personalList = document.getElementById('personal-list');
        const element = document.createElement('div');
        element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Nombre</strong>: ${personal.name}
                    <strong>Cargo</strong>: ${personal.position}
                    <strong>ID</strong>: ${personal.Id}
                    <strong>Salario</strong>: ${personal.payroll}
                    <a href="#" class="btn btn-danger" name="delete">Eliminar</a>
                </div>
            </div>
        
        `;
        personalList.appendChild(element);
    }

    resetForm(){
        document.getElementById('personal-form').reset();
    }

    deletePersonal(element){
        if(element.name === 'delete') {
            element.parentElement.parentElement.parentElement.remove();
            this.showMessage('Personal eliminado correctamente', 'info')
        }
    }

    showMessage(message, cssClass){
        const div = document.createElement('div');
        div.className = `alert alert-${cssClass} mt-2`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const app = document.querySelector('#App');
        container.insertBefore(div, app);
        setTimeout(function (){
            document.querySelector('.alert').remove();
        }, 3000)
    }
}

document.getElementById('personal-form')
    .addEventListener('submit', function (e) {
        const name = document.getElementById('name').value;
        const position = document.getElementById('position').value;
        const Id = document.getElementById('Id').value;
        const payroll = document.getElementById('payroll').value;

        const personal = new Personal(name, position, Id, payroll);

        const ui = new UI();

        if(name === '' || position === '' || Id === '' || payroll === '') {
            return ui.showMessage('Completa los campos faltantes', 'danger');
        }
        ui.addPersonal(personal)
        ui.resetForm();
        ui.showMessage('Personal agregado correctamente', 'success');

        e.preventDefault();

        
});

document.getElementById('personal-list').addEventListener('click', function(e) {
    const ui = new UI();
    ui.deletePersonal(e.target);
});
