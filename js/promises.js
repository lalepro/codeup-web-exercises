
let wait = (timer) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Finished');
        }, timer)
    });
};


wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));




const lastCommit = username => {
    let dates = [];

    fetch(`https://api.github.com/users/${username}/repos`,
        {headers: {'Authorization': '5a3726cf46a117273f58cbfd35d21cc14dd62777'}})
        .then(response => response.json())
        .then(data => console.log(data))
        .then(repositoties => {
            repositoties.map(repo => {
                dates.push(repo.updated_at);
            });
            dates.sort();
            document.querySelector('span').innerText = new Date(dates[dates.length - 1]);
        });
};

lastCommit("lalepro");



