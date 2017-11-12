function calc(x, resolve, reject) {
    setTimeout(function () {
        resolve(2 * x);
    }, Math.random() * 1000);
}

let promises = [];

for (let x = 0; x < 10; x++) {
    const promise = new Promise(function (resolve, reject) {
        calc(x, resolve, reject);
    });

    promises.push(promise);
}

Promise.all(promises).then(values => {
    console.log(values.join('\n'));
});
