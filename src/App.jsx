import { useEffect, useRef, useState } from 'react'
import './App.css'
import { Diary1 } from './books/Diary1';
import { DiaryButton } from './components/DiaryButton';
import { images } from './diary-files/menu/Menu-Data';
import { Diary2 } from './books/Diary2';

function App() {

  const [diarySelected, setDiarySelected] = useState(0);

  useEffect(() => {
    document.body.style.background =
      "url('/main-menu.gif')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundSize = "cover";

    const rootElement = document.getElementById('root');
    rootElement.style.overflow = "auto";
    rootElement.style.maxHeight = "100dvh";
  }, [diarySelected])

  if (diarySelected == 1) {
    return (<Diary1 setDiarySelected={() => setDiarySelected(0)} />);
  } else if (diarySelected == 2) {
    return (<Diary2 setDiarySelected={() => setDiarySelected(0)} />);
  }
  else
    return (
      <article className='menu-btn-container'>
        <DiaryButton img={images.Diary1} title={"Diario 1 - Mi diario de recuerdos"} onclick={() => setDiarySelected(1)} />
        <DiaryButton img={images.Diary2} title={"Diario 2 - Mi diario de invierno"} onclick={() => setDiarySelected(2)} />
      </article>
    );
}

export default App
