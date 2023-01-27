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
    
    //map representing the gameboard.
    const gameBoard = [ [ 0, '' ], [ 1, '' ], [ 2, '' ], [ 3, '' ], [ 4, '' ], [ 5, '' ], [ 6, '' ], [ 7, '' ], [ 8, '' ] ];
    
    //combinations that win the game, checked after each turn of the game.
    const winningGame = [ [ 0, 1, 2 ],[ 3, 4, 5 ], [ 6, 7, 8 ], [ 0, 3, 6 ], [ 1, 4, 7 ], [ 2, 5, 8 ], [ 0, 4, 8 ], [ 2, 4, 6 ] ];
    
    //available to global scope
    return {gameBoard, playerOne, playerTwo, currentPlayer, winningGame}
} )();

//display controller module stores all the visual/interactive elements of the codebase.
const displayController = ( () => {
    const grid = document.querySelector( '#gamecontainer' )
    const newGameBtn = document.querySelector( '#new-game' )

    // newGameBtn.addEventListener( 'click', () => {
    //     console.log('this clicks')
    // })
        
    //function to place symbol on gameboard (x or o)
    const placeSymbol = ( event ) => {
        if ( event.target.innerText == '' ) {
            event.target.innerText = game.currentPlayer.symbol;
            const index = event.target.getAttribute( 'data-index' )
            game.gameBoard[ index ] = game.currentPlayer.symbol;
            console.log( game.gameBoard )
            
            //code here to check if winner or tie
            game.currentPlayer = game.currentPlayer === game.playerOne ? game.playerTwo : game.playerOne;
        } else {
            null
        }
    }
    //creates single box of the gameboard grid.
    const createBox = ( index ) => {
        const box = document.createElement( 'div' )
        box.classList.add( 'square' )
        box.setAttribute( 'data-index', index )
        grid.appendChild( box )
        box.addEventListener( 'click', placeSymbol )
    }

    game.gameBoard.forEach( (box, index ) => {
        createBox( index )
    } );

} )()

//use formdata again to grab user name and x/y prefernce to feed the factory function parameters and create the newPlayer object.

//when new game btn is clicked, take current gameboard, use map and create a brand new empty game board in its place and return it.

