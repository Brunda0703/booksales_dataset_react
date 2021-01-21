// to display fiction book details
let fiction = [
    {
      "BookName": "11/22/63: A Novel",
      "Author": "Stephen King",
      "UserRating": 4.6,
      "Reviews": 2052,
      "Price": 22,
      "Year": 2011,
      "Genre": "Fiction"
    },
    {
      "BookName": "1984 (Signet Classics)",
      "Author": "George Orwell",
      "UserRating": 4.7,
      "Reviews": 21424,
      "Price": 6,
      "Year": 2017,
      "Genre": "Fiction"
    },
    {
      "BookName": "A Dance with Dragons (A Song of Ice and Fire)",
      "Author": "George R. R. Martin",
      "UserRating": 4.4,
      "Reviews": 12643,
      "Price": 11,
      "Year": 2011,
      "Genre": "Fiction"
    },
    {
      "BookName": "A Game of Thrones / A Clash of Kings / A Storm of Swords / A Feast of Crows / A Dance with Dragons",
      "Author": "George R. R. Martin",
      "UserRating": 4.7,
      "Reviews": 19735,
      "Price": 30,
      "Year": 2014,
      "Genre": "Fiction"
    },
    {
      "BookName": "A Gentleman in Moscow: A Novel",
      "Author": "Amor Towles",
      "UserRating": 4.7,
      "Reviews": 19699,
      "Price": 15,
      "Year": 2017,
      "Genre": "Fiction"
    },
    {
      "BookName": "A Man Called Ove: A Novel",
      "Author": "Fredrik Backman",
      "UserRating": 4.6,
      "Reviews": 23848,
      "Price": 8,
      "Year": 2016,
      "Genre": "Fiction"
    },
    {
      "BookName": "A Man Called Ove: A Novel",
      "Author": "Fredrik Backman",
      "UserRating": 4.6,
      "Reviews": 23848,
      "Price": 8,
      "Year": 2017,
      "Genre": "Fiction"
    },
    {
      "BookName": "A Wrinkle in Time (Time Quintet)",
      "Author": "Madeleine L'Engle",
      "UserRating": 4.5,
      "Reviews": 5153,
      "Price": 5,
      "Year": 2018,
      "Genre": "Fiction"
    },
    {
      "BookName": "All the Light We Cannot See",
      "Author": "Anthony Doerr",
      "UserRating": 4.6,
      "Reviews": 36348,
      "Price": 14,
      "Year": 2014,
      "Genre": "Fiction"
    },
    {
      "BookName": "All the Light We Cannot See",
      "Author": "Anthony Doerr",
      "UserRating": 4.6,
      "Reviews": 36348,
      "Price": 14,
      "Year": 2015,
      "Genre": "Fiction"
    },
    {
      "BookName": "Allegiant",
      "Author": "Veronica Roth",
      "UserRating": 3.9,
      "Reviews": 6310,
      "Price": 13,
      "Year": 2013,
      "Genre": "Fiction"
    },
    {
      "BookName": "And the Mountains Echoed",
      "Author": "Khaled Hosseini",
      "UserRating": 4.3,
      "Reviews": 12159,
      "Price": 13,
      "Year": 2013,
      "Genre": "Fiction"
    },
    {
      "BookName": "Breaking Dawn (The Twilight Saga, Book 4)",
      "Author": "Stephenie Meyer",
      "UserRating": 4.6,
      "Reviews": 9769,
      "Price": 13,
      "Year": 2009,
      "Genre": "Fiction"
    },
    {
      "BookName": "Winter of the World: Book Two of the Century Trilogy",
      "Author": "Ken Follett",
      "UserRating": 4.5,
      "Reviews": 10760,
      "Price": 15,
      "Year": 2012,
      "Genre": "Fiction"
    },
    {
      "BookName": "Brown Bear, Brown Bear, What Do You See?",
      "Author": "Bill Martin Jr.",
      "UserRating": 4.9,
      "Reviews": 14344,
      "Price": 5,
      "Year": 2017,
      "Genre": "Fiction"
    },
    {
      "BookName": "Brown Bear, Brown Bear, What Do You See?",
      "Author": "Bill Martin Jr.",
      "UserRating": 4.9,
      "Reviews": 14344,
      "Price": 5,
      "Year": 2019,
      "Genre": "Fiction"
    },
    {
      "BookName": "Cabin Fever (Diary of a Wimpy Kid, Book 6)",
      "Author": "Jeff Kinney",
      "UserRating": 4.8,
      "Reviews": 4505,
      "Price": 0,
      "Year": 2011,
      "Genre": "Fiction"
    },
    {
      "BookName": "The Getaway",
      "Author": "Jeff Kinney",
      "UserRating": 4.8,
      "Reviews": 5836,
      "Price": 0,
      "Year": 2017,
      "Genre": "Fiction"
    },
    {
      "BookName": "The Girl on the Train",
      "Author": "Paula Hawkins",
      "UserRating": 4.1,
      "Reviews": 79446,
      "Price": 18,
      "Year": 2015,
      "Genre": "Fiction"
    },
    {
      "BookName": "The Girl on the Train",
      "Author": "Paula Hawkins",
      "UserRating": 4.1,
      "Reviews": 79446,
      "Price": 7,
      "Year": 2016,
      "Genre": "Fiction"
    },
    {
      "BookName": "The Girl Who Kicked the Hornet's Nest (Millennium Trilogy)",
      "Author": "Stieg Larsson",
      "UserRating": 4.7,
      "Reviews": 7747,
      "Price": 14,
      "Year": 2010,
      "Genre": "Fiction"
    },
    {
      "BookName": "The Girl Who Kicked the Hornet's Nest (Millennium Trilogy)",
      "Author": "Stieg Larsson",
      "UserRating": 4.7,
      "Reviews": 7747,
      "Price": 14,
      "Year": 2011,
      "Genre": "Fiction"
    },
    {
      "BookName": "The Girl Who Played with Fire (Millennium Series)",
      "Author": "Stieg Larsson",
      "UserRating": 4.7,
      "Reviews": 7251,
      "Price": 9,
      "Year": 2010,
      "Genre": "Fiction"
    },
    {
      "BookName": "The Girl Who Played with Fire (Millennium)",
      "Author": "Stieg Larsson",
      "UserRating": 4.7,
      "Reviews": 7251,
      "Price": 16,
      "Year": 2009,
      "Genre": "Fiction"
    },
    {
      "BookName": "The Girl with the Dragon Tattoo (Millennium Series)",
      "Author": "Stieg Larsson",
      "UserRating": 4.4,
      "Reviews": 10559,
      "Price": 2,
      "Year": 2009,
      "Genre": "Fiction"
    },
    {
      "BookName": "The Girl with the Dragon Tattoo (Millennium Series)",
      "Author": "Stieg Larsson",
      "UserRating": 4.4,
      "Reviews": 10559,
      "Price": 2,
      "Year": 2010,
      "Genre": "Fiction"
    },
    {
      "BookName": "The Going-To-Bed Book",
      "Author": "Sandra Boynton",
      "UserRating": 4.8,
      "Reviews": 5249,
      "Price": 5,
      "Year": 2016,
      "Genre": "Fiction"
    },
    {
      "BookName": "The Going-To-Bed Book",
      "Author": "Sandra Boynton",
      "UserRating": 4.8,
      "Reviews": 5249,
      "Price": 5,
      "Year": 2017,
      "Genre": "Fiction"
    },
    {
      "BookName": "The Goldfinch: A Novel (Pulitzer Prize for Fiction)",
      "Author": "Donna Tartt",
      "UserRating": 3.9,
      "Reviews": 33844,
      "Price": 20,
      "Year": 2013,
      "Genre": "Fiction"
    },
    {
      "BookName": "The Goldfinch: A Novel (Pulitzer Prize for Fiction)",
      "Author": "Donna Tartt",
      "UserRating": 3.9,
      "Reviews": 33844,
      "Price": 20,
      "Year": 2014,
      "Genre": "Fiction"
    },
    {
      "BookName": "The Great Gatsby",
      "Author": "F. Scott Fitzgerald",
      "UserRating": 4.4,
      "Reviews": 11616,
      "Price": 7,
      "Year": 2012,
      "Genre": "Fiction"
    },
    {
      "BookName": "The Great Gatsby",
      "Author": "F. Scott Fitzgerald",
      "UserRating": 4.4,
      "Reviews": 11616,
      "Price": 7,
      "Year": 2013,
      "Genre": "Fiction"
    },
    {
      "BookName": "The Great Gatsby",
      "Author": "F. Scott Fitzgerald",
      "UserRating": 4.4,
      "Reviews": 11616,
      "Price": 7,
      "Year": 2014,
      "Genre": "Fiction"
    },
    {
      "BookName": "The Guardians: A Novel",
      "Author": "John Grisham",
      "UserRating": 4.5,
      "Reviews": 13609,
      "Price": 14,
      "Year": 2019,
      "Genre": "Fiction"
    },
    {
      "BookName": "The Guernsey Literary and Potato Peel Pie Society",
      "Author": "Mary Ann Shaffer",
      "UserRating": 4.7,
      "Reviews": 8587,
      "Price": 10,
      "Year": 2009,
      "Genre": "Fiction"
    },
    {
      "BookName": "The Handmaid's Tale",
      "Author": "Margaret Atwood",
      "UserRating": 4.3,
      "Reviews": 29442,
      "Price": 7,
      "Year": 2017,
      "Genre": "Fiction"
    },
    {
      "BookName": "The Harbinger: The Ancient Mystery that Holds the Secret of America's Future",
      "Author": "Jonathan Cahn",
      "UserRating": 4.6,
      "Reviews": 11098,
      "Price": 13,
      "Year": 2012,
      "Genre": "Fiction"
    },
    {
      "BookName": "The Hate U Give",
      "Author": "Angie Thomas",
      "UserRating": 4.8,
      "Reviews": 9947,
      "Price": 11,
      "Year": 2018,
      "Genre": "Fiction"
    },
    {
      "BookName": "The Help",
      "Author": "Kathryn Stockett",
      "UserRating": 4.8,
      "Reviews": 13871,
      "Price": 6,
      "Year": 2009,
      "Genre": "Fiction"
    },
    {
      "BookName": "The Help",
      "Author": "Kathryn Stockett",
      "UserRating": 4.8,
      "Reviews": 13871,
      "Price": 6,
      "Year": 2010,
      "Genre": "Fiction"
    },
    {
      "BookName": "The Help",
      "Author": "Kathryn Stockett",
      "UserRating": 4.8,
      "Reviews": 13871,
      "Price": 8,
      "Year": 2011,
      "Genre": "Fiction"
    },
    {
      "BookName": "The Help",
      "Author": "Kathryn Stockett",
      "UserRating": 4.8,
      "Reviews": 13871,
      "Price": 7,
      "Year": 2011,
      "Genre": "Fiction"
    },
    {
      "BookName": "The House of Hades (Heroes of Olympus, Book 4)",
      "Author": "Rick Riordan",
      "UserRating": 4.8,
      "Reviews": 6982,
      "Price": 14,
      "Year": 2013,
      "Genre": "Fiction"
    },
    {
      "BookName": "The Hunger Games",
      "Author": "Suzanne Collins",
      "UserRating": 4.7,
      "Reviews": 32122,
      "Price": 14,
      "Year": 2010,
      "Genre": "Fiction"
    },
    {
      "BookName": "The Hunger Games (Book 1)",
      "Author": "Suzanne Collins",
      "UserRating": 4.7,
      "Reviews": 32122,
      "Price": 8,
      "Year": 2011,
      "Genre": "Fiction"
    },
    {
      "BookName": "The Hunger Games (Book 1)",
      "Author": "Suzanne Collins",
      "UserRating": 4.7,
      "Reviews": 32122,
      "Price": 8,
      "Year": 2012,
      "Genre": "Fiction"
    },
    {
      "BookName": "The Hunger Games Trilogy Boxed Set (1)",
      "Author": "Suzanne Collins",
      "UserRating": 4.8,
      "Reviews": 16949,
      "Price": 30,
      "Year": 2011,
      "Genre": "Fiction"
    },
    {
      "BookName": "The Hunger Games Trilogy Boxed Set (1)",
      "Author": "Suzanne Collins",
      "UserRating": 4.8,
      "Reviews": 16949,
      "Price": 30,
      "Year": 2012,
      "Genre": "Fiction"
    },
    {
      "BookName": "Divergent",
      "Author": "Veronica Roth",
      "UserRating": 4.6,
      "Reviews": 27098,
      "Price": 15,
      "Year": 2013,
      "Genre": "Fiction"
    },
    {
      "BookName": "Divergent",
      "Author": "Veronica Roth",
      "UserRating": 4.6,
      "Reviews": 27098,
      "Price": 15,
      "Year": 2014,
      "Genre": "Fiction"
    },
    {
      "BookName": "Divergent / Insurgent",
      "Author": "Veronica Roth",
      "UserRating": 4.5,
      "Reviews": 17684,
      "Price": 6,
      "Year": 2014,
      "Genre": "Fiction"
    },
    {
      "BookName": "Doctor Sleep: A Novel",
      "Author": "Stephen King",
      "UserRating": 4.7,
      "Reviews": 15845,
      "Price": 13,
      "Year": 2013,
      "Genre": "Fiction"
    },
    {
      "BookName": "Dog Days (Diary of a Wimpy Kid, Book 4) (Volume 4)",
      "Author": "Jeff Kinney",
      "UserRating": 4.8,
      "Reviews": 3181,
      "Price": 12,
      "Year": 2009,
      "Genre": "Fiction"
    },
    {
      "BookName": "Dog Man and Cat Kid: From the Creator of Captain Underpants (Dog Man #4)",
      "Author": "Dav Pilkey",
      "UserRating": 4.9,
      "Reviews": 5062,
      "Price": 6,
      "Year": 2018,
      "Genre": "Fiction"
    },
    {
      "BookName": "Dog Man: A Tale of Two Kitties: From the Creator of Captain Underpants (Dog Man #3)",
      "Author": "Dav Pilkey",
      "UserRating": 4.9,
      "Reviews": 4786,
      "Price": 8,
      "Year": 2017,
      "Genre": "Fiction"
    },
    {
      "BookName": "Dog Man: Brawl of the Wild: From the Creator of Captain Underpants (Dog Man #6)",
      "Author": "Dav Pilkey",
      "UserRating": 4.9,
      "Reviews": 7235,
      "Price": 4,
      "Year": 2018,
      "Genre": "Fiction"
    },
    {
      "BookName": "Dog Man: Brawl of the Wild: From the Creator of Captain Underpants (Dog Man #6)",
      "Author": "Dav Pilkey",
      "UserRating": 4.9,
      "Reviews": 7235,
      "Price": 4,
      "Year": 2019,
      "Genre": "Fiction"
    },
    {
      "BookName": "Dog Man: Fetch-22: From the Creator of Captain Underpants (Dog Man #8)",
      "Author": "Dav Pilkey",
      "UserRating": 4.9,
      "Reviews": 12619,
      "Price": 8,
      "Year": 2019,
      "Genre": "Fiction"
    },
    {
      "BookName": "Dog Man: For Whom the Ball Rolls: From the Creator of Captain Underpants (Dog Man #7)",
      "Author": "Dav Pilkey",
      "UserRating": 4.9,
      "Reviews": 9089,
      "Price": 8,
      "Year": 2019,
      "Genre": "Fiction"
    },
    {
      "BookName": "Dog Man: Lord of the Fleas: From the Creator of Captain Underpants (Dog Man #5)",
      "Author": "Dav Pilkey",
      "UserRating": 4.9,
      "Reviews": 5470,
      "Price": 6,
      "Year": 2018,
      "Genre": "Fiction"
    },
    {
      "BookName": "Double Down (Diary of a Wimpy Kid #11)",
      "Author": "Jeff Kinney",
      "UserRating": 4.8,
      "Reviews": 5118,
      "Price": 20,
      "Year": 2016,
      "Genre": "Fiction"
    },
    {
      "BookName": "Eclipse (Twilight Sagas)",
      "Author": "Stephenie Meyer",
      "UserRating": 4.7,
      "Reviews": 5505,
      "Price": 7,
      "Year": 2009,
      "Genre": "Fiction"
    },
    {
      "BookName": "Eclipse (Twilight)",
      "Author": "Stephenie Meyer",
      "UserRating": 4.7,
      "Reviews": 5505,
      "Price": 18,
      "Year": 2009,
      "Genre": "Fiction"
    },
    {
      "BookName": "Fahrenheit 451",
      "Author": "Ray Bradbury",
      "UserRating": 4.6,
      "Reviews": 10721,
      "Price": 8,
      "Year": 2016,
      "Genre": "Fiction"
    },
    {
      "BookName": "Fahrenheit 451",
      "Author": "Ray Bradbury",
      "UserRating": 4.6,
      "Reviews": 10721,
      "Price": 8,
      "Year": 2018,
      "Genre": "Fiction"
    },
    {
      "BookName": "Fantastic Beasts and Where to Find Them: The Original Screenplay (Harry Potter)",
      "Author": "J.K. Rowling",
      "UserRating": 4.7,
      "Reviews": 4370,
      "Price": 15,
      "Year": 2016,
      "Genre": "Fiction"
    },
    {
      "BookName": "Frozen (Little Golden Book)",
      "Author": "RH Disney",
      "UserRating": 4.7,
      "Reviews": 3642,
      "Price": 0,
      "Year": 2014,
      "Genre": "Fiction"
    },
    {
      "BookName": "Game of Thrones Boxed Set: A Game of Thrones/A Clash of Kings/A Storm of Swords/A Feast for Crows",
      "Author": "George R.R. Martin",
      "UserRating": 4.6,
      "Reviews": 5594,
      "Price": 5,
      "Year": 2011,
      "Genre": "Fiction"
    },
    {
      "BookName": "Game of Thrones Boxed Set: A Game of Thrones/A Clash of Kings/A Storm of Swords/A Feast for Crows",
      "Author": "George R.R. Martin",
      "UserRating": 4.6,
      "Reviews": 5594,
      "Price": 5,
      "Year": 2012,
      "Genre": "Fiction"
    },
    {
      "BookName": "Game of Thrones Boxed Set: A Game of Thrones/A Clash of Kings/A Storm of Swords/A Feast for Crows",
      "Author": "George R.R. Martin",
      "UserRating": 4.6,
      "Reviews": 5594,
      "Price": 5,
      "Year": 2013,
      "Genre": "Fiction"
    },
    {
      "BookName": "Giraffes Can't Dance",
      "Author": "Giles Andreae",
      "UserRating": 4.8,
      "Reviews": 14038,
      "Price": 4,
      "Year": 2015,
      "Genre": "Fiction"
    },
    {
      "BookName": "Giraffes Can't Dance",
      "Author": "Giles Andreae",
      "UserRating": 4.8,
      "Reviews": 14038,
      "Price": 4,
      "Year": 2016,
      "Genre": "Fiction"
    },
    {
      "BookName": "Giraffes Can't Dance",
      "Author": "Giles Andreae",
      "UserRating": 4.8,
      "Reviews": 14038,
      "Price": 4,
      "Year": 2017,
      "Genre": "Fiction"
    },
    {
      "BookName": "Giraffes Can't Dance",
      "Author": "Giles Andreae",
      "UserRating": 4.8,
      "Reviews": 14038,
      "Price": 4,
      "Year": 2018,
      "Genre": "Fiction"
    },
    {
      "BookName": "Giraffes Can't Dance",
      "Author": "Giles Andreae",
      "UserRating": 4.8,
      "Reviews": 14038,
      "Price": 4,
      "Year": 2019,
      "Genre": "Fiction"
    },
    {
      "BookName": "Go Set a Watchman: A Novel",
      "Author": "Harper Lee",
      "UserRating": 3.6,
      "Reviews": 14982,
      "Price": 19,
      "Year": 2015,
      "Genre": "Fiction"
    },
    {
      "BookName": "Go the F**k to Sleep",
      "Author": "Adam Mansbach",
      "UserRating": 4.8,
      "Reviews": 9568,
      "Price": 9,
      "Year": 2011,
      "Genre": "Fiction"
    },
    {
      "BookName": "Gone Girl",
      "Author": "Gillian Flynn",
      "UserRating": 4,
      "Reviews": 57271,
      "Price": 10,
      "Year": 2012,
      "Genre": "Fiction"
    },
    {
      "BookName": "Gone Girl",
      "Author": "Gillian Flynn",
      "UserRating": 4,
      "Reviews": 57271,
      "Price": 10,
      "Year": 2013,
      "Genre": "Fiction"
    },
    {
      "BookName": "Gone Girl",
      "Author": "Gillian Flynn",
      "UserRating": 4,
      "Reviews": 57271,
      "Price": 9,
      "Year": 2014,
      "Genre": "Fiction"
    },
    {
      "BookName": "Goodnight Moon",
      "Author": "Margaret Wise Brown",
      "UserRating": 4.8,
      "Reviews": 8837,
      "Price": 5,
      "Year": 2017,
      "Genre": "Fiction"
    },
    {
      "BookName": "Goodnight Moon",
      "Author": "Margaret Wise Brown",
      "UserRating": 4.8,
      "Reviews": 8837,
      "Price": 5,
      "Year": 2018,
      "Genre": "Fiction"
    },
    {
      "BookName": "Goodnight Moon",
      "Author": "Margaret Wise Brown",
      "UserRating": 4.8,
      "Reviews": 8837,
      "Price": 5,
      "Year": 2019,
      "Genre": "Fiction"
    },
    {
      "BookName": "Goodnight, Goodnight Construction Site (Hardcover Books for Toddlers, Preschool Books for Kids)",
      "Author": "Sherri Duskey Rinker",
      "UserRating": 4.9,
      "Reviews": 7038,
      "Price": 7,
      "Year": 2012,
      "Genre": "Fiction"
    },
    {
      "BookName": "Goodnight, Goodnight Construction Site (Hardcover Books for Toddlers, Preschool Books for Kids)",
      "Author": "Sherri Duskey Rinker",
      "UserRating": 4.9,
      "Reviews": 7038,
      "Price": 7,
      "Year": 2013,
      "Genre": "Fiction"
    },
    {
      "BookName": "Grey: Fifty Shades of Grey as Told by Christian (Fifty Shades of Grey Series)",
      "Author": "E L James",
      "UserRating": 4.4,
      "Reviews": 25624,
      "Price": 14,
      "Year": 2015,
      "Genre": "Fiction"
    },
    {
      "BookName": "The Blood of Olympus (The Heroes of Olympus (5))",
      "Author": "Rick Riordan",
      "UserRating": 4.8,
      "Reviews": 6600,
      "Price": 11,
      "Year": 2014,
      "Genre": "Fiction"
    },
    {
      "BookName": "Percy Jackson and the Olympians Paperback Boxed Set (Books 1-3)",
      "Author": "Rick Riordan",
      "UserRating": 4.8,
      "Reviews": 548,
      "Price": 2,
      "Year": 2010,
      "Genre": "Fiction"
    },
    {
      "BookName": "Player's Handbook (Dungeons & Dragons)",
      "Author": "Wizards RPG Team",
      "UserRating": 4.8,
      "Reviews": 16990,
      "Price": 27,
      "Year": 2017,
      "Genre": "Fiction"
    },
    {
      "BookName": "Player's Handbook (Dungeons & Dragons)",
      "Author": "Wizards RPG Team",
      "UserRating": 4.8,
      "Reviews": 16990,
      "Price": 27,
      "Year": 2018,
      "Genre": "Fiction"
    },
    {
      "BookName": "Player's Handbook (Dungeons & Dragons)",
      "Author": "Wizards RPG Team",
      "UserRating": 4.8,
      "Reviews": 16990,
      "Price": 27,
      "Year": 2019,
      "Genre": "Fiction"
    },
    {
      "BookName": "PokÃ©mon Deluxe Essential Handbook: The Need-to-Know Stats and Facts on Over 700 PokÃ©mon",
      "Author": "Scholastic",
      "UserRating": 4.7,
      "Reviews": 3503,
      "Price": 9,
      "Year": 2016,
      "Genre": "Fiction"
    },
    {
      "BookName": "The Book with No Pictures",
      "Author": "B. J. Novak",
      "UserRating": 4.8,
      "Reviews": 8081,
      "Price": 8,
      "Year": 2014,
      "Genre": "Fiction"
    },
    {
      "BookName": "The Book with No Pictures",
      "Author": "B. J. Novak",
      "UserRating": 4.8,
      "Reviews": 8081,
      "Price": 8,
      "Year": 2015,
      "Genre": "Fiction"
    },
    {
      "BookName": "Harry Potter Paperback Box Set (Books 1-7)",
      "Author": "J. K. Rowling",
      "UserRating": 4.8,
      "Reviews": 13471,
      "Price": 52,
      "Year": 2016,
      "Genre": "Fiction"
    },
    {
      "BookName": "I, Alex Cross",
      "Author": "James Patterson",
      "UserRating": 4.6,
      "Reviews": 1320,
      "Price": 7,
      "Year": 2009,
      "Genre": "Fiction"
    },
    {
      "BookName": "If Animals Kissed Good Night",
      "Author": "Ann Whitford Paul",
      "UserRating": 4.8,
      "Reviews": 16643,
      "Price": 4,
      "Year": 2017,
      "Genre": "Fiction"
    },
    {
      "BookName": "If Animals Kissed Good Night",
      "Author": "Ann Whitford Paul",
      "UserRating": 4.8,
      "Reviews": 16643,
      "Price": 4,
      "Year": 2019,
      "Genre": "Fiction"
    },
    {
      "BookName": "If I Stay",
      "Author": "Gayle Forman",
      "UserRating": 4.3,
      "Reviews": 7153,
      "Price": 9,
      "Year": 2014,
      "Genre": "Fiction"
    },
    {
      "BookName": "The Casual Vacancy",
      "Author": "J.K. Rowling",
      "UserRating": 3.3,
      "Reviews": 9372,
      "Price": 12,
      "Year": 2012,
      "Genre": "Fiction"
    },
    {
      "BookName": "The Confession: A Novel",
      "Author": "John Grisham",
      "UserRating": 4.3,
      "Reviews": 3523,
      "Price": 13,
      "Year": 2010,
      "Genre": "Fiction"
    },
    {
      "BookName": "The Day the Crayons Quit",
      "Author": "Drew Daywalt",
      "UserRating": 4.8,
      "Reviews": 8922,
      "Price": 9,
      "Year": 2013,
      "Genre": "Fiction"
    },
    {
      "BookName": "The Day the Crayons Quit",
      "Author": "Drew Daywalt",
      "UserRating": 4.8,
      "Reviews": 8922,
      "Price": 9,
      "Year": 2014,
      "Genre": "Fiction"
    },
    {
      "BookName": "The Day the Crayons Quit",
      "Author": "Drew Daywalt",
      "UserRating": 4.8,
      "Reviews": 8922,
      "Price": 9,
      "Year": 2015,
      "Genre": "Fiction"
    },
    {
      "BookName": "Last Week Tonight with John Oliver Presents A Day in the Life of Marlon Bundo (Better Bundo Book, LGBT ChildrenÂ’s Book)",
      "Author": "Jill Twiss",
      "UserRating": 4.9,
      "Reviews": 11881,
      "Price": 13,
      "Year": 2018,
      "Genre": "Fiction"
    },
    {
      "BookName": "Little Bee: A Novel",
      "Author": "Chris Cleave",
      "UserRating": 4.1,
      "Reviews": 1467,
      "Price": 10,
      "Year": 2010,
      "Genre": "Fiction"
    },
    {
      "BookName": "Little Blue Truck",
      "Author": "Alice Schertle",
      "UserRating": 4.9,
      "Reviews": 1884,
      "Price": 0,
      "Year": 2014,
      "Genre": "Fiction"
    },
    {
      "BookName": "Little Fires Everywhere",
      "Author": "Celeste Ng",
      "UserRating": 4.5,
      "Reviews": 25706,
      "Price": 12,
      "Year": 2018,
      "Genre": "Fiction"
    },
    {
      "BookName": "Looking for Alaska",
      "Author": "John Green",
      "UserRating": 4.5,
      "Reviews": 8491,
      "Price": 7,
      "Year": 2014,
      "Genre": "Fiction"
    },
    {
      "BookName": "Mockingjay (The Hunger Games)",
      "Author": "Suzanne Collins",
      "UserRating": 4.5,
      "Reviews": 26741,
      "Price": 8,
      "Year": 2010,
      "Genre": "Fiction"
    },
    {
      "BookName": "Mockingjay (The Hunger Games)",
      "Author": "Suzanne Collins",
      "UserRating": 4.5,
      "Reviews": 26741,
      "Price": 8,
      "Year": 2011,
      "Genre": "Fiction"
    },
    {
      "BookName": "Mockingjay (The Hunger Games)",
      "Author": "Suzanne Collins",
      "UserRating": 4.5,
      "Reviews": 26741,
      "Price": 8,
      "Year": 2012,
      "Genre": "Fiction"
    },
    {
      "BookName": "Oh, the Places You'll Go!",
      "Author": "Dr. Seuss",
      "UserRating": 4.9,
      "Reviews": 21834,
      "Price": 8,
      "Year": 2012,
      "Genre": "Fiction"
    },
    {
      "BookName": "Oh, the Places You'll Go!",
      "Author": "Dr. Seuss",
      "UserRating": 4.9,
      "Reviews": 21834,
      "Price": 8,
      "Year": 2013,
      "Genre": "Fiction"
    },
    {
      "BookName": "Oh, the Places You'll Go!",
      "Author": "Dr. Seuss",
      "UserRating": 4.9,
      "Reviews": 21834,
      "Price": 8,
      "Year": 2014,
      "Genre": "Fiction"
    },
    {
      "BookName": "Oh, the Places You'll Go!",
      "Author": "Dr. Seuss",
      "UserRating": 4.9,
      "Reviews": 21834,
      "Price": 8,
      "Year": 2015,
      "Genre": "Fiction"
    },
    {
      "BookName": "Oh, the Places You'll Go!",
      "Author": "Dr. Seuss",
      "UserRating": 4.9,
      "Reviews": 21834,
      "Price": 8,
      "Year": 2016,
      "Genre": "Fiction"
    },
    {
      "BookName": "Oh, the Places You'll Go!",
      "Author": "Dr. Seuss",
      "UserRating": 4.9,
      "Reviews": 21834,
      "Price": 8,
      "Year": 2017,
      "Genre": "Fiction"
    },
    {
      "BookName": "Oh, the Places You'll Go!",
      "Author": "Dr. Seuss",
      "UserRating": 4.9,
      "Reviews": 21834,
      "Price": 8,
      "Year": 2018,
      "Genre": "Fiction"
    },
    {
      "BookName": "Oh, the Places You'll Go!",
      "Author": "Dr. Seuss",
      "UserRating": 4.9,
      "Reviews": 21834,
      "Price": 8,
      "Year": 2019,
      "Genre": "Fiction"
    },
    {
      "BookName": "Old School (Diary of a Wimpy Kid #10)",
      "Author": "Jeff Kinney",
      "UserRating": 4.8,
      "Reviews": 6169,
      "Price": 7,
      "Year": 2015,
      "Genre": "Fiction"
    },
    {
      "BookName": "Olive Kitteridge",
      "Author": "Elizabeth Strout",
      "UserRating": 4.2,
      "Reviews": 4519,
      "Price": 12,
      "Year": 2009,
      "Genre": "Fiction"
    },
    {
      "BookName": "New Moon (The Twilight Saga)",
      "Author": "Stephenie Meyer",
      "UserRating": 4.6,
      "Reviews": 5680,
      "Price": 10,
      "Year": 2009,
      "Genre": "Fiction"
    },
    {
      "BookName": "Origin: A Novel (Robert Langdon)",
      "Author": "Dan Brown",
      "UserRating": 4.3,
      "Reviews": 18904,
      "Price": 13,
      "Year": 2017,
      "Genre": "Fiction"
    },
    {
      "BookName": "Orphan Train",
      "Author": "Christina Baker Kline",
      "UserRating": 4.6,
      "Reviews": 21930,
      "Price": 11,
      "Year": 2014,
      "Genre": "Fiction"
    },
    {
      "BookName": "The Serpent's Shadow (The Kane Chronicles, Book 3)",
      "Author": "Rick Riordan",
      "UserRating": 4.8,
      "Reviews": 2091,
      "Price": 12,
      "Year": 2012,
      "Genre": "Fiction"
    },
    {
      "BookName": "The Shack: Where Tragedy Confronts Eternity",
      "Author": "William P. Young",
      "UserRating": 4.6,
      "Reviews": 19720,
      "Price": 8,
      "Year": 2009,
      "Genre": "Fiction"
    },
    {
      "BookName": "The Shack: Where Tragedy Confronts Eternity",
      "Author": "William P. Young",
      "UserRating": 4.6,
      "Reviews": 19720,
      "Price": 8,
      "Year": 2017,
      "Genre": "Fiction"
    },
    {
      "BookName": "The Short Second Life of Bree Tanner: An Eclipse Novella (The Twilight Saga)",
      "Author": "Stephenie Meyer",
      "UserRating": 4.6,
      "Reviews": 2122,
      "Price": 0,
      "Year": 2010,
      "Genre": "Fiction"
    },
    {
      "BookName": "The Silent Patient",
      "Author": "Alex Michaelides",
      "UserRating": 4.5,
      "Reviews": 27536,
      "Price": 14,
      "Year": 2019,
      "Genre": "Fiction"
    },
    {
      "BookName": "The Son of Neptune (Heroes of Olympus, Book 2)",
      "Author": "Rick Riordan",
      "UserRating": 4.8,
      "Reviews": 4290,
      "Price": 10,
      "Year": 2011,
      "Genre": "Fiction"
    },
    {
      "BookName": "The President Is Missing: A Novel",
      "Author": "James Patterson",
      "UserRating": 4.3,
      "Reviews": 10191,
      "Price": 18,
      "Year": 2018,
      "Genre": "Fiction"
    },
    {
      "BookName": "The Racketeer",
      "Author": "John Grisham",
      "UserRating": 4.3,
      "Reviews": 14493,
      "Price": 18,
      "Year": 2012,
      "Genre": "Fiction"
    },
    {
      "BookName": "The Red Pyramid (The Kane Chronicles, Book 1)",
      "Author": "Rick Riordan",
      "UserRating": 4.6,
      "Reviews": 2186,
      "Price": 12,
      "Year": 2010,
      "Genre": "Fiction"
    },
    {
      "BookName": "The Mark of Athena (Heroes of Olympus, Book 3)",
      "Author": "Rick Riordan",
      "UserRating": 4.8,
      "Reviews": 6247,
      "Price": 10,
      "Year": 2012,
      "Genre": "Fiction"
    },
    {
      "BookName": "The Martian",
      "Author": "Andy Weir",
      "UserRating": 4.7,
      "Reviews": 39459,
      "Price": 9,
      "Year": 2015,
      "Genre": "Fiction"
    },
    {
      "BookName": "The Maze Runner (Book 1)",
      "Author": "James Dashner",
      "UserRating": 4.5,
      "Reviews": 10101,
      "Price": 8,
      "Year": 2014,
      "Genre": "Fiction"
    },
    {
      "BookName": "The Meltdown (Diary of a Wimpy Kid Book 13)",
      "Author": "Jeff Kinney",
      "UserRating": 4.8,
      "Reviews": 5898,
      "Price": 8,
      "Year": 2018,
      "Genre": "Fiction"
    },
    {
      "BookName": "The Pout-Pout Fish",
      "Author": "Deborah Diesen",
      "UserRating": 4.8,
      "Reviews": 9784,
      "Price": 5,
      "Year": 2017,
      "Genre": "Fiction"
    },
    {
      "BookName": "The Pout-Pout Fish",
      "Author": "Deborah Diesen",
      "UserRating": 4.8,
      "Reviews": 9784,
      "Price": 5,
      "Year": 2018,
      "Genre": "Fiction"
    },
    {
      "BookName": "The Twilight Saga Collection",
      "Author": "Stephenie Meyer",
      "UserRating": 4.7,
      "Reviews": 3801,
      "Price": 82,
      "Year": 2009,
      "Genre": "Fiction"
    },
    {
      "BookName": "The Ugly Truth (Diary of a Wimpy Kid, Book 5)",
      "Author": "Jeff Kinney",
      "UserRating": 4.8,
      "Reviews": 3796,
      "Price": 12,
      "Year": 2010,
      "Genre": "Fiction"
    },
    {
      "BookName": "The Paris Wife: A Novel",
      "Author": "Paula McLain",
      "UserRating": 4.3,
      "Reviews": 3759,
      "Price": 16,
      "Year": 2011,
      "Genre": "Fiction"
    },
    {
      "BookName": "The Elegance of the Hedgehog",
      "Author": "Muriel Barbery",
      "UserRating": 4,
      "Reviews": 1859,
      "Price": 11,
      "Year": 2009,
      "Genre": "Fiction"
    },
    {
      "BookName": "The Fault in Our Stars",
      "Author": "John Green",
      "UserRating": 4.7,
      "Reviews": 50482,
      "Price": 13,
      "Year": 2012,
      "Genre": "Fiction"
    },
    {
      "BookName": "The Fault in Our Stars",
      "Author": "John Green",
      "UserRating": 4.7,
      "Reviews": 50482,
      "Price": 13,
      "Year": 2013,
      "Genre": "Fiction"
    },
    {
      "BookName": "The Fault in Our Stars",
      "Author": "John Green",
      "UserRating": 4.7,
      "Reviews": 50482,
      "Price": 7,
      "Year": 2014,
      "Genre": "Fiction"
    },
    {
      "BookName": "The Fault in Our Stars",
      "Author": "John Green",
      "UserRating": 4.7,
      "Reviews": 50482,
      "Price": 13,
      "Year": 2014,
      "Genre": "Fiction"
    },
    {
      "BookName": "The Nightingale: A Novel",
      "Author": "Kristin Hannah",
      "UserRating": 4.8,
      "Reviews": 49288,
      "Price": 11,
      "Year": 2015,
      "Genre": "Fiction"
    },
    {
      "BookName": "The Nightingale: A Novel",
      "Author": "Kristin Hannah",
      "UserRating": 4.8,
      "Reviews": 49288,
      "Price": 11,
      "Year": 2016,
      "Genre": "Fiction"
    },
    {
      "BookName": "The Litigators",
      "Author": "John Grisham",
      "UserRating": 4.4,
      "Reviews": 6222,
      "Price": 18,
      "Year": 2011,
      "Genre": "Fiction"
    },
    {
      "BookName": "The Lost Hero (Heroes of Olympus, Book 1)",
      "Author": "Rick Riordan",
      "UserRating": 4.8,
      "Reviews": 4506,
      "Price": 14,
      "Year": 2010,
      "Genre": "Fiction"
    },
    {
      "BookName": "The Lost Symbol",
      "Author": "Dan Brown",
      "UserRating": 4.2,
      "Reviews": 8747,
      "Price": 19,
      "Year": 2009,
      "Genre": "Fiction"
    },
    {
      "BookName": "The Last Olympian (Percy Jackson and the Olympians, Book 5)",
      "Author": "Rick Riordan",
      "UserRating": 4.8,
      "Reviews": 4628,
      "Price": 7,
      "Year": 2009,
      "Genre": "Fiction"
    },
    {
      "BookName": "The Last Olympian (Percy Jackson and the Olympians, Book 5)",
      "Author": "Rick Riordan",
      "UserRating": 4.8,
      "Reviews": 4628,
      "Price": 7,
      "Year": 2010,
      "Genre": "Fiction"
    },
    {
      "BookName": "The Legend of Zelda: Hyrule Historia",
      "Author": "Patrick Thorpe",
      "UserRating": 4.9,
      "Reviews": 5396,
      "Price": 20,
      "Year": 2013,
      "Genre": "Fiction"
    },
    {
      "BookName": "Wonder",
      "Author": "R. J. Palacio",
      "UserRating": 4.8,
      "Reviews": 21625,
      "Price": 9,
      "Year": 2013,
      "Genre": "Fiction"
    },
    {
      "BookName": "Wonder",
      "Author": "R. J. Palacio",
      "UserRating": 4.8,
      "Reviews": 21625,
      "Price": 9,
      "Year": 2014,
      "Genre": "Fiction"
    },
    {
      "BookName": "Wonder",
      "Author": "R. J. Palacio",
      "UserRating": 4.8,
      "Reviews": 21625,
      "Price": 9,
      "Year": 2015,
      "Genre": "Fiction"
    },
    {
      "BookName": "Wonder",
      "Author": "R. J. Palacio",
      "UserRating": 4.8,
      "Reviews": 21625,
      "Price": 9,
      "Year": 2016,
      "Genre": "Fiction"
    },
    {
      "BookName": "Wonder",
      "Author": "R. J. Palacio",
      "UserRating": 4.8,
      "Reviews": 21625,
      "Price": 9,
      "Year": 2017,
      "Genre": "Fiction"
    },
    {
      "BookName": "Wrecking Ball (Diary of a Wimpy Kid Book 14)",
      "Author": "Jeff Kinney",
      "UserRating": 4.9,
      "Reviews": 9413,
      "Price": 8,
      "Year": 2019,
      "Genre": "Fiction"
    },
    {
      "BookName": "The Wonderful Things You Will Be",
      "Author": "Emily Winfield Martin",
      "UserRating": 4.9,
      "Reviews": 8842,
      "Price": 10,
      "Year": 2016,
      "Genre": "Fiction"
    },
    {
      "BookName": "The Wonderful Things You Will Be",
      "Author": "Emily Winfield Martin",
      "UserRating": 4.9,
      "Reviews": 8842,
      "Price": 10,
      "Year": 2017,
      "Genre": "Fiction"
    },
    {
      "BookName": "The Wonderful Things You Will Be",
      "Author": "Emily Winfield Martin",
      "UserRating": 4.9,
      "Reviews": 8842,
      "Price": 10,
      "Year": 2018,
      "Genre": "Fiction"
    },
    {
      "BookName": "The Wonderful Things You Will Be",
      "Author": "Emily Winfield Martin",
      "UserRating": 4.9,
      "Reviews": 8842,
      "Price": 10,
      "Year": 2019,
      "Genre": "Fiction"
    },
    {
      "BookName": "The Wonky Donkey",
      "Author": "Craig Smith",
      "UserRating": 4.8,
      "Reviews": 30183,
      "Price": 4,
      "Year": 2018,
      "Genre": "Fiction"
    },
    {
      "BookName": "The Wonky Donkey",
      "Author": "Craig Smith",
      "UserRating": 4.8,
      "Reviews": 30183,
      "Price": 4,
      "Year": 2019,
      "Genre": "Fiction"
    },
    {
      "BookName": "Watchmen",
      "Author": "Alan Moore",
      "UserRating": 4.8,
      "Reviews": 3829,
      "Price": 42,
      "Year": 2009,
      "Genre": "Fiction"
    },
    {
      "BookName": "Water for Elephants: A Novel",
      "Author": "Sara Gruen",
      "UserRating": 4.5,
      "Reviews": 8958,
      "Price": 12,
      "Year": 2011,
      "Genre": "Fiction"
    },
    {
      "BookName": "Where the Crawdads Sing",
      "Author": "Delia Owens",
      "UserRating": 4.8,
      "Reviews": 87841,
      "Price": 15,
      "Year": 2019,
      "Genre": "Fiction"
    },
    {
      "BookName": "Where the Wild Things Are",
      "Author": "Maurice Sendak",
      "UserRating": 4.8,
      "Reviews": 9967,
      "Price": 13,
      "Year": 2009,
      "Genre": "Fiction"
    },
    {
      "BookName": "To Kill a Mockingbird",
      "Author": "Harper Lee",
      "UserRating": 4.8,
      "Reviews": 26234,
      "Price": 0,
      "Year": 2013,
      "Genre": "Fiction"
    },
    {
      "BookName": "To Kill a Mockingbird",
      "Author": "Harper Lee",
      "UserRating": 4.8,
      "Reviews": 26234,
      "Price": 0,
      "Year": 2014,
      "Genre": "Fiction"
    },
    {
      "BookName": "To Kill a Mockingbird",
      "Author": "Harper Lee",
      "UserRating": 4.8,
      "Reviews": 26234,
      "Price": 0,
      "Year": 2015,
      "Genre": "Fiction"
    },
    {
      "BookName": "To Kill a Mockingbird",
      "Author": "Harper Lee",
      "UserRating": 4.8,
      "Reviews": 26234,
      "Price": 0,
      "Year": 2016,
      "Genre": "Fiction"
    },
    {
      "BookName": "To Kill a Mockingbird",
      "Author": "Harper Lee",
      "UserRating": 4.8,
      "Reviews": 26234,
      "Price": 7,
      "Year": 2019,
      "Genre": "Fiction"
    },
    {
      "BookName": "What Pet Should I Get? (Classic Seuss)",
      "Author": "Dr. Seuss",
      "UserRating": 4.7,
      "Reviews": 1873,
      "Price": 14,
      "Year": 2015,
      "Genre": "Fiction"
    },
    {
      "BookName": "What Should Danny Do? (The Power to Choose Series)",
      "Author": "Adir Levy",
      "UserRating": 4.8,
      "Reviews": 8170,
      "Price": 13,
      "Year": 2019,
      "Genre": "Fiction"
    },
    {
      "BookName": "Thirteen Reasons Why",
      "Author": "Jay Asher",
      "UserRating": 4.5,
      "Reviews": 7932,
      "Price": 9,
      "Year": 2017,
      "Genre": "Fiction"
    },
    {
      "BookName": "Twilight (The Twilight Saga, Book 1)",
      "Author": "Stephenie Meyer",
      "UserRating": 4.7,
      "Reviews": 11676,
      "Price": 9,
      "Year": 2009,
      "Genre": "Fiction"
    },
    {
      "BookName": "Ultimate Sticker Book: Frozen: More Than 60 Reusable Full-Color Stickers",
      "Author": "DK",
      "UserRating": 4.5,
      "Reviews": 2586,
      "Price": 5,
      "Year": 2014,
      "Genre": "Fiction"
    },
    {
      "BookName": "The Very Hungry Caterpillar",
      "Author": "Eric Carle",
      "UserRating": 4.9,
      "Reviews": 19546,
      "Price": 5,
      "Year": 2013,
      "Genre": "Fiction"
    },
    {
      "BookName": "The Very Hungry Caterpillar",
      "Author": "Eric Carle",
      "UserRating": 4.9,
      "Reviews": 19546,
      "Price": 5,
      "Year": 2014,
      "Genre": "Fiction"
    },
    {
      "BookName": "The Very Hungry Caterpillar",
      "Author": "Eric Carle",
      "UserRating": 4.9,
      "Reviews": 19546,
      "Price": 5,
      "Year": 2015,
      "Genre": "Fiction"
    },
    {
      "BookName": "The Very Hungry Caterpillar",
      "Author": "Eric Carle",
      "UserRating": 4.9,
      "Reviews": 19546,
      "Price": 5,
      "Year": 2016,
      "Genre": "Fiction"
    },
    {
      "BookName": "The Very Hungry Caterpillar",
      "Author": "Eric Carle",
      "UserRating": 4.9,
      "Reviews": 19546,
      "Price": 5,
      "Year": 2017,
      "Genre": "Fiction"
    },
    {
      "BookName": "The Very Hungry Caterpillar",
      "Author": "Eric Carle",
      "UserRating": 4.9,
      "Reviews": 19546,
      "Price": 5,
      "Year": 2018,
      "Genre": "Fiction"
    },
    {
      "BookName": "Ready Player One: A Novel",
      "Author": "Ernest Cline",
      "UserRating": 4.6,
      "Reviews": 22536,
      "Price": 12,
      "Year": 2017,
      "Genre": "Fiction"
    },
    {
      "BookName": "Ready Player One: A Novel",
      "Author": "Ernest Cline",
      "UserRating": 4.6,
      "Reviews": 22536,
      "Price": 12,
      "Year": 2018,
      "Genre": "Fiction"
    },
    {
      "BookName": "Rush Revere and the Brave Pilgrims: Time-Travel Adventures with Exceptional Americans (1)",
      "Author": "Rush Limbaugh",
      "UserRating": 4.9,
      "Reviews": 7150,
      "Price": 12,
      "Year": 2013,
      "Genre": "Fiction"
    },
    {
      "BookName": "Rush Revere and the First Patriots: Time-Travel Adventures With Exceptional Americans (2)",
      "Author": "Rush Limbaugh",
      "UserRating": 4.9,
      "Reviews": 3836,
      "Price": 12,
      "Year": 2014,
      "Genre": "Fiction"
    },
    {
      "BookName": "The Alchemist",
      "Author": "Paulo Coelho",
      "UserRating": 4.7,
      "Reviews": 35799,
      "Price": 39,
      "Year": 2014,
      "Genre": "Fiction"
    },
    {
      "BookName": "The Art of Racing in the Rain: A Novel",
      "Author": "Garth Stein",
      "UserRating": 4.7,
      "Reviews": 11813,
      "Price": 10,
      "Year": 2010,
      "Genre": "Fiction"
    },
    {
      "BookName": "The Art of Racing in the Rain: A Novel",
      "Author": "Garth Stein",
      "UserRating": 4.7,
      "Reviews": 11813,
      "Price": 10,
      "Year": 2011,
      "Genre": "Fiction"
    }
];
const booksfields=["BookName", "Author","UserRating", "Reviews", "Price", "Year", "Genre"];
const fields= ()=>{
  let data=[];
  for(let val in fiction){
    let temp=[];
    temp.push(fiction[val].BookName);
    temp.push(fiction[val].Author);
    temp.push(fiction[val].UserRating);
    temp.push(fiction[val].Reviews);
    temp.push(fiction[val].Price);
    temp.push(fiction[val].Year);
    temp.push(fiction[val].Genre);
    data.push(temp);
  }
  return data;
};
const fictiondetails=fields();
module.exports= {
  booksfields,
  fictiondetails,
};
