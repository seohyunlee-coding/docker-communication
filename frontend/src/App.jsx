import { useState } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState('');
  const [inputData, setInputData] = useState('');
  const [message2, setMessage2] = useState('');

  //get 요청
  const fetchMessage = async () => {
    const res = await fetch('/api/message');
    const text = await res.text();
    setMessage(text);
  };

  //post 요청
  const postData = async () => {
    const res = await fetch('/api/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // JSON 형식으로 데이터 보내기
      },
      body: JSON.stringify({ data: inputData }), // 서버로 전송할 데이터
    });

    const responseData = await res.json(); // 서버 응답 처리
    setMessage2(responseData.message); // 응답 메시지 표시
  };


  return (
    <>
      <h1>Frontend-backend communication </h1>
      <h2>[1] 백엔드에서 데이터 받아오기</h2>
      <p>{message}</p>
      <button onClick={fetchMessage}>백엔드에서 데이터 받아오기</button>

      <h2 style={{ marginTop: '70px' }}> [2] 백엔드로 데이터 보내기</h2>

      <div>
        <input
          style={{ border: '1px solid #ccc', width: '200px', height: '30px', marginRight: '15px', borderRadius: '10px', paddingLeft: '20px' }}
          type="text"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
          placeholder="데이터를 입력해주세요"
        />
        <p>{message2}</p>
        <button onClick={postData}> 백엔드로 데이터 보내기</button>
      </div>
    </>
  )
}

export default App
