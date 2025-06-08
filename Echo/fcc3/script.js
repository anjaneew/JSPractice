//Project 3 FCC Role Playing game

let xp = 0;
let health = 200;
let gold = 50;
let currentWeaponIndex = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monstherName");
const monshterHealthText = document.querySelector("#monsterHealth");
const weapons = [{name: "stick", power: 5},{name: "dagger", power: 30},{name: "claw hammer", power: 50},{name: "sword", power: 100}];
const monsthers = [{name: "slime", level: 1, health: 10},{name: "fanged beast", level: 2, health: 20},{name: "dragon", level: 3, health: 30}];
const locations = [
                    {name: "", 
                    "button text": ["",]},];