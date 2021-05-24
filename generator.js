const bookClubs = [
  {
    name: 'cluba',
    clubMembers: [
      {
        name: 'john',
        books: [
          { id: 'asdf', title: 'sdf' },
          { id: 'ashg', title: 'hv' },
        ],
      },
      {
        name: 'darren',
        books: [
          { id: 'hoho', title: 'hoho' },
          { id: 'note', title: 'bib' },
        ],
      },
    ],
  },
];

function* iterateBooks(books) {
  for (let i = 0; i < books.length; i++) {
    yield books[i];
  }
}

function* iterateMembers(members) {
  for (let i = 0; i < members.length; i++) {
    const clubMembers = members[i];
    yield* iterateBooks(clubMembers.books);
  }
}

function* iterateBookClubs(bookClubs) {
  for (let i = 0; i < bookClubs.length; i++) {
    const bookClub = bookClubs[i];
    yield* iterateMembers(bookClub.clubMembers);
  }
}

const it = iterateBookClubs(bookClubs);

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
