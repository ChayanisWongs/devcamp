function draw(n) {
    text = '';
    let k = 0;
    for (let i=0; i<n; i++) {
        for (let j=0; j<n; j++) {
            text += (n*n)-i-j-k;
        }
        text += '\n';
        k += n-1;
    }
    console.log(text);
}

draw(2);
//draw(3);
//draw(4);