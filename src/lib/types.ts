export type TGameContextProps = {
  level: number
  setLevel: React.Dispatch<React.SetStateAction<number>>
  board: Array<number|string>
  setBoard: React.Dispatch<React.SetStateAction<Array<number|string>>>
  isComplete: boolean
  setIsComplete: React.Dispatch<React.SetStateAction<boolean>>
  solutionBoard: Array<number|string>
  setSolutionBoard: React.Dispatch<React.SetStateAction<Array<number|string>>>
  stateBoard: Array<boolean>
  setStateBoard: React.Dispatch<React.SetStateAction<Array<boolean>>>
  solved: Array<boolean>[]
  setSolved: React.Dispatch<React.SetStateAction<Array<boolean>[]>>
  checkCompletion: Function
  startGame: Function
}

export type TBoards = {
  id: string
  board: any
}

export type TGameProviderProps = {
  children: React.ReactElement
};
