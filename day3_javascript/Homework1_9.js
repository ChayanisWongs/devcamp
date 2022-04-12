function draw(n) {
    text = '';
    let k = 2;
    for (let i=0; i<n; i++) {
        text += i+k;
        text += '\n';
        k += 1;
    }
    console.log(text);
}

draw(4);
//draw(3);
//draw(4);