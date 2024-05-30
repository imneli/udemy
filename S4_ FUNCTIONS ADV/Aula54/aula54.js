// callback

function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
};

function f1(callback) {
    setTimeout(function() {
        console.log('f1')
        if (callback) callback();
    }, rand());
}

function f2(callback) {
    setTimeout(function() {
        if (callback) callback();
        console.log('f2')
    }, rand());
}

function f3(callback) {
    setTimeout(function() {
        if (callback) callback();
        console.log('f3')
    }, rand());
}

f1(f1Callback); //callback

function f1Callback() {
    f2(f2Callback);
}

function f2Callback() {
    f3(f3Callback);
}

function f3Callback() {
    console.log('hello world');
}
