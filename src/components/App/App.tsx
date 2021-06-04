import React, { useContext } from 'react'
import Board from '../Board'
import Winner from '../Winner'
import Layout from '../Layout'
import styles from './App.module.scss'
import { GameContext } from '../../context/game-context'

const App:React.FC = () => {
  const {isComplete, level, setLevel, startGame } = useContext(GameContext)

  const switchLevel = (e:React.MouseEvent<HTMLButtonElement>) => {
    setLevel(parseInt(e.currentTarget.name))
  }

  return (
    <Layout>
      <section className={styles.game}>
        {!isComplete && (
          <Board />
        )}
        {isComplete && (
          <Winner />
        )}
        {level >= 0 && (
        <aside>
          <div>
            <h1>Current Level:</h1>
            <button name="0" disabled={localStorage.length<1} onClick={switchLevel}>Easy</button>
            <button name="1" disabled={localStorage.length<2} onClick={switchLevel}>Intermediate</button>
            <button name="2" disabled={localStorage.length<3} onClick={switchLevel}>Hard</button>
          </div>
          <button onClick={e=>{
            startGame(true)
          }}>Restart Game</button>
          <section>
            <h1>
              Help:
            </h1>
            <ul>
              <li>Use the mouse or TAB key to select the square you want to fill.</li>
              <li>Type any number between 1 and 9. Delete with the backspace key.</li>
              <li>Once level is correctly completed, you will be able to start the next level.</li>
              <li>Have fun playing!</li>
            </ul>
          </section>
        </aside>
        )}
      </section>
    </Layout>
  );
}

export default App;