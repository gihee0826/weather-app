import { useEffect,usestate } from 'react';
import './App.css';


// 1. app이 실행되자 마자 현재 위치 기반의 날씨가 보인다.
// 2. 날씨 정보 = 도시, 섭씨 화씨, 날씨상태
// 3. 5개의 버튼이 있다.(1개는 현재 위치, 4개는 다른 도시)
// 4. 도시버튼을 클릭할 때마다 도시별 날씨가 보인다.
// 5. 현재 위치 기반 날씨버튼을 클릭하면 다시 현재이치 기반으로 돌아온다.
// 6. 로딩 스피너 (데이터를 들고오는 동안 로딩 스피너가 돈다)

function App() {
  const getCurrentLocation = () => {
    console.log('getCurrentLocation');
  }
  useEffect(()=>{
    getCurrentLocation()
  },[])

  return (
    <div>
      
    </div>
  );
}

export default App;
