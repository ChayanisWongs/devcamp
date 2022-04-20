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
        
        for (let j=0; j<i; j++) {
            text += k ;
            k++;
        }
        
        for (let j=i; j<n-1; j++) {
            text += '-' ;
        }

        text += '\n';
    }

    for (let i=1; i<n; i++) {        
        for (let j=0; j<i; j++) {
            text += '-' ;
        }

        for (let j=i; j<n; j++) {
            text += k ;
            k++;
        }    
        
        for (let j=i; j<n-1; j++) {
            text += k ;
            k++;
        }
        
        for (let j=0; j<i; j++) {
            text += '-' ;
        }

        text += '\n';
    }

    console.log(text);
}


draw(2);
//draw(3);
//draw(4);