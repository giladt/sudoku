![carl](./public/carl.png)
<br/><br/>
# Candidate Task - Sudoku 
## Introduction 
We want you to demonstrate your skills. There is no expected time restriction or a necessity to create a fully featured Sudoku game. Please use this task to show off your strengths. However, we do want to see that you have a solid understanding of the problem and how to solve it while following best software practices. We expect the core game logic to be fully tested and the code to be structured manageably. 
## The Task 
Your task is to create a Sudoku game including functionality and a UI. There are 3 challenges to choose from. Each challenge is more difficult than the last. Please attempt the challenge that you feel most comfortable with. You are free to use your preferred tech stack but we do ask that you include a simple README with instructions on how to run and build the project. 
## Rules of Sudoku 
The rules of Sudoku are quite straightforward. The game consists of a grid of 9 squares. Each square contains a sub grid of 9 squares. The player wins the game when each sub grid, row and column contain the numbers 1…9 with no duplicates. 
## Submission 
Please submit your solution to product@carlfinance.de. You should include a link to a repository or a .zip file containing your project. We will then have one of our developers evaluate your work. Please reach out at this email if you have any questions. 

__Best of luck__

------
## Challenge 1 
Build a Sudoku game where a player can successfully complete a game of Sudoku. 
### Requirements 
● The player should be able to complete a sudoku game

● It should be possible to reload the game from the beginning 

● The square that the user is interacting with should be highlighted 

● Only single digit numbers should be accepted as a valid input for a square. The number 0 should not be accepted. 
### Game data 
```json
{ 
"game": [ 
null, null, null, 2, 6, null, 7, null, 1, 
6, 8, null, null, 7, null, null, 9, null, 
1, 9, null, null, null, 4, 5, null, null, 
8, 2, null, 1, null, null, null, 4, null, 
null, null, 4, 6, null, 2, 9, null, null, 
null, 5, null, null, null, 3, null, 2, 8, 
null, null, 9, 3, null, null, null, 7, 4, 
null, 4, null, null, 5, null, null, 3, 6, 
7, null, 3, null, 1, 8, null, null, null 
], 
"solution": [ 
4, 3, 5, 2, 6, 9, 7, 8, 1, 
6, 8, 2, 5, 7, 1, 4, 9, 3, 
1, 9, 7, 8, 3, 4, 5, 6, 2, 
8, 2, 6, 1, 9, 5, 3, 4, 7, 
3, 7, 4, 6, 8, 2, 9, 1, 5, 
9, 5, 1, 7, 4, 3, 6, 2, 8, 
5, 1, 9, 3, 2, 6, 8, 7, 4, 
2, 4, 8, 9, 5, 7, 1, 3, 6, 
7, 6, 3, 4, 1, 8, 2, 5, 9 
] 
}
```

## Challenge 2 
Build a Sudoku game where a player can successfully complete a game of Sudoku. Sudoku games can have more than 1 unique solution and not all of them may be known, therefore the winning condition of the game must be checked at runtime. 
### Requirements 
● Implement the requirements from Challenge 1. 

● Add runtime checking for a win condition 

● Add level progression, using the dataset at the end of this document, into the game. When a user has completed a level the next should become available 


## Challenge 3 
Build a Sudoku game where a player can successfully complete a game of Sudoku. Sudoku games can have more than 1 unique solution and not all of them may be known, therefore the winning condition of the game must be checked at runtime. More experienced players like to be able to highlight and pencil mark the squares as they solve more difficult puzzles. 
### Requirements 
● Implement the requirements from Challenge 1 and 2. 

● Allow the player to highlight the square that they want to interact with. The column and row for that square should also he highlighted 

● Allow the player to pencil mark possibilities for each square 

<br/><br/>
```json
[ 
  { 
    "id": "1", 
    "board":[ 
      null, null, null, 2, 6, null, 7, null, 1, 
      6, 8, null, null, 7, null, null, 9, null, 
      1, 9, null, null, null, 4, 5, null, null, 
      8, 2, null, 1, null, null, null, 4, null, 
      null, null, 4, 6, null, 2, 9, null, null, 
      null, 5, null, null, null, 3, null, 2, 8, 
      null, null, 9, 3, null, null, null, 7, 4, 
      null, 4, null, null, 5, null, null, 3, 6, 
      7, null, 3, null, 1, 8, null, null, null 
    ] 
  }, 
  { 
    "id": "2", 
    "board": [ 
      null, 2, null, 6, null, 8, null, null, null, 
      5, 8, null, 6, null, 9, 7, null, null, 
      null, null, null, null, 4, null, null, null, null, 
      3, 7, null, null, null, null, 5, null, null, 
      6, null, null, null, null, null, null, null, 4, 
      null, null, 8, null, null, null, null, 1, 3, 
      null, null, null, null, 2, null, null, null, null, 
      null, null, 9, 8, null, null, null, 3, 6, 
      null, null, null, 3, null, 6, null, 9, null 
    ] 
  }, 
  { 
    "id": "3", 
    "board": [ 
      null, null, null, 6, null, null, 4, null, null, 
      7, null, null, null, null, 3, 6, null, null, 
      null, null, null, null, 9, 1, null, 8, null, 
      null, null, null, null, null, null, null, null, null, 
      null, 5, null, 1, 8, null, null, null, 3, 
      null, null, 3, null, 6, null, null, 4, 5, 
      null, 4, null, 2, null, null, null, 6, null, 
      9, null, 3, null, null, null, null, null, null, 
      null, 2, null, null, null, null, 1, null, null 
    ]
  } 
]
```