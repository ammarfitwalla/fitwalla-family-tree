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
    { id: 89, name: "Amatul-Mughni Fitwalla", gender: "female", dob: "1970-06-01", deceased: false, photo: null },
    { id: 88, name: "Abdul Rehman Fitwalla", gender: "male", dob: "1968-01-01", deceased: false, photo: null },
    { id: 17, name: "Ishaque Fitwalla", gender: "male", dob: "1976-01-01", deceased: false, photo: null },
    { id: 18, name: "Shakeela Fitwalla", gender: "female", dob: "1978-01-01", deceased: false, photo: null },
    { id: 77, name: "Amatul Basit Ansari", gender: "female", dob: "1978-01-01", deceased: false, photo: null },
    { id: 78, name: "Abdul Rashid Ansari", gender: "male", dob: "1975-01-01", deceased: false, photo: null },
    { id: 19, name: "Ilyas Fitwalla", gender: "male", dob: "1978-05-01", deceased: false, photo: null },
    { id: 20, name: "Farhana Fitwalla", gender: "female", dob: "1980-01-01", deceased: false, photo: null },
    { id: 21, name: "Idrees Fitwalla", gender: "male", dob: "1980-05-01", deceased: false, photo: null },
    { id: 22, name: "Umaira Fitwalla", gender: "female", dob: "1982-01-01", deceased: false, photo: null },

    // Generation 6 & 7 - Grouped by Families

    // --- Family of Ismail Fitwalla ---
    { id: 23, name: "Moiz Fitwalla", gender: "female", dob: "1992-01-01", deceased: false, photo: null },
    { id: 46, name: "Amrah", gender: "female", dob: "2015-01-01", deceased: false, photo: null },
    { id: 47, name: "Jozi", gender: "female", dob: "2017-01-01", deceased: false, photo: null },
    { id: 48, name: "Kabsha", gender: "female", dob: "2019-01-01", deceased: false, photo: null },
    { id: 24, name: "Ovaimir Fitwalla", gender: "male", dob: "1994-01-01", deceased: false, photo: null },
    { id: 45, name: "Saima Fitwalla", gender: "female", dob: "1992-01-01", deceased: false, photo: null },
    { id: 51, name: "Zirwa Fitwalla", gender: "female", dob: "2017-01-01", deceased: false, photo: null },
    { id: 52, name: "Jibrael Fitwalla", gender: "male", dob: "2019-01-01", deceased: false, photo: null },
    { id: 25, name: "Amatul-Bar Sayyed", gender: "female", dob: "1995-01-01", deceased: false, photo: null },
    { id: 44, name: "Parvez Sayyed", gender: "male", dob: "1993-01-01", deceased: false, photo: null },
    { id: 49, name: "Kinza Sayyed", gender: "female", dob: "2016-01-01", deceased: false, photo: null },
    { id: 50, name: "Mohammad Sayyed", gender: "male", dob: "2018-01-01", deceased: false, photo: null },

    // --- Family of Amatul-Salam Siddique ---
    { id: 26, name: "Kehkashan Siddique", gender: "female", dob: "1990-01-01", deceased: false, photo: null },
    { id: 53, name: "Siddiq", gender: "male", dob: "1988-01-01", deceased: false, photo: null },
    { id: 108, name: "Nuha", gender: "female", dob: "2013-01-01", deceased: false, photo: null },
    { id: 109, name: "Suha", gender: "female", dob: "2014-01-01", deceased: false, photo: null },
    { id: 57, name: "Yusuf", gender: "male", dob: "2015-01-01", deceased: false, photo: null },
    { id: 27, name: "Shagufta Siddique", gender: "female", dob: "1992-01-01", deceased: false, photo: null },
    { id: 54, name: "Abdul Rahim", gender: "male", dob: "1990-01-01", deceased: false, photo: null },
    { id: 58, name: "Nataliya Siddique", gender: "female", dob: "2017-01-01", deceased: false, photo: null },
    { id: 110, name: "Nazaha", gender: "female", dob: "2018-01-01", deceased: false, photo: null },
    { id: 59, name: "Areeb Siddique", gender: "male", dob: "2019-01-01", deceased: false, photo: null },
    { id: 111, name: "Ashar", gender: "male", dob: "2021-01-01", deceased: false, photo: null },
    { id: 28, name: "Bushra Siddique", gender: "female", dob: "1994-01-01", deceased: false, photo: null },
    { id: 55, name: "Hassan", gender: "male", dob: "1992-01-01", deceased: false, photo: null },
    { id: 112, name: "Saffana", gender: "female", dob: "2018-01-01", deceased: false, photo: null },
    { id: 106, name: "Hud", gender: "male", dob: "2020-01-01", deceased: false, photo: null },
    { id: 107, name: "Nuh", gender: "male", dob: "2022-01-01", deceased: false, photo: null },
    { id: 113, name: "Lut", gender: "male", dob: "2024-01-01", deceased: false, photo: null },
    { id: 29, name: "Abdul-Wadood Siddique", gender: "male", dob: "1996-01-01", deceased: false, photo: null },
    { id: 56, name: "Mariyam Siddique", gender: "female", dob: "1998-01-01", deceased: false, photo: null },
    { id: 60, name: "Ishaal Siddique", gender: "female", dob: "2018-01-01", deceased: false, photo: null },
    { id: 61, name: "Minaal Siddique", gender: "female", dob: "2020-01-01", deceased: false, photo: null },
    { id: 62, name: "Fariyaal Siddique", gender: "female", dob: "2022-01-01", deceased: false, photo: null },
    { id: 87, name: "Noem Siddiqui", gender: "male", dob: "2025-01-01", deceased: false, photo: null },

    // --- Family of Amatul-Nafe Ansari ---
    { id: 30, name: "Saudah Ansari", gender: "female", dob: "1995-01-01", deceased: false, photo: null },
    { id: 63, name: "Faris Ansari", gender: "male", dob: "1993-01-01", deceased: false, photo: null },
    { id: 65, name: "AWS", gender: "male", dob: "2018-01-01", deceased: false, photo: null },
    { id: 66, name: "Aniya", gender: "female", dob: "2020-01-01", deceased: false, photo: null },
    { id: 67, name: "Zarash", gender: "female", dob: "2022-01-01", deceased: false, photo: null },
    { id: 68, name: "Vaniya", gender: "female", dob: "2024-01-01", deceased: false, photo: null },
    { id: 31, name: "Hamza Ansari", gender: "male", dob: "1997-01-01", deceased: false, photo: null },
    { id: 64, name: "Farheen Ansari", gender: "female", dob: "1995-01-01", deceased: false, photo: null },

    // --- Family of Amatul-Wasay Shaikh ---
    { id: 32, name: "Atif Shaikh", gender: "male", dob: "1996-01-01", deceased: false, photo: null },
    { id: 69, name: "Rushda", gender: "female", dob: "1998-01-01", deceased: false, photo: null },
    { id: 73, name: "Asaj", gender: "male", dob: "2020-01-01", deceased: false, photo: null },
    { id: 114, name: "Khadija", gender: "female", dob: "2022-01-01", deceased: false, photo: null },
    { id: 33, name: "Owais Shaikh", gender: "male", dob: "1998-01-01", deceased: false, photo: null },
    { id: 70, name: "Nikhat", gender: "female", dob: "2000-01-01", deceased: false, photo: null },
    { id: 74, name: "Asim", gender: "male", dob: "2022-01-01", deceased: false, photo: null },
    { id: 115, name: "Adi", gender: "male", dob: "2024-01-01", deceased: false, photo: null },
    { id: 34, name: "Muaz Shaikh", gender: "male", dob: "2000-01-01", deceased: false, photo: null },
    { id: 71, name: "Alfiya Shaikh", gender: "female", dob: "2002-01-01", deceased: false, photo: null },
    { id: 75, name: "Aisha", gender: "female", dob: "2023-01-01", deceased: false, photo: null },
    { id: 116, name: "Fatima", gender: "female", dob: "2025-01-01", deceased: false, photo: null },
    { id: 35, name: "Maria Shaikh", gender: "female", dob: "2002-01-01", deceased: false, photo: null },
    { id: 72, name: "Aaqil", gender: "male", dob: "2000-01-01", deceased: false, photo: null },
    { id: 76, name: "Abdul Kabir", gender: "male", dob: "2024-01-01", deceased: false, photo: null },

    // --- Family of Ishaque Fitwalla ---
    { id: 36, name: "Ammar Fitwalla", gender: "male", dob: "1995-04-17", deceased: false, photo: null },
    { id: 37, name: "Samreen Fitwalla", gender: "female", dob: "1996-01-01", deceased: false, photo: null },
    { id: 86, name: "Adeen Fitwalla", gender: "female", dob: "2024-11-13", deceased: false, photo: null },

    // --- Family of Amatul Basit Ansari ---
    { id: 79, name: "Souvaid Ansari", gender: "male", dob: "2000-01-01", deceased: false, photo: null },
    { id: 80, name: "Shanyaal Ansari", gender: "female", dob: "2002-01-01", deceased: false, photo: null },
    { id: 99, name: "Sinan Ansari", gender: "male", dob: "2024-01-01", deceased: false, photo: null },
    { id: 100, name: "Sheza Ansari", gender: "female", dob: "2026-01-01", deceased: false, photo: null },
    { id: 81, name: "Tasneem Ansari", gender: "female", dob: "2002-01-01", deceased: false, photo: null },
    { id: 82, name: "Wasim", gender: "male", dob: "2000-01-01", deceased: false, photo: null },
    { id: 101, name: "Masira", gender: "female", dob: "2022-01-01", deceased: false, photo: null },
    { id: 102, name: "Mariya", gender: "female", dob: "2024-01-01", deceased: false, photo: null },
    { id: 103, name: "Ibrahim", gender: "male", dob: "2026-01-01", deceased: false, photo: null },
    { id: 83, name: "Nishat Ansari", gender: "female", dob: "2004-01-01", deceased: false, photo: null },
    { id: 84, name: "Raahil", gender: "male", dob: "2002-01-01", deceased: false, photo: null },
    { id: 104, name: "Minahil", gender: "female", dob: "2024-01-01", deceased: false, photo: null },
    { id: 105, name: "Sherleez", gender: "female", dob: "2026-01-01", deceased: false, photo: null },
    { id: 85, name: "Owais Ansari", gender: "male", dob: "2006-01-01", deceased: false, photo: null },

    // --- Family of Ilyas Fitwalla ---
    { id: 38, name: "Sahi Fitwalla", gender: "female", dob: "1998-01-01", deceased: false, photo: null },
    { id: 39, name: "Irtat Fitwalla", gender: "male", dob: "2000-01-01", deceased: false, photo: null },
    { id: 40, name: "Samara Fitwalla", gender: "female", dob: "2001-01-01", deceased: false, photo: null },

    // --- Family of Idrees Fitwalla ---
    { id: 41, name: "Juana Fitwalla", gender: "female", dob: "2004-01-01", deceased: false, photo: null },
    { id: 42, name: "Tarfiya Fitwalla", gender: "female", dob: "2006-01-01", deceased: false, photo: null },
    { id: 43, name: "Shees Fitwalla", gender: "male", dob: "2008-01-01", deceased: false, photo: null },

    // --- Family of Amatul-Mughni Fitwalla ---
    { id: 90, name: "Fawziyah Fitwalla", gender: "female", dob: "1993-01-01", deceased: false, photo: null },
    { id: 91, name: "Wasim", gender: "male", dob: "1991-01-01", deceased: false, photo: null },
    { id: 92, name: "Haziqah", gender: "female", dob: "2018-01-01", deceased: false, photo: null },
    { id: 93, name: "Durrah Fitwalla", gender: "female", dob: "1995-01-01", deceased: false, photo: null },
    { id: 94, name: "Zeeshan Shaikh", gender: "male", dob: "1993-01-01", deceased: false, photo: null },
    { id: 95, name: "Ali Shaikh", gender: "male", dob: "2018-01-01", deceased: false, photo: null },
    { id: 96, name: "Adi Shaikh", gender: "male", dob: "2020-01-01", deceased: false, photo: null },
    { id: 97, name: "Affaf Shaikh", gender: "female", dob: "2022-01-01", deceased: false, photo: null },
    { id: 98, name: "Azzah Fitwalla", gender: "female", dob: "1997-01-01", deceased: false, photo: null },
    { id: 117, name: "Haala", gender: "female", dob: "2024-01-01", deceased: false, photo: null }
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
    { id: "c17", person1: 26, person2: 53, married: true }, // Kehkashan & Siddiq
    { id: "c18", person1: 27, person2: 54, married: true }, // Shagufta & Abdul Rahim
    { id: "c19", person1: 28, person2: 55, married: true }, // Bushra & Hassan
    { id: "c20", person1: 29, person2: 56, married: true }, // Abdul-Wadood
    { id: "c21", person1: 30, person2: 63, married: true }, // Saudah & Faris
    { id: "c22", person1: 31, person2: 64, married: true }, // Hamza & Farheen
    { id: "c23", person1: 32, person2: 69, married: true }, // Atif & Rushda
    { id: "c24", person1: 33, person2: 70, married: true }, // Owais & Nikhat
    { id: "c25", person1: 34, person2: 71, married: true }, // Muaz
    { id: "c26", person1: 35, person2: 72, married: true }, // Maria
    { id: "c27", person1: 78, person2: 77, married: true }, // Abdul Rashid & Amatul Basit
    { id: "c28", person1: 79, person2: 80, married: true }, // Souvaid & Shanyaal
    { id: "c29", person1: 81, person2: 82, married: true }, // Tasneem & Wasim
    { id: "c30", person1: 83, person2: 84, married: true }, // Nishat & Raahil
    { id: "c31", person1: 85, person2: null, married: false }, // Owais (single)
    { id: "c32", person1: 88, person2: 89, married: true }, // Abdul Rehman & Amatul-Mughni
    { id: "c33", person1: 90, person2: 91, married: true }, // Fawziyah & Wasim
    { id: "c34", person1: 93, person2: 94, married: true }, // Durrah & Zeeshan
    { id: "c35", person1: 98, person2: null, married: false }, // Azzah (single)
    { id: "c36", person1: 47, person2: null, married: false }  // Jozi (single)
  ],

  families: [
    { parentCouple: "c1", children: [3] },
    { parentCouple: "c2", children: [5] },
    { parentCouple: "c3", children: [7] },
    { parentCouple: "c4", children: [9, 11, 89, 77, 13, 15, 17, 19, 21] },
    { parentCouple: "c5", children: [23, 24, 25] }, // Ismail's kids
    { parentCouple: "c15", children: [46, 47, 48] }, // Moiz's kids
    { parentCouple: "c12", children: [49, 50] },    // Amatul-Bar's kids
    { parentCouple: "c16", children: [51, 52] },    // Saima's kids
    { parentCouple: "c6", children: [26, 27, 28, 29] },
    { parentCouple: "c17", children: [108, 109, 57] }, // Kehkashan's kids
    { parentCouple: "c18", children: [58, 110, 59, 111] }, // Shagufta's kids
    { parentCouple: "c20", children: [60, 61, 62, 87] }, // Abdul-Wadood's kids
    { parentCouple: "c7", children: [30, 31] }, // Amatul-nafe's kids
    { parentCouple: "c21", children: [65, 66, 67, 68] }, // Saudah's kids
    { parentCouple: "c8", children: [32, 33, 34, 35] }, // Amatul-Waasay's kids
    { parentCouple: "c23", children: [73, 114] }, // Atif's kids
    { parentCouple: "c24", children: [74, 115] }, // Owais's kids
    { parentCouple: "c25", children: [75, 116] }, // Muaz's kids
    { parentCouple: "c26", children: [76] }, // Maria's kids
    { parentCouple: "c9", children: [36] }, // Ishaque's kids
    { parentCouple: "c10", children: [38, 39, 40] }, // Ilyas's kids
    { parentCouple: "c11", children: [41, 42, 43] }, // Idrees's kids
    { parentCouple: "c27", children: [79, 81, 83, 85] }, // Amatul Basit's kids
    { parentCouple: "c13", children: [86] }, // Ishaque Fitwalla's Grandchildren
    { parentCouple: "c32", children: [90, 93, 98] }, // Amatul-Mughni's kids
    { parentCouple: "c33", children: [92] },          // Fawziyah's kids
    { parentCouple: "c34", children: [95, 96, 97] },   // Durrah's kids
    { parentCouple: "c19", children: [112, 106, 107, 113] },    // Bushra's kids
    { parentCouple: "c28", children: [99, 100] },     // Souvaid's kids
    { parentCouple: "c29", children: [101, 102, 103] }, // Tasneem's kids
    { parentCouple: "c30", children: [104, 105] },     // Nishat's kids
    { parentCouple: "c36", children: [117] }           // Jozi's kids
  ]
};
