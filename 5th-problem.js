

const milis = 100;

async function test() {
    const sleep = new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log("Done");
            resolve();
        }, milis);
    });

    await sleep;
}

test();




