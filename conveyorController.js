export function drawParcel(ctx, parcel) {
    console.log(ctx);
    const shape = parcel.shape()
    console.log(shape);
    for (let row = 0; row < shape.length; row++) {
        for (let cell = 0; cell < shape[row].length; cell++) {
            if(shape[row][cell] === 1) {
                ctx.fillRect(row * BLOCK_SIZE, cell * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
            }
        }
    }
}