
user = "roland-valdez";
token = githubToken;

let gitUserEvents = fetch(`https://api.github.com/users/${user}/events`,{headers: {'Authorization': token}});
   gitUserEvents.then( response => { response.json()
    .then(events =>{
        console.log("Your last commit was on: ",events[0].created_at);
    })
})

function wait(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(), time);
    });
}

wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));