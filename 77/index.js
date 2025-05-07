//JSON =  JavaScript Object Notation
//        Data-interchange format server - web application
//        JSON files: {key:value} = object
//                    [value1, value2, value3] = array
//                    [{key:value}, {key:value}, {key:value} ] = array of objects
//        JSON Methods:
//                     JSON.stringify() = JS object > JSON string
//                     JSON.parse() = JSON string > JS object


const names = ["Spongebob", "Patrick", "Squidward", "Sandy"];
const person = { "name": "Spongebob","age": 30,"isEmployed": true,
                       "hobbies": ["Jellyfishing", "Karate", "cooking"]};
const people = [{"name": "Spongebob","age": 30,"isEmployed": true },
                                            { "name": "Patrick", "age": 34,"isEmployed": false },
                                            { "name": "Squidward","age": 50,"isEmployed": true},
                                            {"name": "Sandy", "age": 27, "isEmployed": false}];

const jsonNamesString = `["Spongebob", "Patrick", "Squidward", "Sandy"]`;
const jsonPersonString = `{"name": "Spongebob","age": 30,"isEmployed": true,
    "hobbies": ["Jellyfishing", "Karate", "cooking"]}`;
const jsonPeopleString = `[{"name": "Spongebob","age": 30,"isEmployed": true },{ "name": "Patrick", "age": 34,"isEmployed": false },
    { "name": "Squidward","age": 50,"isEmployed": true}, {"name": "Sandy", "age": 27, "isEmployed": false}]`;

//-----------------------JSON.stringify()------------
console.log(`----Example 1 ----`);
const jsonNames = JSON.stringify(names);
console.log(`Here is the JS object:`);
console.log(names);
console.log(`Here is the JSON string:`);
console.log(jsonNames);

console.log(`----Example 2 ----`);
const jsonPerson = JSON.stringify(person);
console.log(`Here is the JS object:`);
console.log(person);
console.log(`Here is the JSON string:`);
console.log(jsonPerson);

console.log(`----Example 3 ----`);
const jsonPeople = JSON.stringify(people);
console.log(`Here is the JS object:`);
console.log(people);
console.log(`Here is the JSON string:`);
console.log(jsonPeople);

//--------------------------JSON.parse()------------
console.log(`----Example 4 ----`);
const parsedNames = JSON.parse(jsonNamesString);
console.log(`Here is the JSON string:`);
console.log(jsonNamesString);
console.log(`Here is the JS object:`);
console.log(parsedNames);

console.log(`----Example 5 ----`);
const parsedPerson = JSON.parse(jsonPersonString);
console.log(`Here is the JSON string:`);
console.log(jsonPersonString);
console.log(`Here is the JS object:`);
console.log(parsedPerson);

console.log(`----Example 6 ----`);
const parsedPeople = JSON.parse(jsonPeopleString);
console.log(`Here is the JSON string:`);
console.log(jsonPeopleString);
console.log(`Here is the JS object:`);
console.log(parsedPeople);

//--------------------------fetch()------------
fetch("person.json")
    .then(response => response.json())
    .then(value => console.log(value))
    .catch(error => console.error(error))

fetch("names.json")
    .then(response => response.json())
    .then(value => console.log(value))
    .catch(error => console.error(error))

//iterate through all objects
fetch("people.json")
    .then(response => response.json())
    .then(values => values.forEach(value => console.log(value)))
    .catch(error => console.error(error))

//iterate through all objects but specific value
fetch("people.json")
    .then(response => response.json())
    .then(values => values.forEach(value => console.log(value.age)))
    .catch(error => console.error(error))

fetch("people.json")
    .then(response => response.json())
    .then(values => values.forEach(value => console.log(value.isEmployed)))
    .catch(error => console.error(error))