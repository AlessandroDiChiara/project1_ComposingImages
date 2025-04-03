// Returns a 3x3 transformation matrix as an array of 9 values in column-major order.
// The transformation first applies scale, then rotation, and finally translation.
// The given rotation value is in degrees.
function GetTransform(positionX, positionY, rotation, scale) {
    let radians = rotation * Math.PI / 180; // Converti i gradi in radianti
    let cos = Math.cos(radians);
    let sin = Math.sin(radians);

    return [
        scale * cos,  scale * sin,  0,  // Prima colonna
       -scale * sin,  scale * cos,  0,  // Seconda colonna
        positionX,    positionY,    1   // Terza colonna (traslazione)
    ];
}

// Returns a 3x3 transformation matrix as an array of 9 values in column-major order.
// The arguments are transformation matrices in the same format.
// The returned transformation first applies trans1 and then trans2.
function ApplyTransform(trans1, trans2) {
    let result = new Array(9);

  
    for (let col = 0; col < 3; col++) {  
        for (let row = 0; row < 3; row++) {  
            let index = col * 3 + row; 
            result[index] =
                trans2[col * 3 + 0] * trans1[row + 0] +  
                trans2[col * 3 + 1] * trans1[row + 3] +  
                trans2[col * 3 + 2] * trans1[row + 6];  
        }
    }

    return result;
}