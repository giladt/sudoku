import React, { useContext, useEffect } from 'react';
import styles from './Board.module.scss';
import classnames from 'classnames';
import { GameContext } from '../../context/game-context'

const Board = ():JSX.Element => {
  const {stateBoard, setStateBoard, solutionBoard, setSolutionBoard, board, startGame, checkCompletion} = useContext(GameContext)

  const highlightSquares = (cell:string) => {
    const activeRow = Math.floor(parseInt(cell) / 9)
    const activeCol = parseInt(cell) % 9

    const state=Array(81).fill(false)

    for(let i = 0; i < 81; i++){
      // cross highlight
      if(i % 9 === activeCol || Math.floor(i / 9) === activeRow){ state[i]=true }

      // area highlight
      if(activeCol >= 0 && activeCol <= 2 && i % 9 <=2 && activeRow <= 2 && Math.floor(i / 9) < 3) { state[i]=true }
      if(activeCol >= 3 && activeCol <= 5 && i % 9 >= 3 && i % 9 <=5 && activeRow <= 2 && Math.floor(i / 9) <= 2) { state[i]=true }
      if(activeCol >= 6 && activeCol <= 8 && i % 9 >= 6 && i % 9 <=8 && activeRow <= 2 && Math.floor(i / 9) <= 2) { state[i]=true }

      if(activeCol >= 0 && activeCol <= 2 && i % 9 <=2 && activeRow >= 3 && activeRow <= 5 && Math.floor(i / 9) >= 3 && Math.floor(i / 9) <= 5) { state[i]=true }
      if(activeCol >= 3 && activeCol <= 5 && i % 9 >= 3 && i % 9 <=5 && activeRow >= 3 && activeRow <= 5 && Math.floor(i / 9) >= 3 && Math.floor(i / 9) <= 5) { state[i]=true }
      if(activeCol >= 6 && activeCol <= 8 && i % 9 >= 6 && i % 9 <=8 && activeRow >= 3 && activeRow <= 5 && Math.floor(i / 9) >= 3 && Math.floor(i / 9) <= 5) { state[i]=true }

      if(activeCol >= 0 && activeCol <= 2 && i % 9 <=2 && activeRow >= 6 && Math.floor(i / 9) >= 6) { state[i]=true }
      if(activeCol >= 3 && activeCol <= 5 && i % 9 >= 3 && i % 9 <=5 && activeRow >= 6 && Math.floor(i / 9) >= 6) { state[i]=true }
      if(activeCol >= 6 && activeCol <= 8 && i % 9 >= 6 && i % 9 <=8 && activeRow >= 6 && Math.floor(i / 9) >= 6) { state[i]=true }
    }

    setStateBoard([...state])
  }

  const handleValueChange = (e:React.ChangeEvent<HTMLInputElement>):void=>{
    const currentValue = e.target.value? parseInt(e.target.value): ''

    if( (currentValue >= 1 && currentValue <= 9) || currentValue === ''){
      const newBoard = [...solutionBoard]
      const cell = parseInt(e.currentTarget.name)
      newBoard[cell] = currentValue
      setSolutionBoard(newBoard)
    }
  }

  const handleCellFocus = (e:React.FocusEvent<HTMLInputElement>):void=>{
    highlightSquares(e.currentTarget.name)
  }

  const handleCellBlur = (e:React.FocusEvent<HTMLInputElement>):void=>{
    checkCompletion()
    setStateBoard(Array(81).fill(false))
  }

  useEffect(() => {
    startGame()
  }, [startGame])

  return (
    <div className={styles.container}>
      {board && board.map((col,idx)=>{
        let classes = classnames(
          styles.cell,
          styles['col-' + idx % 9 + 1],
          styles['row-' + Math.floor(idx / 9) + 1],
          {[styles.highlighted]: stateBoard[idx]},
          {[styles.bigCol]: (idx % 3 === 0)},
          {[styles.bigRow]: (idx % 27 >= 0 && idx % 27 < 9)},
        )

        return (
          <div className={classes} key={idx}>
            {
              col 
              ? <div>{col}</div> 
              : <input
                  name={idx.toString()} 
                  value={solutionBoard[idx] || ''} 
                  onChange={handleValueChange}
                  onFocus={handleCellFocus}
                  onBlur={handleCellBlur}
                  type="number" 
                  min={1} 
                  max={9} 
                />
            }
          </div>
        )}
      )}
    </div>
  )
}

export default Board