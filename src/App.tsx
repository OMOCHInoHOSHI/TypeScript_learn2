// npm run devで実行

import "./App.css";
import { useState } from "react";

function App() {
  return (
    <>
    {/* <LikeButton></LikeButton>のように子要素などを持たない場合に、<LikeButton />のように末尾に/をつけることで、短く表現できる書き方です。 */}
      <LikeButton />
    </>
  );
}
 
// function LikeButton() {
//   // spanタグ...囲った部分をインライン要素としてグループ化
//   return <span>いいねボタン予定地</span>;
// }

// function LikeButton() {
//   const count = 999;
//   // {}で囲むことで、JavaScriptの式を埋め込むことができる
//   // return <span>♥ {count}</span>;

//   // CSSを適用するために、className属性を追加
//   return <span className="likeButton">♥ {count}</span>;
// }
 

// useStateは関数コンポーネントに状態を持たせるためのReactの機能
// useStateの戻り値をcountとsetCountの2つの変数に代入しています。countには999のような値が代入され、setCountにはcountの値を変更する関数が代入されます。
function LikeButton() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <span className="likeButton" onClick={handleClick}>
      ♥ {count}
    </span>
  );
}

export default App;