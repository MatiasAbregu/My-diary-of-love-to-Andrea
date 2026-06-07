import React, { useEffect } from 'react'
import { DiaryButton } from '../components/DiaryButton';
import { images } from '../diary-files/menu/Menu-Data';

export const MainMenu = ({ setDiarySelected }) => {

    useEffect(() => {
        document.body.style.background =
            "url('/main-menu.gif')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundAttachment = "fixed";
        document.body.style.backgroundSize = "cover";

        const rootElement = document.getElementById('root');
        rootElement.style.overflow = "auto";
        rootElement.style.maxHeight = "100dvh";
    }, [])

    return (
        <article className='menu-btn-container'>
            <DiaryButton img={images.Diary1} title={"Diario 1 - Mi diario de recuerdos"} onclick={() => setDiarySelected(1)} />
            <DiaryButton img={images.Diary2} title={"Diario 2 - Mi diario de invierno"} onclick={() => setDiarySelected(2)} />
        </article>
    );
}
