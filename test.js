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