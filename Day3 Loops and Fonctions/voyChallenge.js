let s = "meryema"
let voy = "aeiou"
    for (var i=0; i < s.length; i++ ){
        if( voy.includes(s[i]) ){
            console.log( s[i])
        }
    }
    for (var i=0; i < s.length; i++ ){
        if( !voy.includes(s[i]) ){
            console.log( s[i])
        }
    }


