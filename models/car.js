import { v4 as newId } from 'uuid';

const cars = [
    {
        id: newId(),
        model: 'Tesla',
        price: '$74,990 20',
        url: 'https://static-assets.tesla.com/configurator/compositor?&bkba_opt=1&view=STUD_3QTR&size=1400&model=m3&options=$APBS,$DV4W,$IPW1,$PPMR,$PRM31,$SC04,$MDL3,$W41B,$MT328,$CPF1,$RSF1,$CW03&crop=1400,850,300,130&'
    },
    {
        id: newId(),
        model: 'BMW',
        price: '$56,790 ',
        url: 'https://www.bmw.be/content/dam/bmw/common/all-models/x-series/x6/2023/navigation/bmw-x-series-x6-m60i-modelfinder.png.asset.1675183272938.png'
    },
    {
        id: newId(),
        model: 'Lamborghini',
        price: '$90,676',
        url: 'https://purepng.com/public/uploads/large/purepng.com-white-lamborghini-aventador-lp-carcarvehicletransportlamborghini-961524651691of9rp.png'
    },
    {
        id: newId(),
        model: 'Zaporozhets',
        price: '$6,500',
        url: 'https://thumbs.dreamstime.com/b/old-car-21550972.jpg'   },
    {
        id: newId(),
        model: 'Mini Cooper',
        price: '$10,000',
        url: 'https://images.hgmsites.net/lrg/2022-mini-countryman-cooper-s-fwd-angular-front-exterior-view_100847883_l.jpg'
    },
    {
        id: newId(),
        model: 'Merceedes',
        price: '$100,000',
        url: 'https://imgd-ct.aeplcdn.com/664x415/n/2lntjbb_1685567.jpg?q=80'   }
];

class Car {
    constructor(model, price, url) {
        this.id = newId();
        this.model =model;
        this.price = price;
        this.url = url;
    }

    // methods
    static getCars = () => {
        return cars;
    };

    addCar= () => {
        cars.push(this);
    };
}

export default Car;
