'use strict'

const nBike = document.getElementById('bike');
const mWeight = document.getElementById('weight');


const bikes = [
    {
        namE: 'bike3',
        weight: 30,
    },
    {
        namE: 'bike1',
        weight: 10,
    },
    {
        namE: 'bike2',
        weight: 20,
    }
]

const [first, second, third] = bikes;

nBike.innerHTML = (`the lightest bike is ${second.namE}`)
mWeight.innerHTML = (`with ${second.weight} kg`)



