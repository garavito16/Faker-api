const { faker } = require('@faker-js/faker');

class Empresa {

    constructor () {
        this.carnet_de_identidad = faker.datatype.number();
        this.nombre = faker.company.companyName();
        this.direccion = faker.address.streetAddress();
        this.calle = faker.address.streetName();
        this.ciudad = faker.address.city();
        this.estado = faker.address.state();
        this.codigo_postal = faker.address.zipCode();
        this.pais = faker.address.country();
    }

}

module.exports = Empresa;