function compareTriplets(a, b) {
    // Write your code here
    let alice = 0;
    let bob = 0;
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; i < b.length; i++) {
            if (a[i] > b[i]) {
                alice++;
            } else if (a[i] < b[i]) {
                bob++
            } else if (a[i] === b[i]) {
                alice = alice + 0;
                bob = bob + 0;
            }
        }
    }
    // return [alice, bob];
    console.log([alice, bob])
}


compareTriplets([5, 6, 7], [3, 6, 10])



