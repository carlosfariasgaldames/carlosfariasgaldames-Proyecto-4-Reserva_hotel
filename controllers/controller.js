const Booking = require("../models/model");
const dayjs = requiere ("dayjs");
const { v4: uuidv4} = requiere("uuid");



let booking = [];  

exports.createBooking = async(req,res) => {
        const {nameHotel ,arrivalDate, departureDate, typeRoom, passengers, name, mail, paymentStatus} =req.body;

        
        console.log("Datos recibidos:", req.body);

        if (!arrivalDate || !departureDate) {
            return res. status (400).json ({

                msg: "Falta fecha de llegada o de salida.",
                msg: "Faltan fecha de llegada o de salida",
        
            })
        }

        const parsedArrivalDate = dayjs(arrivalDate).format("DD/MM/YYYY");
        
        const parsedDepartureDate = dayjs(departureDate).format("DD/MM/YYYY");

            console.log("Fecha de llegada:", parsedArrivalDate);
            
            console.log("Fecha de salida:", parsedDepartureDate);

        const newbooking = new booking (

          uuidv4 (),
            nameHotel,
            parsedArrivalDate,
            parsedDepartureDate,
            passengers,
            typeRoom,
            name,
            mail,
            paymentStatus,

         );

            booking.push(newBooking);
            console.log("reservas:",booking);

            res.json({
                msg:"reserva creada con exito.",
                data:newBooking,
            });
    };

    exports.getBooking =async (req, res) => {

    return res.json({
        msg:"Reservas",
        data :booking
    });
};


exports.getBookingById = async (req, res) => {
    const bookingId = req.params.id;
    const booking = booking.find(booking => booking.id === bookingId);

    if (!booking) {

        return res.status (404).json({ msg: "Reserva no encontrada"})
    }

    return res.json({
        msg:'reserva ontenida con éxito.',
        data: booking
    })
}

exports.upDateBookingById = async (req,res) => {
    const bookingId = req.params.id;
    const bookingIndex = booking.findIndex(booking => booking.id === bookingId);

    if (bookingIndex === -1){
        return res.status (404).json({msg: " Reserva no encontrada."})
        
    }

    booking[bookingIndex] = {...booking[bookingIndex], ...req.body}

    return res.json({
        msg: 'Reserva modificada con éxito.',
        data: booking[bookingIndex]
    })
}

exports.deleteBookingById = async (req, res) => {

    const bookingId = req.params.id;
    const bookingIndex = booking. findIndex (booking => booking.id === bookingId);

    if (bookingIndex === -1){
        return res.status(404).json({ msg:"Reserva no encontrada."})
    }

    booking.splice(bookingIndex,1)

    return res.json({
        msg: 'Reserva eliminada con éxito.',
    })
};


exports.getbookingInfo = async (req, res) => {
    const { nameHotel, arrivalDate, departureDate, typeRoom, passengers, paymentStatus} = req.query;

    if (typeRoom) {
        const bookingFiltered = booking.filter (
            (booking) => booking.typeRoom ===typeRoom
        );

        if (bookingFiltered.lenght === o){
            return res
            .status(404)
            .json ({ msg: " no se encontraron esas habitaciones"});
        }

        return res.json ({
            msg: " tipo de habitaciones",
            data: bookingFiltered,
        });

    } else if (arrivalDate && departureDate){
        const parsedArrivalDate = dayjs (arrivalDate).format("DD/MMYYY");
        const parsedDepartureDate = dayjs(departureDate). format ("DD/MM/YYYY");


        const bookingFiltered =booking.filter(
            (booking) =>
                booking.arrivalDate.isBetween(
                    parsedArrivalDate,
                    parsedDepartureDate
                ) === true
        );

        if (usersFiltered.lenght === 0) {
            return res.status (404).json ({ msg: "No se encontraron reservas"});
        }

        return res.json({
            msg: "Reservas",
            data:bookingFiltered,
        });


    } else {
        return res.json ({
            msg: "Reservas",
            data:booking,
        });
    }
};









