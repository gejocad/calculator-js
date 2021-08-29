import { useState } from 'react'
import styled from 'styled-components'

const DivCalculator = styled.div`
  height: 100vh;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
`

const DivResult = styled.div` 
  min-height: 15px;
  font-size: 20px;
  color: orange;
  text-align: right;
  vertical-align: text-top;
  line-height: 20px;
  overflow-wrap: break-word;
  word-wrap: break-word;
  margin-bottom: 10px;
`

const DivCalcu = styled.div` 
  font-size: 20px;
  color: white;
  text-align: right;
  line-height: 35px;
  margin-bottom: 10px;
`

const GridCalculator = styled.div`
  display: grid;
  grid-template-columns: repeat(4) minmax(80px, auto);
  grid-template-rows: repeat(5);
  grid-gap: 1px;
  width: 300px;
`

const ButtonStandar = styled.button`
  color: white;
  font-family: 'Press Start 2P', cursive;
  &&:hover {
    color: black;
    border: 1px solid gray;
  }
`

function App() {

  const [numSigno, setNumSigno] = useState('')
  const [resp, setResp] = useState('')

  const handleButton = (bValue) => {
    if (bValue === 'AC') {
      setNumSigno('')
      setResp('')
    } else {
      setNumSigno(ope => ope + bValue)
      // setResp(resp + bValue)
      if (numSigno[numSigno.length-1] === '=') {
        if (/[0-9.]/.test(bValue)) {
          setNumSigno(bValue)
        } else {
          setNumSigno(resp + bValue)
        }
      }
    }
  }

  const handleRespuesta = () => {
    setResp(eval(numSigno))
    setNumSigno(ope => ope + '=')
  }

  return (
    <DivCalculator>
      <div style={{ background: 'black', fontSize: '15px', padding: '10px' }}>
        <DivResult>
          {
            resp !== ''
              ?
              resp
              :
              '0'
          }
        </DivResult>
        <DivCalcu id='display'>
          {
            numSigno !== ''
              ?
              numSigno
              :
              '0'
          }
        </DivCalcu>
        <GridCalculator>
          <ButtonStandar onClick={() => handleButton('AC')} id='clear' style={{ gridColumn: '1/3', gridRow: '1', height: '60px', background: 'rgb(172, 57, 57)' }}>AC</ButtonStandar>
          <ButtonStandar onClick={() => handleButton('0')} id='zero' style={{ gridColumn: '1/3', gridRow: '5', height: '60px', background: '#4d4d4d' }}>0</ButtonStandar>
          <ButtonStandar onClick={() => handleButton('1')} id='one' style={{ gridColumn: '1', gridRow: '4', height: '60px', background: '#4d4d4d' }}>1</ButtonStandar>
          <ButtonStandar onClick={() => handleButton('2')} id='two' style={{ gridColumn: '2', gridRow: '4', height: '60px', background: '#4d4d4d' }}>2</ButtonStandar>
          <ButtonStandar onClick={() => handleButton('3')} id='three' style={{ gridColumn: '3', gridRow: '4', height: '60px', background: '#4d4d4d' }}>3</ButtonStandar>
          <ButtonStandar onClick={() => handleButton('4')} id='four' style={{ gridColumn: '1', gridRow: '3', height: '60px', background: '#4d4d4d' }}>4</ButtonStandar>
          <ButtonStandar onClick={() => handleButton('5')} id='five' style={{ gridColumn: '2', gridRow: '3', height: '60px', background: '#4d4d4d' }}>5</ButtonStandar>
          <ButtonStandar onClick={() => handleButton('6')} id='six' style={{ gridColumn: '3', gridRow: '3', height: '60px', background: '#4d4d4d' }}>6</ButtonStandar>
          <ButtonStandar onClick={() => handleButton('7')} id='seven' style={{ gridColumn: '1', gridRow: '2', height: '60px', background: '#4d4d4d' }}>7</ButtonStandar>
          <ButtonStandar onClick={() => handleButton('8')} id='eight' style={{ gridColumn: '2', gridRow: '2', height: '60px', background: '#4d4d4d' }}>8</ButtonStandar>
          <ButtonStandar onClick={() => handleButton('9')} id='nine' style={{ gridColumn: '3', gridRow: '2', height: '60px', background: '#4d4d4d' }}>9</ButtonStandar>
          <ButtonStandar onClick={() => handleButton('/')} id='divide' style={{ gridColumn: '3', gridRow: '1', height: '60px', background: 'rgb(102, 102, 102)' }}>/</ButtonStandar>
          <ButtonStandar onClick={() => handleButton('*')} id='multiply' style={{ gridColumn: '4', gridRow: '1', height: '60px', background: 'rgb(102, 102, 102)' }}>x</ButtonStandar>
          <ButtonStandar onClick={() => handleButton('-')} id='subtract' style={{ gridColumn: '4', gridRow: '2', height: '60px', background: 'rgb(102, 102, 102)' }}>-</ButtonStandar>
          <ButtonStandar onClick={() => handleButton('+')} id='add' style={{ gridColumn: '4', gridRow: '3', height: '60px', background: 'rgb(102, 102, 102)' }}>+</ButtonStandar>
          <ButtonStandar onClick={() => handleButton('.')} id='decimal' style={{ gridColumn: '3', gridRow: '5', height: '60px', background: '#4d4d4d' }}>.</ButtonStandar>
          <ButtonStandar onClick={handleRespuesta} id='equals' style={{ gridColumn: '4', gridRow: '4/6', background: 'rgb(0, 68, 102)' }}>=</ButtonStandar>
        </GridCalculator>
      </div>
    </DivCalculator>
  );
}

export default App;
