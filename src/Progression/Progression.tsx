import React, {useState} from 'react';
import './Progression.css';

interface ProgressionProps {
  tick: number;
}

function Progression({
  tick
}: ProgressionProps) {

  const [initialState, setInitialState] = useState(defaultInitialState);

  const [ruleNumber, setRuleNumber] = useState(defaultRuleNumber);

  function toggleCell(y : number) {
    const newState = initialState.map((cell : number) => cell);
    newState[y] = 1 - initialState[y];
    setInitialState(newState);
  }

  const grid = calculateFullGrid(ruleNumber, initialState);
  
  return (
    <div className="progression">
      <div className="progression__controls">
        <div className="progression__rulenumber">
          <label>
            <div className="label-text"> {/* TODO: handle invalid values */}
              Rule:
            </div>
            <input value={ruleNumber} onChange={(changeEvent) => setRuleNumber(parseInt(changeEvent.target.value))} />
          </label>
        </div>
        <div className="progression__rulenumber">
          <label>
            <div className="label-text">
              <input value={padWithZeroes(ruleNumber)} onChange={(changeEvent) => setRuleNumber(parseInt(changeEvent.target.value))} />
            </div>
          </label>
        </div>
      </div>
      <div className="grid">
        <div className="grid__header">
        {
          ['C', 'D', 'E', 'F', 'G', 'A', 'B'].map((note) => (
            <div className="grid__header-cell" key={note}>
              {note}
            </div>
          ))
        }
        </div>
        {
          grid.map((gridRow: number[], x: number) => (
            <div className={`grid__row ${x === Math.floor(tick / 2) ? 'grid__row--current' : ''}`} key={x}>
              {gridRow.map((cellValue: number, y: number) => (
                <Cell 
                  key={y}
                  x={x}
                  y={y}
                  alive={cellValue} 
                  toggleAlive={toggleCell}
                />
              ))}
            </div>
          ))
        }
      </div>
    </div>
  )
}

function calculateFullGrid(ruleNumber: number, state: number[]) : number[][] {
  const steps = 8;
  const fullGrid : number[][] = [];
  for (let i = 0; i < steps; i++) {
    if (i === 0) {
      fullGrid.push(state);
    } else {
      fullGrid.push(nextGeneration(ruleNumber, fullGrid[fullGrid.length - 1]));
    }
  }
  return fullGrid;
}

function nextGeneration(ruleNumber: number, prevState : number[]) : number[] {
  const nextGen = prevState.map((value, index, array) => {
    const leftIndex = index === 0 ? array.length - 1 : index - 1;
    const rightIndex = index === array.length - 1 ? 0 : index + 1;
    const leftCell = array[leftIndex];
    const rightCell = array[rightIndex];
    return applyRule(ruleNumber, [leftCell, value, rightCell].join(''));
  });

  return nextGen;
}

function padWithZeroes(ruleNumber: number) {
  let ruleString = ruleNumber.toString(2);

  const zeroPrefix = Array(8 - ruleString.length).fill(0).join('');
  ruleString = zeroPrefix + ruleString;

  return ruleString;
}

function applyRule(ruleNumber : number, cellsAbove : string) {
  let ruleString = padWithZeroes(ruleNumber);

  const rule : { [key: string] : number } = {
    '111': parseInt(ruleString[0], 10) || 0,
    '110': parseInt(ruleString[1], 10) || 0,
    '101': parseInt(ruleString[2], 10) || 0,
    '100': parseInt(ruleString[3], 10) || 0,
    '011': parseInt(ruleString[4], 10) || 0,
    '010': parseInt(ruleString[5], 10) || 0,
    '001': parseInt(ruleString[6], 10) || 0,
    '000': parseInt(ruleString[7], 10) || 0,
  }
  return rule[cellsAbove];
}

function Cell({x, y, alive, toggleAlive}: CellProps) {
  const isTogglable = x === 0;
  
  return <div
    className={`grid__cell
      ${alive ? 'grid__cell--alive' : ''}
      ${isTogglable ? 'grid__cell--togglable' : ''}
    `}
    onClick={
      (() => {
        if (isTogglable) {
          toggleAlive(y);
        }
      })
    }
  />
}

interface CellProps {
  x: number;
  y: number;
  alive: number;
  toggleAlive: (x: number) => void;
}
  
const defaultInitialState = [1,0,1,0,1,0,1];

const defaultRuleNumber = 30;

export default Progression;
