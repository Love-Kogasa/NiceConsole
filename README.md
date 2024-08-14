# NiceConsole
```js
const { print, input } = require( "./index" )
// NiceConsole ::
console.useTime( "useTime", function(){
    console.log( "console.log" )
    console.info( "console.info" )
    console.error( "console.error" )
    console.text( "<text> console.text" )
    console.box( console.input( "input" ) )
})

// BasicMethod
print( new Array(50).join( "-" ) )
input( "use <enter> to output" )
```
![Screenshot 2024 08 14 11 33 18 464 com.termux edit](https://postimage.me/images/2024/08/14/Screenshot_2024-08-14-11-33-18-464_com.termux-edit.jpg)