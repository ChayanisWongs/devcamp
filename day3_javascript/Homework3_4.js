function draw(n) {
    let arr = [];

    for (let i = 0; i<n*2-1; i++) {
        for(let j = 0; j<n*2-1 ; j++) {
            arr[i] = [];
        }
    }

    let m=0;
    for (let i=0; i<n; i++, m++) {
        k=0;
        for(let j=1; j<n-i; j++, k++) {
            arr[m][k] = '-';
        }
        for(let j=0; j<=i; j++, k++) {
            arr[m][k] = '*';
        }

        for(let j=1; j<=i; j++, k++) {
            arr[m][k] = '*';
        }

        for(let j=1; j<n-i; j++, k++) {
            arr[m][k] = '-';
        }
        
    }

    for (let i=0; i<n-1; i++, m++) {
        k=0;

        for(let j=0; j<=i; j++, k++) {
            arr[m][k] = '-';
        }
        for(let j=1; j<n-i; j++, k++) {
            arr[m][k] = '*';
        }

        for(let j=2; j<n-i; j++, k++) {
            arr[m][k] = '*';
        }

        for(let j=0; j<=i; j++, k++) {
            arr[m][k] = '-';
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

draw(2);
//draw(3);
//draw(4);
