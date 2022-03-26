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
}