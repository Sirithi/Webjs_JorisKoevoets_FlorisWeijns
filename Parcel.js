export class Parcel {
    static I = new Parcel('I');
    static O = new Parcel('O');
    static T = new Parcel('T');
    static J = new Parcel('J');
    static L = new Parcel('L');
    static S = new Parcel('S');
    static Z = new Parcel('Z');

    constructor(type) {
        this.type = type;
    }

    shape() {
        let result;
        switch (this.type) {
            case 'I':
                result = [
                    [1],
                    [1],
                    [1],
                    [1]
                ];
                break;
            case 'O':
                result = [
                    [1, 1,],
                    [1, 1,]
                ];
                break;
            case 'T':
                result = [
                    [1, 1, 1],
                    [0, 1, 0]
                ];
                break;
            case 'J':
                result = [
                    [0, 1],
                    [0, 1],
                    [1, 1]
                ];
                break;
            case 'L':
                result = [
                    [1, 0,],
                    [1, 0,],
                    [1, 1,]
                ];
                break;
            case 'S':
                result = [
                    [0, 1, 1],
                    [1, 1, 0]
                ];
                break;
            case 'Z':
                result = [
                    [1, 1, 0],
                    [0, 1, 1]
                ];
                break;
        }

        const numberOfRotations = Math.floor(Math.random() * 4);
        console.log('numberOfRotations: ' + numberOfRotations);
        return this.randomRotate(result, numberOfRotations);
    }

    randomRotate(shape, numberOfRotations) {
        if (numberOfRotations === 0) {
            return shape;
        }
        console.log('rotate');
        let rotatedShape = [];
        for (let x = 0; x < shape[0].length; x++) {
            let row = []
            for (let y = shape.length - 1; y >= 0; y--) {
                row.push(shape[y][x]);
            }
            rotatedShape.push(row);
        }

        // rotatedShape = [
        //     [shape[3][0], shape[2][0], shape[1][0], shape[0][0]],
        //     [shape[3][1], shape[2][1], shape[1][1], shape[0][1]],
        //     [shape[3][2], shape[2][2], shape[1][2], shape[0][2]],
        //     [shape[3][3], shape[2][3], shape[1][3], shape[0][3]],
        // ]

        return this.randomRotate(rotatedShape, numberOfRotations - 1);
    }
}