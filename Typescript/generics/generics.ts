function logTime<T>(num: T): T {
    console.log(new Date());
    return num;
}

function logTime2<T>(num: T): T {
    if (typeof num === 'string') {
        num.toLocaleLowerCase();
    }
    return num;
}

interface MyInterface {
    transform: <T, F>(a: T) => F
}

class MyGenClass<T> {
    value: T | undefined
}

interface TimeStamp {
    stamp: number;
}

function logTimeStamp<T extends TimeStamp>(num: T): T {
    console.log(num.stamp)
    return num
}