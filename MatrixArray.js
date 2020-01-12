class MatrixArray{
    constructor(sketchMatrix) {
        this.sketchMatrix = new Matrix;
        console.log("MatrixArray::init()");
        this.sketchMatrix = sketchMatrix;
        let matrixArray = []
    }
}

/* trim the front, back sketchArray
input: sketchArray - untrimmed, type: Array
output: tSketchArray - trimmed, type: Matrix
*/
function convertMatrixToArray(tSketchMatrix){
    let matrix = tSketchMatrix;
    let matrixArray = [];
    // let width = matrix.width;
    // let height = matrix.height;
    let width =100;
    let height =100;

    // todo check the x-axis of the matrix
    for (x = 0; x < width; x++){
        let pushed = false;
        let innerArray = [];
        for (y = 0; y < height; y++){
            // console.log("x = " + x);
            // console.log("y = " + y);
            // console.log("matrix[x][y] =" + matrix[x][y]);
            if (matrix[x][y] === 1){
                // if (pushed === false) {
                //   // console.log("added 1");
                //   matrixArray.push(y);
                //   pushed = true;
                // } else if (pushed === true){
                //   continue;
                // }
                innerArray.push(y);
            }else if (matrix[x][y] === 0){
                continue;
            }
            matrixArray.push(innerArray);
        }
        if (pushed === false){
            matrixArray.push(null);
            // console.log("added null");
            pushed = true;
        }
    }
    return matrixArray;
}

function trimArray(sketchArray){
    let tfSketchArray = trimFront(sketchArray);
    return trimBack(tfSketchArray);
}

function trimFront(sketchArray){
    let array = sketchArray;
    let front = 0;
    for (i = 0; i < array.length; i++){
        if (array[i] !== null){
            front = i;
            break;
        }
    }
    array = array.slice(front,array.length + 1);
    console.log(array);
    return array;
}

function trimBack(tSketchArray){
    let array = tSketchArray;
    let back = array.length;
    for (i = back - 1; i >= 0; i--){
        if (array[i] !== null){
            back = i;
            break;
        }
    }
    array = array.slice(0,back + 1);
    return array;
}
/* reduce datapoints by averaging out (4)neighbouring pixels
input: matrixArray
output: condensedArray
 */
function condenseArray(trimmedArray){
    let condensedArray = [];
    let array = trimmedArray;
    let smallArray = [];
    let count = 0;
    // todo if val != null, take the average of negihbouring 4 pixels
    // todo if val = null(space), leave it so that it is a pause
    for (i = 0; i < array.length; i++){
        if (array[i] !== null){
            if(count < 5){
                smallArray.push(array[i])
            }else{
                condensedArray.push(smallArray);
                smallArray = [];
                smallArray.push(array[i]);

            }
        }else{
            condensedArray.push(null);
        }
    }
    return condensedArray;
}

