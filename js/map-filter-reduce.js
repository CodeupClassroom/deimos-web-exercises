"use strict";

(() => {

    const users = [
        {
            id: 1,
            name: 'ryan',
            email: 'ryan@codeup.com',
            languages: ['clojure', 'javascript'],
            yearsOfExperience: 5
        },
        {
            id: 2,
            name: 'luis',
            email: 'luis@codeup.com',
            languages: ['java', 'scala', 'php'],
            yearsOfExperience: 6
        },
        {
            id: 3,
            name: 'zach',
            email: 'zach@codeup.com',
            languages: ['javascript', 'bash'],
            yearsOfExperience: 7
        },
        {
            id: 4,
            name: 'fernando',
            email: 'fernando@codeup.com',
            languages: ['java', 'php', 'sql'],
            yearsOfExperience: 8
        },
        {
            id: 5,
            name: 'justin',
            email: 'justin@codeup.com',
            languages: ['html', 'css', 'javascript', 'php'],
            yearsOfExperience: 9
        }
    ];

    // Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

    let atLeastThree = users.filter((user) => user.languages.length >= 3);

    console.log(atLeastThree);

    // Use .map to create an array of strings where each element is a user's email address
    let emails = users.map(user => user.email);

    console.log(emails);

    // Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

    let totalYearsOfExperience = users.reduce((total, user) => {
        return total + user.yearsOfExperience;
    }, 0);

    let averageExp = totalYearsOfExperience / users.length;

    console.log(totalYearsOfExperience);
    console.log(averageExp);

    // Use .reduce to get the longest email from the list of users.

    let longestEmail = users.reduce((longest, user) => {
        if (user.email.length > longest.length) {
            return user.email;
        } else {
            return longest;
        }
    }, "");

    console.log(longestEmail);

    // Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

    let instructors = users.reduce((str, user) => {
        return `${str}, ${user.name}`
    }, "Your instructors are: david s, sophie, vivian, trant") + ".";

    console.log(instructors);

    let listOfLanguages = Array.from(users.reduce((accumulator, user) => {
        user.languages.forEach(language => accumulator.add(language));
        return accumulator;
    }, new Set()));

    console.log(listOfLanguages);

//     //BONUS
// //gets unique values
//     const getUnique = n => {
//         let temp = [];
//         n.forEach(item => {
//             if (!temp.includes(item)){
//                 temp.push(item);
//             }
//         });
//         return temp
//     };
// //gets all values then passes the result into getUnique to filter.
//     const unqLangs = getUnique(users.reduce((langs, current) => {
//         return `${langs},${current.languages}`;
//     }, "Unique languages: ").split(","));
//     console.log(unqLangs);
})();