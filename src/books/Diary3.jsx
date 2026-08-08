import React, { useEffect, useRef } from 'react'
import HTMLPageFlip from 'react-pageflip';
import { Page } from '../components/Page';
import { images, audios, videos } from '../diary-files/diary3/Diary3-Data';
import './Diary3.css';

export const Diary3 = ({ setDiarySelected }) => {

    const bookRef = useRef();
    useEffect(() => {
        document.body.style.background =
            "url('/diary3.gif')";
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
            <div className="Diary3 book-container">
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
                    flippingTime={800}
                >
                    {/* PORTADA */}
                    <Page title="🏰 El diario de Matías y Andrea 👑" pageClass={"pageDiary3 book-cover start"}>
                        <div className='img-coverContainer'>
                            <img src={images.OurHands} className='img-cover' />
                        </div>
                        <label><i>Con mucho amor, la persona que más te ama ☀️</i></label>
                    </Page>
                    <Page isCover={true} pageClass={"pageDiary3 book-cover"}>
                        <p className='back-cover-text'><i>¿Recuerdas la foto de la caratula? Es muy especial para mi porque representaba nuestro reencuentro ☀️</i></p>
                    </Page>

                    {/* INTRODUCCIÓN */}
                    <Page title="~ Introducción ~" number="1" pageClass={"pageDiary3 page-interior"}>
                        <p>
                            &emsp;¡Hola amor! Te estoy hablando desde este diario, que... Más bien es... ¡Nuestro diario! Un diario lleno de magia no solo porque representa la mitad del camino sino que también contiene las veces que nos hemos visto a escondidas... <br />
                            &emsp;Al gran estilo... ¡ROMEO Y JULIETA! pero no cualquier Romeo y Julieta... Es ¡MATÍAS y ANDREA! La pareja que pese a las miles de adversidades se repone y sigue adelante una y otra vez sin soltarse de las manos como en la foto de la portada ❤️‍🩹<br />
                            &emsp;Bueno, ahora sí... Espero que me acompañes en estas páginas que narran un poco de nuestra aventura en este mes.
                        </p>
                        <img src={images.UsMAndA} className='imgFirstPage' />
                    </Page>

                    {/* CAPITULO 1 */}
                    <Page title="Capítulo 1 ~ El comienzo" number="2" pageClass={"pageDiary3 page-interior"}>
                        <p>
                            &emsp;¿Quién diría que dos personas en la misma provincia podrían conocerse por una red social y caer tan perdidamente enamorados uno del otro? A veces, me hace pensar que el destino o Dios si existe, y que lindo que las cosas estén saliendo así pese que con anterioridad... Mi vida no fuera la más más hermosa.
                        </p>
                        <div className='greetingsDiv'>
                            <img src={""} />
                            <label>¡Qué comienzo jajajaja! Yo siendo raro como siempre</label>
                        </div>
                        <p style={{ marginTop: "10px" }}>
                            &emsp;No podría estar más agradecido que aparezcas en mi vida Andrea, con una mano en el corazón lo digo.
                        </p>
                    </Page>
                    <Page number="3" pageClass={"pageDiary3 page-interior"}>
                        <p style={{ marginTop: "10px" }}>
                            &emsp;Si esto sigue así, podría decir fácilmente que sos el amor de mi vida, el amor que años y años esperé sufriendo en silencio porque pensé que jamás encontraría a una persona que me amé como lo estás haciendo vos; solo mi perrita Melba y perdón que sea insistente con el tema pero, como sabes, gracias a ella estoy vivo y es posible este romance. <br />
                            &emsp;No voy a mentir cuando comence a desarrollar los sentimientos hacia vos pensé que no iban a ser correspondidos gracias a mi "gran" suerte... ¡Qué más! Que te cuente el audio que te mandé hace un tiempo jajsajsjas
                        </p>
                        <div className='audioHowIFallInLove'>
                            <audio src={""} controls />
                            <label>(Desistí con hacer mi propia etiqueta de audio... Llevo 2h y 30 min peleando acá, Dios JSDJA)</label>
                        </div>
                        <p style={{ marginTop: "10px" }}>
                            &emsp; Pero en conclusión... Estamos juntos, correspondiste a mis sentimientos pese a mis dudas... Gracias 🌼
                        </p>
                    </Page>

                  
                    <Page title="Continuará..." number="21" pageClass={"pageDiary3 page-interior"}>
                    </Page>
                    <Page number="22" pageClass={"pageDiary3 page-interior"}>
                    </Page>

                    <Page isCover={true} pageClass={"pageDiary3 book-cover"}>
                    </Page>
                    <Page isCover={true} pageClass={"pageDiary3 book-cover"}>
                        <div className='end-cover'>
                            <img src={""} />
                            <img src={""} />
                        </div>
                    </Page>
                </HTMLPageFlip>
            </div >
        </>
    )
}