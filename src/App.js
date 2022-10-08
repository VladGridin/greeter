import { useEffect } from 'react';
import './App.css';
import { useTelegram } from './hooks/useTelegram';


function App() {
   const {tg} = useTelegram

  // useEffect( () => {
  //     tg.ready();
  // }, [])
  const onToogleButton = () => {
    if(tg.MainButton.isVisible) {
        tg.MainButton.hide();
    } else {
        tg.MainButton.show();
    }
  }
  return (
    <div className="App">
      Hello
      <button onClick={onToogleButton}>Toogle</button>
    </div>
  );
}

export default App;
