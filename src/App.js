import { useEffect } from 'react';
import './App.css';
import { useTelegram } from './hooks/useTelegram';


function App() {
  const {onToogleButton} = useTelegram

  // useEffect( () => {
  //     tg.ready();
  // }, [])

  return (
    <div className="App">
      Hello
      <button onClick={onToogleButton}>Toogle</button>
    </div>
  );
}

export default App;
