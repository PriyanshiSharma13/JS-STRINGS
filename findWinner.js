// Find the Winner

// You are given a string S consisting of two letters A and D, where each character represent the winner of N games played between Aditya and Danish, where letter A represents the win of Aditya and letter D represents the win of Danish.

// You need to find out the that which player wins the maximum number of games or there is a draw between them.

// Note: You have to complete Game_Winner function. No need to take any input.

const Game_Winner = (S) => {
    let playerOne = 0; playerTwo = 0;
    for(let i = 0; i < S.length; i++)
    {
        if( S.charAt(i) === "A" )
        {
            playerOne += 1;
        }
        else{
            playerTwo += 1;
        }
    }
    if(playerOne > playerTwo)
    {
        return "Aditya"
    }
    else if(playerOne < playerTwo)
    {
        return "Danish"
    }
    else{
        return "Draw"
    }
};
console.log(Game_Winner("ADDAAADDDDD"));
console.log(Game_Winner("ADDAAADD"));
