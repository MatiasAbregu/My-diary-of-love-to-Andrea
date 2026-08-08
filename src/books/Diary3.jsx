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
                    <Page title="Capítulo 15 ~ La continuación de una bella historia de amor" number="2" pageClass={"pageDiary3 page-interior"}>
                        <p>
                            &emsp;¿Qué tal amor? Este diario es un poco más especial que los otros... No solo porque es LA MITAD DEL RECORRIDO sino que además hemos podido vernos múltiple veces a escondidas... Sí, nos hemos podido ver varias veces al fin. Lo que parecía un sueño por fin se hizo realidad y la verdad que este mes, cada segundo que pasé con vos, fue simplemente PRECIOSO. Cada foto, cada sonrisa nuestras, cada beso (porque sí, inclusive nos pudimos besar pero hey, no más spoilers).
                            <br />
                            &emsp;Te dejo nomás con esta fabulosa historia comenzando por...
                        </p>
                    </Page>
                    <Page number="3" pageClass={"pageDiary3 page-interior"}>
                    </Page>

                    <Page title="Capítulo 16 ~ La princesa ¡ANDREA!" number="4" pageClass={"pageDiary3 page-interior"}>
                        <iframe src="https://www.youtube.com/embed/HLBYylAvz8Y?list=RDHLBYylAvz8Y" frameborder="0" allow="autoplay; encrypted-media;" referrerpolicy="strict-origin-when-cross-origin" className='andreaIntroduction' allowfullscreen></iframe>
                    </Page>
                    <Page number="5" pageClass={"pageDiary3 page-interior"}>
                        <p style={{ marginTop: "10px" }}>
                            &emsp;La mujer más bella del planeta Tierra es la primera en ser presentada en este diario y su nombre es ¡Andrea!
                        </p>
                        <h3 style={{ textAlign: "center", margin: "15px 0" }}>
                            <i>👸🏻 ¡La princesa angelical! 🏰</i>
                        </h3>
                        <div className='castle-frame andreaIntro'>
                            <img src={images.AndreaHeart} />
                            <img src={images.AndreaIntroduction} />
                        </div>
                    </Page>

                    <Page title="Capítulo 17 ~ El príncipe ¡MATÍAS!" number="6" pageClass={"pageDiary3 page-interior"}>
                        <iframe src="https://www.youtube.com/embed/SLJ_O9BsQTA?list=RDSLJ_O9BsQTA" frameborder="0" allow="autoplay; encrypted-media;" referrerpolicy="strict-origin-when-cross-origin" className='andreaIntroduction' allowfullscreen></iframe>               
                    </Page>
                    <Page number="7" pageClass={"pageDiary3 page-interior"}>
                        <p style={{ marginTop: "10px" }}>
                            &emsp;El hombre más increíble del planeta Tierra es el segundo en ser presentado en este diario y su nombre es ¡Matías!
                        </p>
                        <h3 style={{ textAlign: "center", margin: "15px 0" }}>
                            <i>👸🏻 ¡La princesa angelical! 🏰</i>
                        </h3>
                        <div className='castle-frame matiasIntro'>
                            <img src={images.MatiasHeart} />
                            <img src={images.MatiasIntroduction} />
                        </div>
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