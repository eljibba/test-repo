const x: undefined = undefined;
const z: null = null

type Point = {
    x: number,
    y: number
}

type D3Point = Point & {
    z: number;
}

interface IPoint {
    x: number,
    y: number
}

interface I3DPoint extends IPoint {
    z: number;
}

interface ITest {
    a: number;
}

interface ITest {
    b: number;
}

const c = (point: IPoint) => {
    const d: I3DPoint = point as I3DPoint
}
