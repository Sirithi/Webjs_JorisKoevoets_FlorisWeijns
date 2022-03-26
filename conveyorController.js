export function drawParcel(ctx, parcel) {
    console.log(ctx);
    const shape = parcel.shape()
    console.log(shape);
    for (let row = 0; row < shape.length; row++) {
        console.log(shape[row]);
        for (let cell = 0; cell < shape[row].length; cell++) {
            if(shape[row][cell]) {
                ctx.fillRect(cell, row, 1, 1);
            }
        }
    }
}