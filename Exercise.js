//const names = [['Manas', 'Sarma'], ['Arun', 'Mukkath'], ['Bill', 'Gotham'], ['Subu', 'Murugan']];

//namesReMapped = [{first: 'Manas', last: 'Sarma'}, {first: 'Arun', last: 'Mukkath'}, {first: 'Bill', last: 'Gotham'}, {first: 'Subu', last: 'Murugan'}];


//const fruits = [['banaa', 4], ['apple', 6], ['pears', 12], ['orange', 6]];

//fruitsReduced = {'banaa': 4, 'apple': 6, 'pears': 12, 'orange', 6}



//Exercise- Names Mapped

const names = [['Manas', 'Sarma'], ['Arun', 'Mukkath'], ['Bill', 'Gotham'], ['Subu', 'Murugan']];

const namesReMapped = names.map((name, index) => {
    return (`first: ${name[0]} , last: ${name[1]}`);
}, {});

console.log(namesReMapped);

//Exercise- Fruits Reduce

const fruits = [['banana', 4], ['apple', 6], ['pears', 12], ['orange', 6]];

const fruitsReduced = fruits.reduce((acc, [key, value]) => {
    return
    Object.assign(acc, { [key]: value })
}, {});

console.log(fruitsReduced);