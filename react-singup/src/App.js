import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Header</p>
      </header>
      <div className="App-body">
        <p>회원가입</p>
        <div className="App-ID">
          ID
          <input />
        </div>
        <div className="App-PW">
          PW
          <input />
        </div>
        <div>
          확인
          <input className="2P" />
        </div>
        <div>
          성별
          <input type="radio" value="남" checked />남
          <input type="radio" value="여" />여
        </div>
        <div>
          취미
          <input type="checkbox" />
          운동
          <input type="checkbox" checked />
          여행
          <input type="checkbox" />
          독서
        </div>
        <div>
          생일
          <input type="date" />
        </div>
        <div>
          나이
          <input />
        </div>
        <div className="App-email">
          이메일
          <input />
          @
          <input />
        </div>
        <div className="App-memo">
          메모
          <textarea textarea rows={4} />
        </div>
        <button>가입</button>
        <button>취소</button>
      </div>
      <div className="App-footer">footer</div>
    </div>
  );
}

export default App;
