export function drawParcel(ctx, parcel) {
    const shape = parcel.shape()
    for (let row = 0; row < shape.length; row++) {
        for (let cell = 0; cell < shape[row].length; cell++) {
            if(shape[row][cell]) {
                ctx.fillRect(cell, row, 1, 1);
            }
        }
    }
}