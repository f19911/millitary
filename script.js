const first = new Unit('Warrior_1', 50, 100);
const second = new Unit('Warrior_2', 100, 40);
const third = new Unit('Warrior_3', 70, 90);

first.showUnit();
second.showUnit();
third.showUnit();

const units = [first, second, third];

const team = new Squad(units);


console.log(team);


