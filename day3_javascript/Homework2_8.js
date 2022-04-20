function draw(n) {
    text = '' ;
    let k=1;

    for (let i=0; i<n; i++) {        
        for (let j=i; j<n-1; j++) {
            text += '-' ;
        }

        
        for (let j=0; j<=i; j++) {
            text += k ;
            k++;
        }    

        text += '\n';
    }

    for (let i=0; i<n-1; i++) {        
        for (let j=0; j<=i; j++) {
            text += '-' ;
        }

        for (let j=1; j<n-i; j++) {
            text += k ;
            k++;
        }    
        
        text += '\n';
    }

    console.log(text);
}


draw(2);
//draw(3);
//draw(4);