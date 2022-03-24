const { faker } = require('@faker-js/faker');

class Usuario {

    constructor () {
        this.carnet_de_identidad = faker.datatype.number();
        this.nombres = faker.name.firstName();
        this.apellidos = faker.name.lastName();
        this.numero_de_telefono = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.contrasena = faker.internet.password();
    }

}

module.exports = Usuario;