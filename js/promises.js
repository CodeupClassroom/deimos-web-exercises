"use strict";

(() => {

    // Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.

    const wait = num => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, num);
        });
    };

    wait(1000).then(() => console.log('You\'ll see this after 1 second'));
    wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

    // Create a function that accepts a GitHub username, and returns a promise that resolves with the date of the last commit that user made.

    const lastCommit = (username) => {
        fetch(`https://api.github.com/users/${username}/events`, {headers: {"Authorization": `token ${gitHubKey}`}})
            .then(resp => resp.json())
            .then(data => data.find(event => event.type === "PushEvent"))
            .then(event => event.created_at)
            .then(date => console.log(date));
    };

    lastCommit("davidandstephens");

})();