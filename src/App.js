import { useEffect, useState } from "react";
import "./App.css";
import Box from "./Box";
import "./style.css";
import BasicModal from "./Winner";

function App() {
  const [winner, setWinner] = useState("");
  const [chance, setChance] = useState("O");
  const [value, setValue] = useState({
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
    9: "",
  });
  const [count, setCount] = useState(0);
  const [draw, setDraw] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  function showChar(id) {
    const val = { [id]: chance };
    if (value[id] === "") {
      setValue({ ...value, ...val });
      chance === "O" ? setChance("X") : setChance("O");
      setCount(count + 1);
    } else {
      console.log("Choose other box");
    }
  }
  const checkWinner = () => {
    // console.log("check Winner");
    if (value[1] !== "" && value[1] === value[2] && value[1] === value[3]) {
      console.log("Winner is ", value[1]);
      setGameOver(true);
      setWinner(value[1]);
    }
    if (value[4] !== "" && value[4] === value[5] && value[4] === value[6]) {
      console.log("Winner is ", value[4]);
      setGameOver(true);
      setWinner(value[4]);
    }
    if (value[7] !== "" && value[7] === value[8] && value[7] === value[9]) {
      console.log("Winner is ", value[7]);
      setGameOver(true);
      setWinner(value[7]);
    }
    if (value[1] !== "" && value[1] === value[4] && value[1] === value[7]) {
      console.log("Winner is ", value[1]);
      setGameOver(true);
      setWinner(value[1]);
    }
    if (value[2] !== "" && value[2] === value[5] && value[2] === value[8]) {
      console.log("Winner is ", value[2]);
      setGameOver(true);
      setWinner(value[2]);
    }
    if (value[3] !== "" && value[3] === value[6] && value[3] === value[9]) {
      console.log("Winner is ", value[3]);
      setGameOver(true);
      setWinner(value[3]);
    }
    if (value[1] !== "" && value[1] === value[5] && value[1] === value[9]) {
      console.log("Winner is ", value[1]);
      setGameOver(true);
      setWinner(value[1]);
    }
    if (value[3] !== "" && value[3] === value[5] && value[3] === value[7]) {
      console.log("Winner is ", value[3]);
      setGameOver(true);
      setWinner(value[3]);
    }
  };
  useEffect(() => {
    if (gameOver) {
      setValue({
        1: "",
        2: "",
        3: "",
        4: "",
        5: "",
        6: "",
        7: "",
        8: "",
        9: "",
      });
    }
  }, [gameOver]);

  useEffect(() => {
    checkWinner();
  }, [value]);

  useEffect(() => {
    if (count === 9) {
      setDraw(true);
    }
  }, [count]);

  return (
    <div>
      <div className="grid-box">
        <Box char={value[1]} id="1" showChar={showChar} />
        <Box char={value[2]} id="2" showChar={showChar} />
        <Box char={value[3]} id="3" showChar={showChar} />
        <Box char={value[4]} id="4" showChar={showChar} />
        <Box char={value[5]} id="5" showChar={showChar} />
        <Box char={value[6]} id="6" showChar={showChar} />
        <Box char={value[7]} id="7" showChar={showChar} />
        <Box char={value[8]} id="8" showChar={showChar} />
        <Box char={value[9]} id="9" showChar={showChar} />
      </div>
      <div>
        <BasicModal
          open={gameOver}
          setGameOver={setGameOver}
          winner={winner}
          draw={draw}
          setDraw={setDraw}
          setCount={setCount}
        />
      </div>
    </div>
  );
}

export default App;
