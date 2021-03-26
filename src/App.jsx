import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  // 1つ目に変数名、2つ目にstateを更新するときの変数
  const [num, setNum] = useState(0);
  const [faceshowFlag, setFaceshowFlag] = useState(true);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    setFaceshowFlag(!faceshowFlag);
  };

  // 関心の分離
  // 第2引数に[]配列をいれることでそのコンポーネントで最初だけ通したいものにいれることで一回だけ走らせられる
  // 配列に入れることでそれにのみ関心を持つようになる
  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceshowFlag || setFaceshowFlag(true);
      } else {
        faceshowFlag && setFaceshowFlag(false);
      }
    }
    // まずnumを監視するとする
    //下の文字をすることで今回中にあるけど、関心をもたせたくないものには(今回の場合はfaceshowFlag)eslintの設定を無効にすることができるようになる。
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMessage color="blue">おげんきですか</ColorfulMessage>
      <ColorfulMessage color="pink">元気です</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {/* trueのときだけ表示するようにする */}
      {faceshowFlag && <p>😤</p>}
    </>
  );
};

export default App;
