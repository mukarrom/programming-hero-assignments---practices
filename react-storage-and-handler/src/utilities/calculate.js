const add=(first, second) => {
    return first + second;
}


// get total price
const Total = products => {
    const reducer = (previous, current) => previous + current.price;
    const total = products.reduce(reducer,0);
    return total;
}

export {add, Total}