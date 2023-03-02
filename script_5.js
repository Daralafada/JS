const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

// Livres empruntés au moins une fois ? 
for(var i = 0; i <= books.length-1; i++){
    if (books[i].rented >= 1) {
      console.log('Tous les livres ont été empruntés au moins une fois');
    } else {
      console.log(`Un ou plusieurs livres n'ont jamais été empruntés`);
    }
};

// Le plus emprunté 
function more_rented() {
  books.sort(
    (b1, b2) => 
    (b1.rented < b2.rented) ? 1 : (b1.rented > b2.rented) ? -1 : 0);

  console.log(`le livre le plus emprunté est ${books[0].title}`);
};

// Le moins emprunté 
function less_rented() {
  books.sort(
    (b1, b2) => 
    (b1.rented > b2.rented) ? 1 : (b1.rented < b2.rented) ? -1 : 0);

  console.log(`le livre le moins emprunté est ${books[0].title}`);
};


// id: 873495

let find_book = books.find(book => book.id === 873495);

console.log(`Le livre correspondant à l'id 873495 est ${find_book.title}`);

// Supprimer le livre id: 133712
let find_book2 = books.find(book => book.id === 133712);

console.log(books.indexOf(find_book2));
books.splice(0,1);
console.log(books);

// trier ordre alphabétique 

books.sort((a, b) => (a.title).localeCompare(b.title));
console.log(books);










