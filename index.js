const rl = require( "readline-sync" )
const chroma = require( "chroma" )
const { Console } = require( "console" )

var print = console.log,
  input = rl.question,
  conold = console
class nicec extends Console {
    constructor( out, err ){
        super( out, err )
    }
    color( color, string ){
        print( chroma.apply( this, Array.isArray( color ) ? color : [color] )( string ) )
    }
    now(){
        var now = new Date()
        return now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds()
    }
    log( string ){
        print( chroma( "#22DDFF" )( `<${this.now()}> ` ) + chroma( "#FFFFFF" )( string ) )
    }
    info( string ){
        print( chroma.yellow( "<info> " ) + chroma( "#FFFFFF" )( string ) )
    }
    error( string ){
        print( chroma.red( "<error> " ) + chroma( "#FF5555" )( string ) )
    }
    text( string ){
        this.color( "#FFFFFF", string )
    }
    input( string ){
        return input( chroma.green( `<${string}> ` ) )
    }
    useTime( string, cb ){
        var symbol = chroma.magenta( `<${(string)}> ` )
        conold.time( symbol )
        cb()
        conold.timeEnd( symbol )
    }
    box( string ){
        print( chroma.green( "<box> " ) + chroma.yellow( "[ " ) + chroma.white( string ) + chroma.yellow( " ]" ))
    }
    static print( string ){
        print( chroma.white( string ) )
    }
    static input( string ){
        input( chroma.white( string ) )
    }
}


console = new nicec( process.stdout, process.stderr )
module.exports = nicec