import { useEffect, useRef, useState } from 'react'
import './App.css'
import { Diary1 } from './books/Diary1';
import { DiaryButton } from './components/DiaryButton';
import { images } from './diary-files/menu/Menu-Data';

function App() {

  const [diarySelected, setDiarySelected] = useState(0);

  useEffect(() => {
    document.body.style.background =
      "url('https://cdnb.artstation.com/p/assets/images/images/028/387/945/original/angie-sutherland-rsvp-asap-beach-ventuxio-export.gif?1594317998')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundSize = "cover";

    document.body.style.overflow = "auto";
    document.body.style.maxHeight = "100dvh";
  }, [diarySelected])

  if (diarySelected == 1) {
    return (<Diary1 setDiarySelected={() => setDiarySelected(0)} />);
  } else
    return (
      <article className='menu-btn-container'>
        <DiaryButton img={images.Diary1} title={"Diario 1 - Mi diario de recuerdos"} onclick={() => setDiarySelected(1)} />
      </article>
    );
}

export default App
