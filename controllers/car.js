



import Car from '../models/car.js';

const carControllers = {
    showCars: (req, res) => {
        const cars = Car.getCars();
        res.status(200).render('cars', {
            cars: cars,
            isAuthorised: req.cookies.token
        });
    },
    addCarForm: (req, res) => {
        res.status(200).render('addCar', { isAuthorised: req.cookies.token });
    },
    addCar: (req, res) => {
        const { model, price, url } = req.body;
        if (!model || !price || !url) {
            res.status(400).render('message', {
                title: 'No valid car',
                message: 'Please fill in all the fields',
                redirectPath: '/add-car-form'
            });
        } else {
            const newCar= new Car(model, price, url);
            newCar.addCar();
            res.status(302).redirect('/');
        }
    }
};

export default carControllers;
