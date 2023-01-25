const game = ( () => {
     //factory that creates both the players representing the two symbols 'x' and 'o'.
    const newPlayer = ( playerName, symbol ) => {    
        return { playerName, symbol }
    }
    //players
    const playerOne = newPlayer( 'playerone', 'x' )
    const playerTwo = newPlayer( 'playertwo', 'o' );

    //set the starting player
    let currentPlayer = playerOne;
    
    //array representing the gameboard.
    const gameBoard = [ 0, 1, 2, 3, 4, 5, 6, 7, 8]
  
    //available to global scope
    return {gameBoard, playerOne, playerTwo, currentPlayer}
} )();

//display controller module stores all the visual/interactive elements of the codebase.
const displayController = ( () => {
    const grid = document.querySelector( '#gamecontainer' )
    const selectBox = document.querySelectorAll( '.square' )
    const newGameBtn = document.querySelector( '#new-game' )

    // newGameBtn.addEventListener( 'click', () => {
    //     console.log('this clicks')
    // })
        
    //function to place symbol on gameboard (x or o)
    const placeSymbol = ( event ) => {
        if ( event.target.innerText == '' ) {
            event.target.innerText = game.currentPlayer.symbol;
            console.log(grid.innerText)
            //code to check if player won/tied the game goes here.
            game.currentPlayer = game.currentPlayer === game.playerOne ? game.playerTwo : game.playerOne;
        } else {
            null
        }
    }
    //creates single box of the gameboard grid.
    const createBox = ( index ) => {
        const box = document.createElement( 'div' )
        box.classList.add( 'square' )
        box.setAttribute( 'location', index)
        grid.appendChild( box )
        box.addEventListener('click', placeSymbol)
    }

    //creates the visual representation of the gameboard inside the dom.
    const populateGameBoard = () => game.gameBoard.forEach(index => createBox(index) )

    
    populateGameBoard()
    //returns to global scope
    return{populateGameBoard, grid}
} )()

//use formdata again to grab user name and x/y prefernce to feed the factory function parameters and create the newPlayer object.

//when new game btn is clicked, take current gameboard, use map and create a brand new empty game board in its place and return it.

// //const winOrTie = () => {
// if ( displayController.grid.innertext ===
//         )
// //}
console.log( typeof ( displayController.grid ) )

//instead of grouping coupling more data together try and create a third module for controlling gameflow, in the module we can switch players turn, check win/tie condition after 'move', and restart/newgame functionality will be here as well?