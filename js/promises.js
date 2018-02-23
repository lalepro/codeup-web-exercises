"use-strict";

let wait = (timer) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Finished, Your promise resolved after ' + timer + " milliseconds.");
        }, timer)
    });
};


wait(1000).then((data) => console.log(data));
wait(3000).then((data) => console.log(data));
wait(3500).then((data) => console.log(data));


const lastCommit = username => {
    return fetch(`https://api.github.com/users/${username}/events`,
        {headers: {'Authorization': '5a3726cf46a117273f58cbfd35d21cc14dd62777'}})
        .then(response => response.json())
        .then(events => events[0].created_at);
};


//
// const lastCommitPromise = lastCommit("lalepro");
//
//
// lastCommitPromise.then(lastCommitDate => {
//     console.log(lastCommitDate);
//     document.querySelector('span').innerText = lastCommitDate;
// });

const users = [
    {name: 'Laura', username: 'lalepro'},
    {name: 'Zach', username: 'zgulde'},
    {name: 'Ryan', username: 'ryanorsinger'},
    {name: 'Kelsy', username: 'kelseyhightower'}
];

users.forEach(user => {
    lastCommit(user.username).then(lastCommitDate => {
        console.log(`${user.name}'s last commit was ${lastCommitDate}`);
    });
});





