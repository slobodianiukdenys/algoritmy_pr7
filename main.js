let queue = [3, 63, 15, 28, 44, 56];

function count(){
    let i = queue.length;
    console.log(i)
}

function push(x){
    queue.unshift(x);
}

function pop(){
    let i = queue.length - 1;
    console.log(queue[i]);
    queue.splice(i, 1);
}

function toString(){
    console.log(queue)
}


// count()
// push(34)
// pop()
toString()
