import React from 'react';
import Hello from './hello';

// css import
import './App.css';

function App() {
  const name = 'react';

  // css 경우 객체를 만들어 주고 그안에 카멜케이스로 작성
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24, // 기본단위 px
    padding: '1rem', // 다른 단위 사용 시 문자열로 설정
  };

  return (
    // 두개 이상의 태그가 존재한다면 꼭 하나의 태그로 감싸져야 한다.
    // Fragment 단순히 감싸기 용으로 태그를 이용해야 할때 사용
    // 형태 : <></>
    // test

    <>
      {/* 어쩌고 저쩌고 주석처리하기 */}
      /* 중괄호로 감싸지 않으면 화면에 보입니다. */
      <Hello
      // 이런식으로 작성하는 주석은 개발자 도구에 나타나지 않는다
      />
      <input />
      <br />
      <div
        // 아아아아아
        style={style}
      >
        {name}
      </div>
      <div className="gray_box"></div>
    </>
  );
}

export default App;
