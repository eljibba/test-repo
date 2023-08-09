let a: number = 4;
let b = 'sdfsdf';

let d: string[] = ['sdf', '123']

let e: any = 34;
e = 'sdf'

function test(a: string): number | string {
    return '123';
}

const test2 = (a: number) => {
    return a*2
}

d = d.map(x => x.toLocaleLowerCase())

function countCord(coord: {lat: number, long?: number}) {

}

function printIt(id: number | string) {
    if (typeof id === 'number') {
        console.log(id.toString());
    } else if (typeof id === 'string') {
        id.toUpperCase();
    }
}

function getSum(a: number | number[]) {
    if (Array.isArray(a)) {
        return a
    }
}