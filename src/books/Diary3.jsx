import React, { useEffect, useRef, useState } from 'react'
import HTMLPageFlip from 'react-pageflip';
import { Page } from '../components/Page';
import { images, audios, videos } from '../diary-files/diary3/Diary3-Data';
import './Diary3.css';
import { SurpiseBox } from '../components/SurpiseBox';

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
                    flippingTime={800}>

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

                    {/* CAPITULO 15 */}
                    <Page title="Capítulo 15 ~ La continuación de una bella historia de amor" number="2" pageClass={"pageDiary3 page-interior"}>
                        <p>
                            &emsp;¿Qué tal amor? Este diario es un poco más especial que los otros... No solo porque es LA MITAD DEL RECORRIDO sino que además hemos podido vernos múltiple veces a escondidas... Sí, nos hemos podido ver varias veces al fin. Lo que parecía un sueño por fin se hizo realidad y la verdad que este mes, cada segundo que pasé con vos, fue simplemente PRECIOSO. Cada foto, cada sonrisa nuestras, cada beso (porque sí, inclusive nos pudimos besar pero hey, no más spoilers).
                            <br />
                            &emsp;Te dejo nomás con esta fabulosa historia comenzando por...
                        </p>
                    </Page>
                    <Page number="3" pageClass={"pageDiary3 page-interior"}>
                    </Page>

                    {/* CAPITULO 16 */}
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

                    {/* CAPITULO 17 */}
                    <Page title="Capítulo 17 ~ El príncipe ¡MATÍAS!" number="6" pageClass={"pageDiary3 page-interior"}>
                        <iframe src="https://www.youtube.com/embed/SLJ_O9BsQTA?list=RDSLJ_O9BsQTA" frameborder="0" allow="autoplay; encrypted-media;" referrerpolicy="strict-origin-when-cross-origin" className='andreaIntroduction' allowfullscreen></iframe>
                    </Page>
                    <Page number="7" pageClass={"pageDiary3 page-interior"}>
                        <p style={{ marginTop: "10px" }}>
                            &emsp;El hombre más increíble del planeta Tierra es el segundo en ser presentado en este diario y su nombre es ¡Matías!
                        </p>
                        <h3 style={{ textAlign: "center", margin: "15px 0" }}>
                            <i>🤴🏻 ¡El príncipe caballeroso! 🏰</i>
                        </h3>
                        <div className='castle-frame matiasIntro'>
                            <img src={images.MatiasHeart} />
                            <img src={images.MatiasIntroduction} />
                        </div>
                    </Page>

                    {/* CAPITULO 18 */}
                    <Page title="Capítulo 18 ~ Las actividades de los enamorados" number="8" pageClass={"pageDiary3 page-interior"}>
                        <p>
                            &emsp;Luego de esas hermosas presentaciones, prosigamos... <br />
                            &emsp;Mientras en la obra de "Romeo y Julieta" se enviaban notas de amor... Estos dos enamorados, Matías y Andrea, hacían llamadas, jugaban juntos y Matías le contaba cuentos a su querida Andrea... Le proponía acertijos y preguntas filosóficas que ¡Los dejaban pensando y reflexionando toda la noche!
                        </p>
                        <h3 style={{ textAlign: "center", margin: "15px 0" }}>
                            <i>¡Por favor, música Merlín! 🧙🏻‍♂️</i>
                        </h3>
                        <SurpiseBox audio={audios.YouAreTheMagic} cover={"https://img.magnific.com/premium-vector/valentine-day-seamless-pattern-with-pink-gift-box-with-bow-vector-flat-illustration-romantic-designs-greeting-card-gift-wrapping-paper-stationery-textile-fabric-color-romantic-background_950941-845.jpg?semt=ais_test_b&w=740&q=80"} />
                    </Page>
                    <Page number="9" pageClass={"pageDiary3 page-interior"}>
                        <h3 style={{ textAlign: "center", margin: "5px 0" }}>
                            <i>¡Jugando! 🎮️</i>
                        </h3>
                        <div className='castle-frame ourGames'>
                            <img src={images.Poke1} />
                            <img src={images.Poke2} />
                        </div>
                        <h3 style={{ textAlign: "center", margin: "5px 0" }}>
                            <i>¡Libros! 📚️</i>
                        </h3>
                        <div className='castle-frame ourBooks'>
                            <img src={images.Principito} />
                            <img src={images.NinoTopo} />
                        </div>
                        <h3 style={{ textAlign: "center", margin: "5px 0" }}>
                            <i>¡Acertijos! ❓️</i>
                        </h3>
                        <div className='castle-frame ourPuzzles'>
                            <img src={images.Puzzle1} />
                            <img src={images.Puzzle2} />
                        </div>
                    </Page>
                    <Page number="10" pageClass={"pageDiary3 page-interior"}>
                        <p style={{ marginTop: "10px" }}>
                            &emsp;Y aún así, todas estas actividades eran un señuelo... Señuelo que no se esperaba nadie, para que estos dos enamorados... <br />
                        </p>
                        <h3 style={{ textAlign: "center", margin: "10px 0" }}>
                            <i>¡Se pudieran ver a escondidas!</i>
                        </h3>
                        <p>
                            &emsp; Las actividades hacian llevadero y permitía disimular la magia... La magia de planificar para poder verse a escondidas de los dos rufianes que no les permitían verse... Y así, comenzamos con los eventos más importantes de este diario... Aunque, Matías y Andrea, tuvieron algunos momentos a la distancia que también merecen una mención, dado que marcaron mucho a este mes...
                        </p>
                        <h3 style={{ textAlign: "center", margin: "10px 0" }}>
                            <i>¡Andrea comenzó a enviar fotos y videos con frecuencia a Matías (Gracias ❤️‍🩹)!</i> <br /><br />
                            <i>¡Andrea comenzó a expresarse un poco más (Gracias ❤️‍🩹)!</i> <br /><br />
                            <i>¡Y como siempre, más conflictos que supimos superar juntos!</i>
                        </h3>
                    </Page>

                    {/* CAPITULO 19 */}
                    <Page title="Capítulo 19 ~ El reencuentro" number="11" pageClass={"pageDiary3 page-interior"}>
                        <p>
                            &emsp;Luego de haber esperado unas semanas de vacaciones heladas, ambos, planearon mucho como se verían nuevamente. <br />
                            &emsp;Y este lugar, no sería ni más ni menos que la escuela de Andrea, dónde ocurrian cosas magicas como quizá, alguna que otra travesura entre ellos... <br />
                            &emsp;Así, Matías tendria que tomar de nuevo coraje, para ir a ver a su encantadora princesa...
                        </p>
                        <h3 style={{ textAlign: "center", margin: "15px 0" }}>
                            <i>¡Magiaa! 🪄</i>
                        </h3>
                        <iframe src="https://www.youtube.com/embed/SfIP3E9LPZY" frameborder="0" allow="autoplay; encrypted-media;" referrerpolicy="strict-origin-when-cross-origin" className='refoundedVideo' allowfullscreen></iframe>
                    </Page>
                    <Page number="12" pageClass={"pageDiary3 page-interior"}>
                        <p style={{ marginTop: "10px" }}>
                            &emsp;Y así fue, Matías, tomó el colectivo a escondidas que lo llevaría con Andrea... ¡Y allí se reencontraron al fin!
                        </p>
                        <h3 style={{ textAlign: "center", margin: "15px 0" }}>
                            <i>¡La música de antes para acompañar este bello momento! 🧙🏻🪄🪄</i>
                        </h3>
                        <SurpiseBox audio={audios.VeoLuz} cover={"https://img.magnific.com/premium-vector/valentine-day-seamless-pattern-with-pink-gift-box-with-bow-vector-flat-illustration-romantic-designs-greeting-card-gift-wrapping-paper-stationery-textile-fabric-color-romantic-background_950941-845.jpg?semt=ais_test_b&w=740&q=80"} />
                        <div className='castle-frame refounded1'>
                            <img src={images.OurHands} />
                            <img src={images.Refounded} />
                        </div>
                    </Page>
                    <Page number="13" pageClass={"pageDiary3 page-interior"}>
                        <p style={{ marginTop: "10px" }}>
                            &emsp;Aunque se vieron 30 minutos nomás esa vez, fue hermoso, pues, restringidos por los malévolos padres de Andrea ellos pudieron verse una vez más. Ambos charlaron, se abrazaron y se sacaron muchas fotitos.
                        </p>
                        <h3 style={{ textAlign: "center", margin: "15px 0" }}>
                            <i>¡Fotitos con mucho amor! 🌠</i>
                        </h3>
                        <div className='castle-frame refounded2'>
                            <img src={images.FirstPhotoRefounded} />
                            <img src={images.Fingers} />
                            <img src={images.Fists} />
                            <img src={images.Hairs} />
                            <img src={images.Handheart} />
                            <img src={images.UsFunny} />
                        </div>
                    </Page>

                    {/* CAPITULO 20 */}
                    <Page title="Capítulo 20 ~ El primer beso" number="14" pageClass={"pageDiary3 page-interior"}>
                        <p>
                            &emsp;Luego de tantas fotos... Llegó el momento... Un momento que ambos habían hablando durante mucho tiempo, ¿Dónde sería? ¿Qué tan mágico sería? ¿Sería bajo las estrellas o el sol? Sí, estamos hablando del primer beso entre Matías y Andrea...
                        </p>
                        <h3 style={{ textAlign: "center", margin: "15px 0" }}>
                            <i>🌟🪄🌟</i>
                        </h3>
                        <iframe src="https://www.youtube.com/embed/zsLwrqT7Ut4" frameborder="0" allow="autoplay; encrypted-media;" referrerpolicy="strict-origin-when-cross-origin" className='refoundedVideo' allowfullscreen></iframe>
                    </Page>
                    <Page number="15" pageClass={"pageDiary3 page-interior"}>
                        <p style={{ marginTop: "10px" }}>
                            &emsp;Y efectivamente, lo fue... En un lugar de forma clandestina, contra toda adversidad, con el miedo por las venas de ser descubiertos... Bajo una noche helada pero preciosa... Se besaron. <br />
                            &emsp; Una y otra vez ❤️‍🩹...
                        </p>
                        <div className='castle-frame firstKiss'>
                            <img src={images.FirstKiss} />
                        </div>
                    </Page>
                    <Page number="16" pageClass={"pageDiary3 page-interior"}>
                        <h3 style={{ textAlign: "center", margin: "15px 0" }}>
                            <i>🤴🏻 ¡Y muchos besos más! 👸🏻</i>
                        </h3>
                        <div className='castle-frame kisses'>
                            <img src={images.Kiss1} />
                            <img src={images.Kiss2} />
                            <img src={images.Kiss3} />
                        </div>
                    </Page>

                    {/* CAPITULO 20 */}
                    <Page title="Capítulo 21 ~ El segundo encuentro" number="17" pageClass={"pageDiary3 page-interior"}>
                        <p>
                            &emsp;Después de tan emotivo día de haberse visto, siguieron pasando los días y planificando hasta el próximo encuentro... Hasta que el día llego, el cuál parecía estar predestinado a suceder dado que todo se alineó ese día para que saliera bien...
                        </p>
                        <iframe src="https://www.youtube.com/embed/ZPyaxCiwOhU" frameborder="0" allow="autoplay; encrypted-media;" referrerpolicy="strict-origin-when-cross-origin" className='secondMeet' allowfullscreen></iframe>
                        <h3 style={{ textAlign: "center", margin: "10px 0" }}>
                            <i>🤴🏻 (Te dejo este detallito para acompañar este capítulo) 👸🏻</i>
                        </h3>
                    </Page>
                    <Page number="18" pageClass={"pageDiary3 page-interior"}>
                        <p style={{ marginTop: "10px" }}>
                            &emsp;Todo comenzó pareciendo que iba a salir mal, no se sabía si el hermano o los padres llevaría a la princesa Andrea, que además, tenía que ir a la escuela pero le exigían que hiciera rápido sus cosas... Lo cuál le preguntó al príncipe Matías "¿Qué que harían?"... <br />
                            &emsp;Matías le preguntó a Andrea, con un poco de dudas en su corazón, si ella quería verlo, a lo cuál ella le dijo que sí, pidió por favor que intentarán; Matías no pudo negarse a esta petición y con determinación en su corazón allá fue. Pues resulta que fue el hermano quién llevo a Andrea a la escuela y que ese día, pudieron verse y pasaron varios momentos juntos lindos; entre ellos la famosa "Alba", hija adoptiva de ambos, ¡Pudo ver a su madre y a su padre unidos al fin nuevamente! <br />
                            &emsp; Y todo gracias a que al final, la había llevado el hermano cruel de la príncesa Andrea junto a su adorable abuela, la tan famosa "Mercedes" y la esperaron pese a la prisa que el hermano tenía ese día, además de que el futuro impedimento "Elías" los había dejado estar juntos...
                        </p>
                    </Page>
                    <Page number="19" pageClass={"pageDiary3 page-interior"}>
                        <h3 style={{ textAlign: "center", margin: "10px 0" }}>
                            <i>🤴🏻 ¡A continuacón, los bellos y divertidos recuerdos por favor! 👸🏻</i>
                        </h3>
                        <div className='castle-frame secondMeetAlbum'>
                            <img src={images.Alba} />
                            <img src={images.KissSM1} />
                            <img src={images.KissSM2} />
                            <img src={images.TogetherSM} />
                        </div>
                    </Page>
                    {/* CAPITULO 20 */}
                    <Page title="Capítulo 21 ~ El último encuentro (?)" number="20" pageClass={"pageDiary3 page-interior"}>
                        <p>
                            &emsp;¿Quién diría que este sería el último encuentro que tuvieron Matías y Andrea (porque sí, el narrador viene del futuro)? Pues veamos como resulto pero antes, el video que acompañará a este capítulo final...
                        </p>
                        <iframe src="https://www.youtube.com/embed/_-i67FijpLk?" frameborder="0" allow="autoplay; encrypted-media;" referrerpolicy="strict-origin-when-cross-origin" className='secondMeet' allowfullscreen></iframe>
                        <h3 style={{ textAlign: "center", margin: "10px 0" }}>
                            <i>🤴🏻 Con mucho amor, del príncipe... 👸🏻</i>
                        </h3>
                    </Page>
                    <Page number="18" pageClass={"pageDiary3 page-interior"}>
                        <p style={{ marginTop: "10px" }}>
                            &emsp; Este encuentro si bien tuvo sus momentos lindos, dió por resultado todas cosas feas... Resulta que el enano con pelada brillante se enojó con el príncipe Matías porque no dejaba a la princesa Andrea "concentrarse" (un viejo celoso básicamente) por lo que tomó la medida de que Matías no podría ir más... Lo cuál haría que a partir desde ese momento no podría ir más a la escuela... ¡Pero hey! No venimos a contar las cosas malas ¿No? Venimos a narrar lo bonito de esta historia de amor. Pues, ese día también hubo fotos y hubo algún que otro momento candente pero lo más importante es que... Pese a que salieran las cosas mal, se pudieron ver ambos y demostró algo todo esto...
                        </p>
                        <h3 style={{ textAlign: "center", margin: "10px 0" }}>
                            <i>Que el amor, es más fuerte que la adversidad... ❤️‍🩹</i>
                        </h3>
                        <p >
                            &emsp; Por lo que, da igual cuantas adversidades se encuentre esta pareja en el futuro... Siempre pero siempre, podrán superarlas porque desde mayo, han demostrado que se puede; que para ellos nada es IMPOSIBLE.
                        </p>
                    </Page>
                    <Page number="19" pageClass={"pageDiary3 page-interior"}>
                        <h3 style={{ textAlign: "center", margin: "10px 0" }}>
                            <i style={{ marginBottom: "0" }}>🤴🏻 ¡Feliz 3 meses Andrea! Con cariño de tu príncipe, Matías 👸🏻</i>
                            <p style={{ fontSize: ".9rem", margin: "0px 0", padding: "0px", justifySelf: "flex-start" }}><br /> PD: Te cuidaré, no importa que... Mi bella... PRINCESA</p>
                        </h3>
                        <div className='castle-frame lastMeetAlbum'>
                            <img src={images.LastMeet1} />
                            <img src={images.LastMeet2} />
                            <img src={images.LastMeet3} />
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
                            <img src={images.Backcover} />
                        </div>
                    </Page>
                </HTMLPageFlip>
            </div >
        </>
    )
}