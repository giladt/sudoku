import { createContext, useState, useCallback, useEffect } from "react";
import { TGameContextProps, TBoards, TGameProviderProps } from "../lib/types";

const GameContext = createContext<TGameContextProps>({
  level: 0,
  setLevel: () => {},
  board: [],
  setBoard: () => {},
  isComplete: false,
  setIsComplete: () => {},
  solutionBoard: [],
  setSolutionBoard: () => {},
  stateBoard: [],
  setStateBoard: () => {},
  solved: [],
  setSolved: () => {},
  checkCompletion: () => {},
  startGame: () => {},
});

async function getBoards(): Promise<Array<TBoards>> {
  const boards = await await (
    await fetch("/src/assets/boards.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
  ).json();
  return boards;
}

const GameProvider = ({ children }: TGameProviderProps) => {
  const [level, setLevel] = useState<number>(-1);
  const [board, setBoard] = useState<Array<number | string>>([]);
  const [isComplete, setIsComplete] = useState<boolean>(true);

  const [solutionBoard, setSolutionBoard] = useState<Array<number | string>>(
    []
  );
  const [stateBoard, setStateBoard] = useState<Array<boolean>>([]);
  const [solved, setSolved] = useState<Array<boolean>[]>(
    Array(2).fill(Array(9).fill(false))
  );

  const checkCompletion = (): void => {
    for (let i = 0; i < 9; i++) {
      const activeRow = i;
      const activeCol = i;

      const currentRow: (string | number)[] = Array.from(
        new Set(solutionBoard.slice(activeRow * 9, (activeRow + 1) * 9 - 1))
      );

      const activeColValues = [];
      for (let i = 0; i < 9; i++) {
        activeColValues[i] = solutionBoard[activeCol + i * 9];
      }

      const currentCol = Array.from(new Set(activeColValues));

      const newStatus = [...solved];
      newStatus[0][activeRow] =
        currentRow.filter((val) => val !== "").length === 9;
      newStatus[1][activeCol] =
        currentCol.filter((val) => val !== "").length === 9;
      setSolved([...newStatus]);
    }
    const solvedColumns = new Set(solved[0]);
    const solvedRows = new Set(solved[1]);
    setIsComplete(!solvedColumns.has(false) && !solvedRows.has(false));
  };

  const startGame = useCallback(
    (doReset: boolean = false) => {
      getBoards().then((res) => {
        const data: Array<Array<number | null>> = res.map((item) => item.board);
        const currentBoard: Array<number | string> = data[level]?.map(
          (item) => item || ""
        );

        setIsComplete(false);
        if (currentBoard) {
          if (doReset) localStorage.removeItem(`level-${level}-solution`);
          setBoard(currentBoard);
          setSolved(Array(2).fill(Array(9).fill(false)));
        }
      });
    },
    [level]
  );

  useEffect(() => {
    if (localStorage.getItem(`level-${level}-solution`) === null) {
      setSolutionBoard(board);
    } else {
      setSolutionBoard(
        JSON.parse(localStorage.getItem(`level-${level}-solution`) || "")
      );
    }
  }, [board, level]);

  useEffect(() => {
    if (solutionBoard.length && level >= 0) {
      if (!localStorage.getItem(`level-${level}-solution`)) {
        getBoards().then((data) => {
          if (data[level].board) {
            localStorage.setItem(
              `level-${level}-solution`,
              JSON.stringify(data[level].board)
            );
          }
        });
      } else {
        localStorage.setItem(
          `level-${level}-solution`,
          JSON.stringify(solutionBoard)
        );
      }
    }
  }, [level, solutionBoard]);

  return (
    <GameContext.Provider
      value={{
        level,
        setLevel,
        board,
        setBoard,
        isComplete,
        setIsComplete,
        solutionBoard,
        setSolutionBoard,
        stateBoard,
        setStateBoard,
        solved,
        setSolved,
        checkCompletion,
        startGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export { GameContext, GameProvider };
