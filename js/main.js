const navbar = document.querySelector(".navbar__collection")

function toggleShow (){
    navbar.classList.toggle("show")
}






alert`Masalalar consoleda`
{
    // 5 masala
    function bar(a, b, c){
        let musbat = 0
        let manfiy = 0
        if(a > 0){
            musbat++
        }else{
            manfiy++
        }
        if(b > 0){
            musbat++
        }else{
            manfiy++
        }
        if(c > 0){
            musbat++
        }else{
            manfiy++
        }
        return `musbat: ${musbat}, manfiy: ${manfiy}`
    }
    // console.log(bar(7, -2, 4));
}
{
    // 6 masala
    function son(a, b){
        if(a > b){
            return `kattasi: ${a}`
       }else{
        return `${b}`
           }
          
    }
    // console.log( son(9, 2));
}

{ 
    // 7 masala
    function  son(a, b){
        if(a < b){
            return`bunda a son ${a} kichkina `
        }else{
            return `bunda b son ${b} kichkina`
        }
    }
    // console.log(son(3,5));
}

{
    // 8 masala
    function son(a, b){
        if(a > b){
            return  `a soni kattasi: ${a} , b soni kichkina:${b}`
        }else{
            return  `bunda b soni kattasi: ${b} , a soni kichkina:${a}`
        }
     
    }
    // console.log(son(12, 22));
}

{
    // 9 masala
    function son(a, b){
        let c = 0
        if(a < b){
            return  `a soni kchik: ${a}, b soni katta: ${b}`
        }else{
            c = a
            a = b
            b = c
            return  `a soni kichik: ${a}, b soni katta: ${b}` 
        }
    }
    // console.log(son(27, 23));
}

{
    // 10 masala
    function son(a, b){
        if(a != b){
            let sum = a + b
            return `a soni: ${a}, va b soni ${b}, shular yigindisi: ${sum} ga teng`
        }else{
            return `javob ${0} ga teng`
        }
    }
    // console.log(son(43, 43));
}

{
    // 11 masala
    function son(a, b){
        let c = 0
        if(a == b){
            return `a soni: ${a}, b soni: ${b}, javob:${c}`
        }else if(a > b){
            return `a son ${a} katta `
        }else{
            return `b son  ${b} katta `
        }
    }
    // console.log(son(25, 2));
}

{
    // 12 masala
  function son(a, b, c){
    if(a < b ){
    return `${a}`
    }else if(a < c){
    return `${a}`
    }else if(b < a){
        return `${b}`
    }else if(b < c){
        return `${b}`
    }else if(c < a){
        return `${c}`
    }else if (c < b){
        return `${c}`
    }
}
//   console.log(son(34, 24, 44));
}

{
    // 13 masala
    function son(a, b, c){
        if(b < a || b > c){
            return  `ortasidagi: ${c}` 
        }
    }
    // console.log(son(4, 2, 1));
}

{
    // 14 masala
    function son(a, b, c){
        if(a > b && b < c || a > b && a > c){
            return `kichik: ${b}`
        }else{
            return `katta: ${a}`
        }
    }
    // console.log(son(6, 3, 7));
}

{
    // 15 masala
    function son(a, b, c, d) {
                if (a === b && b === c) return 4;
                if (a === b && b === d) return 3;
                if (a === c && c === d) return 2;
                if (b === c && c === d) return 1;
                return 0;
            }
            
            // console.log(son(1, 5, 2, 4));
    
}


{
    // 16 masala
    function sonlar( a, b, c) {
        if ( a < b && b < c) {
            return `sonlar ${a} ${b} ${c} 
            Result: a son ${a *= 2} ; b son ${b *= 2} ; c son ${c *= 2};`
        }
        else{
            return `Result = ${-a} , b = ${-b}, c = ${-c} `
        }
    }
        //  console.log(sonlar(2,4,6));
        //  console.log(sonlar(4,8,2));

}

{
    // 17 masala
    function son( a, b, c) {
        if ((a < b && b < c) || (a > b && b > c) ) {
            return  `sonlar ${a} ${b} ${c} 
            Result: a son ${a *= 2} ; b son ${b *= 2} ; c son ${c *= 2};`
        }
        else{
            return `Result = ${-a} , b = ${-b}, c = ${-c} `
        }
    }

    // console.log(son(4,7,2));
    // console.log(son(2,6,8));
}

{
    // 18 masala
    function son(a,b,c) {
        if ( a === b) {
            return `${a} = ${b} va c: ${c} soning tartib raqami 3`
        }
        else if(a === c){
            return `${a} = ${c} va  b: ${b} soning tartib raqami 2`
        }
        else if(b === c){
            return `${b} = ${c} va a: ${a} soning tartib raqami 1`
        }
    }

    //  console.log(son( 3, 3, 2) );
    //  console.log(son (2,5,2) );
    //  console.log( son (3, 5, 5));

}

{
    // 19 masala
    function son(a , b, c, n) {
        if (a === b && a === c) {
            return `${a} = ${b} = ${c} n:${n} soning tartib raqami 4`
        } else if (a === b && a === n){
            return `${a} = ${b} = ${n} c:${c} soning tartib raqami 3`
        } else if (a === c && a === n){
            return `${a} = ${c} = ${n} b:${b} soning tartib raqami 2`
        } else if (b === c && b === n){
            return `${b} = ${c} = ${n} a:${a} soning tartib raqami 1`
        }    
    }

    // console.log( son (2,2,2,5));
    // console.log(son (2,2,6,2));
    // console.log(son (5,2,5,5));
    // console.log(son (3,5,5,5));
}

{
    // 20 masala
    function son(a, b, c) {
                let masofaAB = Math.abs(a-b);
                let masofaAC = Math.abs(a-c);
                if (masofaAB < masofaAC) {
                    return `eng yaqin nuqta b, masofa ${masofaAB}`
                } else {
                    return ` eng yaqin masofa c, masofa ${masofaAC}`
                }
            }
            // console.log( son (6, 2, 8) );
            // console.log( son (5, 1, 10) );
}
