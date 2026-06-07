import { useEffect, useRef, useState } from 'react'
import './App.css'
import { MainMenu } from './books/MainMenu';
import { Diary1 } from './books/Diary1';
import { Diary2 } from './books/Diary2';

function App() {

  const [diarySelected, setDiarySelected] = useState(0);

  if (diarySelected == 1) {
    return <Diary1 setDiarySelected={() => setDiarySelected(0)} />;
  } else if (diarySelected == 2) {
    return <Diary2 setDiarySelected={() => setDiarySelected(0)} />;
  }

  return <MainMenu setDiarySelected={setDiarySelected} />

}

export default App
