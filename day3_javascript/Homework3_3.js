function draw(n) {
    let arr = [];

    for (let i = 0; i<n; i++) {
        for(let j = 0; j<n; j++) {
            arr[i] = [];
        }
    }

    for (let i = 0; i<n; i++) {
        k=0;
        for (j=0; j<=i; j++, k++) {
            arr[i][k] = '*' ;
        }
        for (j=1; j<n-i; j++, k++) {
            arr[i][k] = '-' ;
        }
    }

    let text = '';
        for (let i=0; i<arr.length; i++) {
            for (let j=0; j<arr[i].length; j++) {
                text += arr[i][j].toString();
            }
            text += '\n';
        }
    console.log(text);

}

draw(4);
//draw(3);
//draw(4);

