var bikes = [
  {
    company: "yamaha",
    name: "r15",
    CC: "155",
  },
  {
    company: "bajaj",
    name: "pulsar",
    cc: "180",
  },
  {
    company: "KTM",
    name: "duke",
    cc: "250",
  },
];
__________________________________________
//for:
for(let i = 0; i < bikes.length; i++) {
    let obj = bikes[i];

    console.log(obj.name);
}
__________________________________________
// for in:
for (var bike in bikes) {

    console.log(`bikes.${bike} = ${bikes[bike]}`);
}
__________________________________________

for of:
for(var bike of bikes){
    console.log(bike)
}
__________________________________________
// for each:
bikes.forEach(({ name, CC }, i) => {
    console.log(`${i + 1}. ${name} has ${CC}cc`);
    });
__________________________________________







T