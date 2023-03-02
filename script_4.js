const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

// Nés années 70
console.log('Les entrepreneurs nés dans les années 70 sont :')
for(var i = 0; i <= entrepreneurs.length-1; i++){
    if (1970 <= entrepreneurs[i].year && entrepreneurs[i].year < 1980) {
      console.log(entrepreneurs[i].first +" "+ entrepreneurs[i].last);
    }
};


// Array nom 
let nameArray = [];

for(var i = 0; i <= entrepreneurs.length-1; i++){
  nameArray.push(entrepreneurs[i].last +" "+ entrepreneurs[i].first)
};

console.log(nameArray)

// Age aujourd'hui
const date = new Date();
let year_now = date.getFullYear();

for(var i = 0; i <= entrepreneurs.length-1; i++){
  console.log(`${nameArray[i]} aurait ${year_now - entrepreneurs[i].year} ans cette année`)
};

// Ordre alphabétique 

console.log('Par ordre alphabétique :')
nameArray.sort();
console.log(nameArray)





