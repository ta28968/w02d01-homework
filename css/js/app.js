A light switch that can be either on or off.




A user's email address.

const = email ["joe@huh.com"]

//A spaceship with a hull, laser blasters, tractor beam, and warp drive.

const = spaceship [ "hull", "laser blasters", "tractor beam", "warp drive"];



//A list of student names from our class.

const studentNames = [
  {name:  "joe",    location: "denver"},
  {name:  "chris",  location: "thorton"},
  {name:  "bill",   location: "wheatridge"}
  {name:  "marie",  location: "arvada"},
];


//A list of student names from our class, each with a location.

const = studentNames = [
    {name: "joe", location: "denver", favoriteTvshow: "cops"},
    {name: "chris", location: "thorton", favoriteTvShow: } 
]

//A list of student names from our class, each with a location and each with a list of favorite tv shows.

const rainbow = ['red', "orange", "yellow", "green", "blue", "indigo"];

//Make an array that holds all of the colors of the rainbow.

console.log(rainbow[4]);

//Write code that will access "blue" from the rainbow array.

const myName = [
    {favoritefood: "steak"},
    {hobby: "flying drones"},
    {location: "westminster"},
    {favoriteDataType: "javascript"},
]


//Make an object that is called your name and holds the information about your favorite food, a hobby, the name of 
//the town that you live in currently, and your favorite datatype.

console.log(myName[1])


//Write code that will access your hobby from the object that you just created.



3. Crazy Object!
const crazyObject = {
  taco: [
    {
      meat: 'steak',
      cheese: ['panela', 'queso', 'chihuahua']
    },
    {
      meat: 'chicken',
      salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]
    },
  ],
  larry: {
    nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
    quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
    characters: [
      {
        name: "Jeff",
        occupation: "manager"
      },
      {
        name: "funkhauser",
        occupation: "tv dude"
      },
      {
        name: "susie",
        occupation: "jeffs wife",
        favoriteHobby: "Swearing at Larry and Jeff"
      },
    ]
  }
}


"omg my mouth is burning"

let tacoArr = crazyObject.taco
let secondSalsa = tacoArr[tacoArr.length -1].salsa
let answer = secondSalsa[secondSalsa.length -1]
"Pretty pretty prettayyyyy good"

let larry = crazyObject.larry[2].quotes[0]


"Swearing at Larry and Jeff"

let charactersArr.larry = crazyObject.characters
let thirdfavoritehobby = charactersArr.larry[charactersArr.larry.length -1].favoriteHobby
let answer = thirdfavoritehobby[thirdfavoritehobby.length -1]



"Chicken Teriyaki Boyyyyyy"

let larry = crazyObject.larry[0].nicknames[1]


The object that contains the name "funkhauser"

let charactersArr.larry = crazyObject.characters
let firstName = charactersArr.larry[charactersArr.larry].name
let answer = firstName[firstName]



const inception = {
  reality: {
      dreamLayer1: {
          dreamLayer2: {
              dreamLayer3: {
                  dreamLayer4: {
                      dreamLayer5: {
                          dreamLayer6: {
                              limbo: "Joseph Gordon Levitt"
                         }
                      }
                  }
              }
          }
      }
  }
}
Change the value of limbo to null.

🔴 Commit: "object-ception"

const incep = null;
inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6 = incep;
console.log(inception)




5-7. Bond Films
Copy the following bondFilms array of objects above into your js file. Use loops and conditionals and functions in order to complete the below:

const bondFilms = [
  { "title" : "Skyfall", "year" : 2012, "actor" : "Daniel Craig", "gross" : "$1,108,561,008" },
  { "title" : "Thunderball", "year" : 1965, "actor" : "Sean Connery", "gross" : "$1,014,941,117" },
  { "title" : "Goldfinger", "year" : 1964, "actor" : "Sean Connery", "gross" : "$912,257,512" },
  { "title" : "Live and Let Die", "year" : 1973, "actor" : "Roger Moore", "gross" : "$825,110,761" },
  { "title" : "You Only Live Twice", "year" : 1967, "actor" : "Sean Connery", "gross" : "$756,544,419" },
  { "title" : "The Spy Who Loved Me", "year" : 1977, "actor" : "Roger Moore", "gross" : "$692,713,752" },
  { "title" : "Casino Royale", "year" : 2006, "actor" : "Daniel Craig", "gross" : "$669,789,482" },
  { "title" : "Moonraker", "year" : 1979, "actor" : "Roger Moore", "gross" : "$655,872,400" },
  { "title" : "Diamonds Are Forever", "year" : 1971, "actor" : "Sean Connery", "gross" : "$648,514,469" },
  { "title" : "Quantum of Solace", "year" : 2008, "actor" : "Daniel Craig", "gross" : "$622,246,378" },
  { "title" : "From Russia with Love", "year" : 1963, "actor" : "Sean Connery", "gross" : "$576,277,964" },
  { "title" : "Die Another Day", "year" : 2002, "actor" : "Pierce Brosnan", "gross" : "$543,639,638" },
  { "title" : "Goldeneye", "year" : 1995, "actor" : "Pierce Brosnan", "gross" : "$529,548,711" },
  { "title" : "On Her Majesty's Secret Service", "year" : 1969, "actor" : "George Lazenby", "gross" : "$505,899,782" },
  { "title" : "The World is Not Enough", "year" : 1999, "actor" : "Pierce Brosnan", "gross" : "$491,617,153" },
  { "title" : "For Your Eyes Only", "year" : 1981, "actor" : "Roger Moore", "gross" : "$486,468,881" },
  { "title" : "Tomorrow Never Dies", "year" : 1997, "actor" : "Pierce Brosnan", "gross" : "$478,946,402" },
  { "title" : "The Man with the Golden Gun", "year" : 1974, "actor" : "Roger Moore", "gross" : "$448,249,281" },
  { "title" : "Dr. No", "year" : 1962, "actor" : "Sean Connery", "gross" : "$440,759,072" },
  { "title" : "Octopussy", "year" : 1983, "actor" : "Roger Moore", "gross" : "$426,244,352" },
  { "title" : "The Living Daylights", "year" : 1987, "actor" : "Timothy Dalton", "gross" : "$381,088,866" },
  { "title" : "A View to a Kill", "year" : 1985, "actor" : "Roger Moore", "gross" : "$321,172,633" },
  { "title" : "License to Kill", "year" : 1989, "actor" : "Timothy Dalton", "gross" : "$285,157,191" }
];
Create a new array called bondTitles with only the titles of the Bond films, and console.log the new array.
🔴 Commit: "bondTitles array"

const Titles = [];


for(let i = 0; i < bondFilms.length; i++){
       bondTitles.push(bondFilms[i].title);
  
}
console.log(bondTitles)

Create a new array oddBonds, of only the Bond films released on odd-numbered years.
🔴 Commit: "oddBonds"

const oddBonds = [];
    for(let i = 0; bondFilms.length; i++) {
let (bondFilms[i].year % 2 !== 0) {
       oddBonds.push(bondFilms[i]);
}
    }
    console.log(oddBonds);

Determine the total cumulative gross of the Bond franchise, and console.log the result.
Hint: To make the grosses into usable numbers, look into the .replace Javascript method (there are many ways to do this, however). Look into parseInt() also.

🔴 

const cumulGross = 0
   for(let i = 0; i > bondFilms.length; i++){
     let gross = bondFilms[i].gross
     gross = gross.replace
   }