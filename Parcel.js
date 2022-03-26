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
                    [0, 0, 1, 0],
                    [0, 0, 1, 0],
                    [0, 0, 1, 0],
                    [0, 0, 1, 0]
                ];
                break;
            case 'O':
                result = [
                    [0, 0, 0, 0],
                    [0, 1, 1, 0],
                    [0, 1, 1, 0],
                    [0, 0, 0, 0]
                ];
                break;
            case 'T':
                result = [
                    [0, 0, 0, 0],
                    [0, 1, 1, 1],
                    [0, 0, 1, 0],
                    [0, 0, 0, 0]
                ];
                break;
            case 'J':
                result = [
                    [0, 0, 1, 0],
                    [0, 0, 1, 0],
                    [0, 1, 1, 0],
                    [0, 0, 0, 0]
                ];
                break;
            case 'L':
                result = [
                    [0, 1, 0, 0],
                    [0, 1, 0, 0],
                    [0, 1, 1, 0],
                    [0, 0, 0, 0]
                ];
                break;
            case 'S':
                result = [
                    [0, 0, 0, 0],
                    [0, 0, 1, 1],
                    [0, 1, 1, 0],
                    [0, 0, 0, 0]
                ];
                break;
            case 'Z':
                result = [
                    [0, 0, 0, 0],
                    [1, 1, 0, 0],
                    [0, 1, 1, 0],
                    [0, 0, 0, 0]
                ];
                break;
        }
        return this.rotate(result);
    }

    rotate(shape) {
        //TODO
        return shape;
    }
}