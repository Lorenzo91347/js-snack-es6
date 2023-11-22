'use strict'

const squad = [
    {
        sName: 'squad1',
        points: 0,
        fouls: 0,
    },
    {
        sName: 'squad2',
        points: 0,
        fouls: 0,
    },
    {
        sName: 'squad3',
        points: 0,
        fouls: 0,
    }
];

const list = document.querySelector('.squad-list');



squad.forEach(() => {

    let pointGen = Math.floor(Math.random() * 10);
    let foulGen = Math.floor(Math.random() * 10);

    squad.points = pointGen;
    squad.fouls = foulGen;

    let squadPost = document.createElement("li");
    let foulPost = document.createElement("li");

    squadPost.innerHTML = `${squad.name}`;
    foulPost.innerHTML = `${squad.fouls}`;

    list.append(squadPost);
    list.append(foulPost);


});
