import "./App.css";
 
function App() {
  return (
    <>
      <LikeButton />
    </>
  );
}
 
function LikeButton() {
  // spanタグ...囲った部分をインライン要素としてグループ化
  return <span>いいねボタン予定地</span>;
}
 
export default App;