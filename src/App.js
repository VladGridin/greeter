import { useEffect } from 'react';
import './App.css';
import { useTelegram } from './hooks/useTelegram';
const {onTogleButton, tg} = useTelegram

function App() {
  

  useEffect( () => {
      tg.ready();
  }, [])

  return (
    <div className="App">
      <button onClick={onTogleButton}>toogle</button>
    </div>
  );
}

export default App;
