class booking {
    constructor
    (
        id,
        nameHotel,
        arrivalDate,
        dapartureDate,
        passengers,
        typeRoom,
        name,
        mail,
        paymentStatus,
    )
    {
        this.id = id; 
        this.nameHotel = nameHotel;
        this.arrivalDate = arrivalDate;
        this.dapartureDate = dapartureDate;
        this.passengers = passengers;
        this.typeRoom = typeRoom;
        this.name = name;
        this.mail = mail;
        this.paymentStatus = paymentStatus;
    }

    getInfo() {
        return `Nombre: ${this.name},
        Correo Electrónico: ${this.email},
        Fecha de entrada: ${this.arrivalDate},
        Fecha de Salida: ${this.dapartureDate},
        Tipo de Habitación: ${this.TypeRoom},
        Numero de personas: ${this.passengers},
        estado de pago: ${this.paymentStatus}`;
    }
}

module.exports = booking; 