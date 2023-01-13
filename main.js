

//a module IIFE creates the game board in which players can place their markers.
const gameboard = ( () => {
    
    //gameboard where players can click to place their marker
    const gameboard = [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ]

    //helper function to create a single square of the gameboard grid & assign it an index for refernce.
    const createSquare = (index) => { 
        const div = document.createElement( 'div' )
        const gamegrid = document.getElementById( 'gamegrid' )
        div.classList.add( 'square' )
        div.setAttribute( 'index', index )
        gamegrid.appendChild( div )
        //this part needs to take into account the players marker, add it to the correlating index of the array, and lock it in so another player cant overwrite their move.
        div.addEventListener('click', () => console.log(`you clicked on square # ${index}`))
    } 

    //closure function that creates the gameboard
    const generateGrid = () => gameboard.forEach(( Element, index ) => createSquare(index))  
    
    generateGrid()
    return {gameboard};
} )();


//this factory function creates an instance of a player with user defined data. 
// const newPlayer = ( name, marker ) => {
//     const placeMarker = () => console.log('i place either x or o here.')

//     return { name, marker, placeMarker };
// }





