function draw(n) {
    text = '' ;
    for (let i=0; i<n; i++) {        
        for (let j=0; j<=i; j++) {
            text += '*' ;
        }

        for (let j=i; j<=n-2; j++) {
            text += '-' ;
        }    
        
        text += '\n';
    }
    console.log(text);
}


draw(2);
//draw(3);
//draw(4);