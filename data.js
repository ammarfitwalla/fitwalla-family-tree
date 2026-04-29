const familyData = {
  people: [
    // Generation 1
    { id: 1, name: "Khan Mohammad Fitwalla", gender: "male", dob: "1860-01-01", deceased: true, photo: null },
    { id: 2, name: "Mother of Ibrahim", gender: "female", dob: "1865-01-01", deceased: true, photo: null },

    // Generation 2
    { id: 3, name: "Ibrahim Fitwalla", gender: "male", dob: "1885-01-01", deceased: true, photo: null },
    { id: 4, name: "Mother of Abdul-Rahman", gender: "female", dob: "1890-01-01", deceased: true, photo: null },

    // Generation 3
    { id: 5, name: "Abdul-Rahman Fitwalla", gender: "male", dob: "1915-01-01", deceased: true, photo: null },
    { id: 6, name: "Fatima Fitwalla", gender: "female", dob: "1920-01-01", deceased: true, photo: null },

    // Generation 4
    { id: 7, name: "Ibrahim Fitwalla", gender: "male", dob: "1945-01-01", deceased: true, photo: null },
    { id: 8, name: "Fatima Fitwalla", gender: "female", dob: "1950-01-01", deceased: true, photo: null },

    // Generation 5 - Children of Ibrahim & Fatima
    { id: 9, name: "Ismail Fitwalla", gender: "male", dob: "1968-01-01", deceased: false, photo: null },
    { id: 10, name: "Farzana Fitwalla", gender: "female", dob: "1970-01-01", deceased: false, photo: null },
    { id: 11, name: "Amatul-Salam Siddique", gender: "female", dob: "1970-06-01", deceased: false, photo: null },
    { id: 12, name: "Majid Siddique", gender: "male", dob: "1968-05-01", deceased: false, photo: null },
    { id: 13, name: "Amatul-Nafe Ansari", gender: "female", dob: "1972-01-01", deceased: false, photo: null },
    { id: 14, name: "Usman Ansari", gender: "male", dob: "1970-01-01", deceased: false, photo: null },
    { id: 15, name: "Amatul-Wasay Shaikh", gender: "female", dob: "1974-01-01", deceased: false, photo: null },
    { id: 16, name: "Faheem Shaikh", gender: "male", dob: "1972-01-01", deceased: false, photo: null },
    { id: 17, name: "Ishaque Fitwalla", gender: "male", dob: "1976-01-01", deceased: false, photo: null },
    { id: 18, name: "Shakeela Fitwalla", gender: "female", dob: "1978-01-01", deceased: false, photo: null },
    { id: 19, name: "Ilyas Fitwalla", gender: "male", dob: "1978-05-01", deceased: false, photo: null },
    { id: 20, name: "Farzana Fitwalla", gender: "female", dob: "1980-01-01", deceased: false, photo: null },
    { id: 21, name: "Idrees Fitwalla", gender: "male", dob: "1980-05-01", deceased: false, photo: null },
    { id: 22, name: "Umaira Fitwalla", gender: "female", dob: "1982-01-01", deceased: false, photo: null },

    // Generation 6 - Grandchildren
    // Ismail's children
    { id: 23, name: "Moiz Fitwalla", gender: "female", dob: "1992-01-01", deceased: false, photo: null },
    { id: 24, name: "Ovaimir Fitwalla", gender: "male", dob: "1994-01-01", deceased: false, photo: null },
    { id: 25, name: "Amatul-Bar Sayyed", gender: "female", dob: "1995-01-01", deceased: false, photo: null },
    { id: 44, name: "Parvez Sayyed", gender: "male", dob: "1993-01-01", deceased: false, photo: null },
    { id: 45, name: "Saima Fitwalla", gender: "female", dob: "1992-01-01", deceased: false, photo: null },

    // Generation 7
    { id: 46, name: "Amrah", gender: "female", dob: "2015-01-01", deceased: false, photo: null },
    { id: 47, name: "Jozi", gender: "female", dob: "2017-01-01", deceased: false, photo: null },
    { id: 48, name: "Kafshah", gender: "female", dob: "2019-01-01", deceased: false, photo: null },
    { id: 49, name: "Kinza Sayyed", gender: "female", dob: "2016-01-01", deceased: false, photo: null },
    { id: 50, name: "Mohammad Sayyed", gender: "male", dob: "2018-01-01", deceased: false, photo: null },
    { id: 51, name: "Zirwa Fitwalla", gender: "female", dob: "2017-01-01", deceased: false, photo: null },
    { id: 52, name: "Jibrael Fitwalla", gender: "male", dob: "2019-01-01", deceased: false, photo: null },

    // Amatul-Salam's children
    { id: 26, name: "Kaikashah Siddique", gender: "female", dob: "1990-01-01", deceased: false, photo: null },
    { id: 27, name: "Shagufta Siddique", gender: "female", dob: "1992-01-01", deceased: false, photo: null },
    { id: 28, name: "Bushra Siddique", gender: "female", dob: "1994-01-01", deceased: false, photo: null },
    { id: 29, name: "Abdul-Wadood Siddique", gender: "male", dob: "1996-01-01", deceased: false, photo: null },
    { id: 53, name: "Partner of Kaikashah", gender: "male", dob: "1988-01-01", deceased: false, photo: null },
    { id: 54, name: "Partner of Shagufta", gender: "male", dob: "1990-01-01", deceased: false, photo: null },
    { id: 55, name: "Partner of Bushra", gender: "male", dob: "1992-01-01", deceased: false, photo: null },
    { id: 56, name: "Mariyam Siddique", gender: "female", dob: "1998-01-01", deceased: false, photo: null },

    // Generation 7 - Amatul-Salam's Grandchildren
    { id: 57, name: "Child of Kaikashah", gender: "female", dob: "2015-01-01", deceased: false, photo: null },
    { id: 58, name: "Natalia Siddique", gender: "female", dob: "2017-01-01", deceased: false, photo: null },
    { id: 59, name: "Areeb Siddique", gender: "male", dob: "2019-01-01", deceased: false, photo: null },
    { id: 60, name: "Ishaal Siddique", gender: "female", dob: "2018-01-01", deceased: false, photo: null },
    { id: 61, name: "Minaal Siddique", gender: "female", dob: "2020-01-01", deceased: false, photo: null },
    { id: 62, name: "Fariyaal Siddique", gender: "female", dob: "2022-01-01", deceased: false, photo: null },

    // Amatul-Kafi's children (Corrected to Amatul-nafe)
    { id: 30, name: "Saudah Ansari", gender: "female", dob: "1995-01-01", deceased: false, photo: null },
    { id: 31, name: "Hamza Ansari", gender: "male", dob: "1997-01-01", deceased: false, photo: null },
    { id: 63, name: "Faris Ansari", gender: "male", dob: "1993-01-01", deceased: false, photo: null },
    { id: 64, name: "Farheen Ansari", gender: "female", dob: "1995-01-01", deceased: false, photo: null },

    // Generation 7 - Amatul-nafe's Grandchildren
    { id: 65, name: "Oodh Ansari", gender: "male", dob: "2018-01-01", deceased: false, photo: null },
    { id: 66, name: "Daughter of Saudah", gender: "female", dob: "2020-01-01", deceased: false, photo: null },
    { id: 67, name: "Daughter of Saudah", gender: "female", dob: "2022-01-01", deceased: false, photo: null },
    { id: 68, name: "Daughter of Faris", gender: "female", dob: "2024-01-01", deceased: false, photo: null },

    // Amatul-Wasay's children (Corrected to Amatul-Waasay)
    { id: 32, name: "Atif Shaikh", gender: "male", dob: "1996-01-01", deceased: false, photo: null },
    { id: 33, name: "Owais Shaikh", gender: "male", dob: "1998-01-01", deceased: false, photo: null },
    { id: 34, name: "Muaz Shaikh", gender: "male", dob: "2000-01-01", deceased: false, photo: null },
    { id: 35, name: "Maria Shaikh", gender: "female", dob: "2002-01-01", deceased: false, photo: null },
    { id: 69, name: "Partner of Atif", gender: "female", dob: "1998-01-01", deceased: false, photo: null },
    { id: 70, name: "Partner of Owais", gender: "female", dob: "2000-01-01", deceased: false, photo: null },
    { id: 71, name: "Alfiya Shaikh", gender: "female", dob: "2002-01-01", deceased: false, photo: null },
    { id: 72, name: "Partner of Maria", gender: "male", dob: "2000-01-01", deceased: false, photo: null },

    // Generation 7 - Amatul-Waasay's Grandchildren
    { id: 73, name: "Son of Atif", gender: "male", dob: "2020-01-01", deceased: false, photo: null },
    { id: 74, name: "Son of Owais", gender: "male", dob: "2022-01-01", deceased: false, photo: null },
    { id: 75, name: "Daughter of Muaz", gender: "female", dob: "2023-01-01", deceased: false, photo: null },
    { id: 76, name: "Son of Maria", gender: "male", dob: "2024-01-01", deceased: false, photo: null },

    // Ishaque's children
    { id: 36, name: "Ammar Fitwalla", gender: "male", dob: "1995-04-17", deceased: false, photo: null },
    { id: 37, name: "Samreen Fitwalla", gender: "female", dob: "1996-01-01", deceased: false, photo: null },

    // Ilyas's children
    { id: 38, name: "Sahi Fitwalla", gender: "female", dob: "1998-01-01", deceased: false, photo: null },
    { id: 39, name: "Irtat Fitwalla", gender: "male", dob: "2000-01-01", deceased: false, photo: null },
    { id: 40, name: "Samara Fitwalla", gender: "female", dob: "2001-01-01", deceased: false, photo: null },

    // Idrees's children
    { id: 41, name: "Juana Fitwalla", gender: "female", dob: "2004-01-01", deceased: false, photo: null },
    { id: 42, name: "Tarfiya Fitwalla", gender: "male", dob: "2006-01-01", deceased: false, photo: null },
    { id: 43, name: "Shees Fitwalla", gender: "male", dob: "2008-01-01", deceased: false, photo: null },

    // Generation 5 - Amatul Basit (child of Ibrahim & Fatima)
    { id: 77, name: "Amatul Basit", gender: "female", dob: "1978-01-01", deceased: false, photo: null },
    { id: 78, name: "Abdul Rashid", gender: "male", dob: "1975-01-01", deceased: false, photo: null },

    // Generation 6 - Children of Amatul Basit & Abdul Rashid
    { id: 79, name: "Souvaid", gender: "male", dob: "2000-01-01", deceased: false, photo: null },
    { id: 80, name: "Shanyaal", gender: "female", dob: "2002-01-01", deceased: false, photo: null },
    { id: 81, name: "Tasneem", gender: "female", dob: "2002-01-01", deceased: false, photo: null },
    { id: 82, name: "Tasneem Partner", gender: "male", dob: "2000-01-01", deceased: false, photo: null },
    { id: 83, name: "Nishat", gender: "female", dob: "2004-01-01", deceased: false, photo: null },
    { id: 84, name: "Nishat Partner", gender: "male", dob: "2002-01-01", deceased: false, photo: null },
    { id: 85, name: "Owaise", gender: "male", dob: "2006-01-01", deceased: false, photo: null }
  ],

  couples: [
    { id: "c1", person1: 1, person2: 2, married: true },
    { id: "c2", person1: 3, person2: 4, married: true },
    { id: "c3", person1: 5, person2: 6, married: true },
    { id: "c4", person1: 7, person2: 8, married: true },
    { id: "c5", person1: 9, person2: 10, married: true },
    { id: "c6", person1: 12, person2: 11, married: true }, // Majeed & Amatul-Salam
    { id: "c7", person1: 14, person2: 13, married: true }, // Usman & Amatul-Nafe
    { id: "c8", person1: 16, person2: 15, married: true }, // Faheem & Amatul-Wasay
    { id: "c9", person1: 17, person2: 18, married: true },
    { id: "c10", person1: 19, person2: 20, married: true }, // Ilyas & Farhana
    { id: "c11", person1: 21, person2: 22, married: true }, // Idrees & Umaira
    { id: "c12", person1: 25, person2: 44, married: true }, // Amatul-Bar & Parvez
    { id: "c13", person1: 36, person2: 37, married: true }, // Ammar & Samreen
    { id: "c15", person1: 23, person2: null, married: false }, // Moiz (Single Parent)
    { id: "c16", person1: 24, person2: 45, married: true },  // Ovaimir & Saima
    { id: "c17", person1: 26, person2: 53, married: true }, // Kaikashah
    { id: "c18", person1: 27, person2: 54, married: true }, // Shagufta
    { id: "c19", person1: 28, person2: 55, married: true }, // Bushra
    { id: "c20", person1: 29, person2: 56, married: true }, // Abdul-Wadood
    { id: "c21", person1: 30, person2: 63, married: true }, // Saudah & Faris
    { id: "c22", person1: 31, person2: 64, married: true }, // Hamza & Farheen
    { id: "c23", person1: 32, person2: 69, married: true }, // Atif
    { id: "c24", person1: 33, person2: 70, married: true }, // Owais
    { id: "c25", person1: 34, person2: 71, married: true }, // Muaz
    { id: "c26", person1: 35, person2: 72, married: true }, // Maria
    { id: "c27", person1: 78, person2: 77, married: true }, // Abdul Rashid & Amatul Basit
    { id: "c28", person1: 79, person2: 80, married: true }, // Souvaid & Shanyaal
    { id: "c29", person1: 81, person2: 82, married: true }, // Tasneem & partner
    { id: "c30", person1: 83, person2: 84, married: true }, // Nishat & partner
    { id: "c31", person1: 85, person2: null, married: false } // Owaise (single)
  ],

  families: [
    { parentCouple: "c1", children: [3] },
    { parentCouple: "c2", children: [5] },
    { parentCouple: "c3", children: [7] },
    { parentCouple: "c4", children: [9, 11, 13, 15, 17, 19, 21, 77] },
    { parentCouple: "c5", children: [23, 24, 25] }, // Ismail's kids
    { parentCouple: "c15", children: [46, 47, 48] }, // Moiz's kids
    { parentCouple: "c12", children: [49, 50] },    // Amatul-Bar's kids
    { parentCouple: "c16", children: [51, 52] },    // Saima's kids
    { parentCouple: "c6", children: [26, 27, 28, 29] },
    { parentCouple: "c17", children: [57] }, // Kaikashah's kids
    { parentCouple: "c18", children: [58, 59] }, // Shagufta's kids
    { parentCouple: "c20", children: [60, 61, 62] }, // Abdul-Wadood's kids
    { parentCouple: "c7", children: [30, 31] }, // Amatul-nafe's kids
    { parentCouple: "c21", children: [65, 66, 67, 68] }, // Saudah's kids
    { parentCouple: "c8", children: [32, 33, 34, 35] }, // Amatul-Waasay's kids
    { parentCouple: "c23", children: [73] }, // Atif's kids
    { parentCouple: "c24", children: [74] }, // Owais's kids
    { parentCouple: "c25", children: [75] }, // Muaz's kids
    { parentCouple: "c26", children: [76] }, // Maria's kids
    { parentCouple: "c9", children: [36] }, // Ishaque's kids
    { parentCouple: "c10", children: [38, 39, 40] }, // Ilyas's kids
    { parentCouple: "c11", children: [41, 42, 43] }, // Idrees's kids
    { parentCouple: "c27", children: [79, 81, 83, 85] } // Amatul Basit's kids
  ]
};
