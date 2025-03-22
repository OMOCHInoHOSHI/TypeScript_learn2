import "./App.css";
 
function App() {
  return (
    <>
    {/* <LikeButton></LikeButton>のように子要素などを持たない場合に、<LikeButton />のように末尾に/をつけることで、短く表現できる書き方です。 */}
      <LikeButton />
    </>
  );
}
 
function LikeButton() {
  // spanタグ...囲った部分をインライン要素としてグループ化
  return <span>いいねボタン予定地</span>;
}
 
export default App;