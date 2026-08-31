import React, { useEffect, useRef, useState } from 'react'
import HTMLPageFlip from 'react-pageflip';
import { Page } from '../components/Page';
import { images, audios, videos } from '../diary-files/diary4/Diary4-Data';
import './Diary4.css';
import { SurpiseBox } from '../components/SurpiseBox';

export const Diary4 = ({ setDiarySelected }) => {

    const bookRef = useRef();

    useEffect(() => {
        document.body.style.background =
            "url('/diary4.gif')";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundAttachment = "fixed";

        const rootElement = document.getElementById('root');
        rootElement.style.overflow = "hidden";
        rootElement.style.maxHeight = "initial";
        return () => {
            rootElement.style.overflow = "auto";
            rootElement.style.maxHeight = "100dvh";
        }
    }, []);

    return (
        <>
            <span className="material-symbols-outlined back-btn" onClick={setDiarySelected}>
                arrow_circle_left
            </span>
            <div className="Diary4 book-container">
                <HTMLPageFlip ref={bookRef}
                    width={450}
                    height={580}
                    size="fixed"
                    minWidth={450}
                    maxWidth={1000}
                    minHeight={580}
                    maxHeight={1350}
                    maxShadowOpacity={0}
                    drawShadow={true}
                    showCover={true}
                    useMouseEvents={true}
                    flippingTime={800}>

                    {/* PORTADA */}
                    <Page title="☁️ Diario esperanza ⭐️" pageClass={"pageDiary4 book-cover start"}>
                        <div className='img-coverContainer'>
                            <img src={images.Startcover} className='img-cover' />
                        </div>
                        <label style={{fontWeight: "700"}}><i>Con mucho amor, la persona que más te ama </i></label>
                    </Page>
                    <Page isCover={true} pageClass={"pageDiary4 book-cover"}>
                        <p className='back-cover-text'><i>¿Recuerdas la foto de la caratula? Es muy especial para mi porque representa como estaremos en noviembre ☀️</i></p>
                    </Page>

                    {/* INTRODUCCIÓN */}
                    <Page title="~ Introducción ~" number="1" pageClass={"pageDiary4 page-interior"}>
                        <p>
                            &emsp;¡Hola amor! 
                        </p>
                        <img src={""} className='imgFirstPage' />
                    </Page>

                    <Page title="Continuará..." number="21" pageClass={"pageDiary4 page-interior"}>
                    </Page>
                    <Page number="22" pageClass={"pageDiary4 page-interior"}>
                    </Page>

                    <Page isCover={true} pageClass={"pageDiary4 book-cover"}>
                    </Page>
                    <Page isCover={true} pageClass={"pageDiary4 book-cover"}>
                        <div className='end-cover'>
                            <img src={""} />
                        </div>
                    </Page>
                </HTMLPageFlip>
            </div >
        </>
    )
}