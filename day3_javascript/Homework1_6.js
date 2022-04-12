function draw(n) {
    text = '';
    let k = 0;
    for (let i=1; i<=n; i++) {
        for (let j=1; j<=n; j++) {
            text += j+k;
        }
        text += '\n';
        k += n ;
    }
    console.log(text);
}

draw(2);
//draw(3);
//draw(4);