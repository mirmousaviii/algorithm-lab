type Counter = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

function createCounter(init: number): Counter {
    let currentValue = init;

    return {
        increment: () => {
            currentValue++;
            return currentValue;
        },
        decrement: () => {
            currentValue--;
            return currentValue;
        },
        reset: () => {
            currentValue = init;
            return currentValue;
        }
    };
};


const counter = createCounter(5)

console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4
 
