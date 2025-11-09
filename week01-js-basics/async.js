function fetchUser() {
    return new Promise(resolve => {
        setTimeout(()=> resolve({name: "Laci", age: 44}), 1000)
    });
}

async function main() {
    console.log("Adatok betoltese ...");
    const user = await fetchUser();
    console.log("Felhasznalo:", user);
    
}

main();

// this is going to run earlier than the fetchuser returns
console.log("Start")
// this is going to be the last as it waits 1000 ms, but was fired a bit later than the fetchuser
setTimeout(()=> console.log("1 second passed"), 1000)
// this is also going to be running earlier than the fetchuser
console.log("End")
