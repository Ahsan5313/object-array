// const person = {

//     firstName : "Ahasnul huq",
//     lastName : "Shibu",
//     age : 21,
//     occation : "student",
//     address : {

//         home :"brahmanbaria",
//         village : "chanrapur"
//     },

//     getBirthYear : function(){

//         return 2021-this.age;
//     }
// }

// let value;
// value = person;

// value = person.firstName;
// value = person.lastName;
// value = person.address.home;
// value = person.address.village;
// value = person.getBirthYear();

// console.log(value);

const people = [

    {name : "sara" ,
     age : 21,
     class : 10,
     roll :20,
     address : {
         village : "chanrapur",
         thana : "kasba"
     }
    },
    {
        name : "shibu",
        age :21,
        class : "bba running",
        roll: "coronar karone vule gechi actully",
        drew : {
            pic : "banana",
        }
    }
];

for (let i = 0; i <people.length; i++){
    console.log(people[i].drew);
}

