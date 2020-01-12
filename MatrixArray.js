class MatrixArray{
    constructor(sketchMatrix) {
        this.sketchMatrix = new Matrix;
        console.log("MatrixArray::init()");
        this.sketchMatrix = sketchMatrix;
        let matrixArray = []
    }
}

/* trim the front, back, up, down of the matrix
input: sketchMatrix - untrimmed, type: Matrix
output: tSketchMatrix - trimmed, type: Matrix
*/
function trim(sketchMatrix){
    let tSketchMatrix = new Matrix; // todo pretend we are using a 2d array to represent the matrix atm
    tSketchMatrix = trimFront(sketchMatrix);
    tSketchMatrix = trimBack(tsketchMatrix);
    tSketchMatrix = trimUp(tsketchMatrix);
    tSketchMatrix = trimDown(tsketchMatrix);

    return tSketchMatrix;
}

function trimFront(sketchMatrix){
    // todo helper to trip the matrix
    return tSketchMatrix;
}

function trimBack(tSketchMatrix){
    // todo helper to trip the back of the matrix
    return tSketchMatrix;
}

function trimUp(tSketchMatrix){
    // todo helper to trip the back of the matrix
    return tSketchMatrix;
}

function trimDown(tSketchMatrix){
    // todo helper to trip the back of the matrix
    return tSketchMatrix;
}

/* convert the trimmed Matrix into Array form
 input: tSketchMatrix, type: Matrix
 output: matrixArray, type: Array
 */
function convertMatrixToArray(tSketchMatrix, matrixArray){
    let matrix = tSketchMatrix;
    let width = matrix.width;
    let height = matrix.height;

    // todo check the x-axis of the matrix
    for (x = 0; x < width; x++){
        let pushed = false;
        for (y = 0; y < height; y++){
            if (matrix[x][y] === 1){
                if (pushed === false) {
                    matrixArray.push(y);
                    pushed = true;
                } else {
                    continue;
                }
            }else if (matrix[x][y] === 0){
                continue;
            }
        }
        if (pushed === false){
            matrixArray.push(-999);
            pushed = true;
        }
    }
    // todo If 1 -> add y-axis value(s) into array
    // todo if 0 -> add -999 into array
    return matrixArray;
}

/* reduce datapoints by averaging out (4)neighbouring pixels
input: matrixArray
output: condensedArray
 */
function compressArray(matrixArray){
    let condensedArray;
    // todo if val > -1, take the average of negihbouring 4 pixels
    // todo if val = -1(space), leave it so that it is a pause
    return condensedArray;
}

