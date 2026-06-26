import React, { useEffect, useRef } from 'react'
import HTMLPageFlip from 'react-pageflip';
import { Page } from '../components/Page';
import { images, audios, videos } from '../diary-files/diary2/Diary2-Data';
import './Diary2.css';

export const Diary2 = ({ setDiarySelected }) => {

    const bookRef = useRef();
    useEffect(() => {
        document.body.style.background =
            "url('/diary2.gif')";
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
            <div className="diary2 book-container">
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
                    <Page title="⛄️ Mi diario de invierno ❄️" pageClass={"pageDiary2 book-cover start"}>
                        <div className='img-coverContainer'>
                            <img src={images.MyLove} className='img-cover' />
                        </div>
                        <label><i>Con mucho amor, la persona que más te ama ☀️</i></label>
                    </Page>
                    <Page isCover={true} pageClass={"pageDiary2 book-cover"}>
                        <p className='back-cover-text'><i>¿Recuerdas la foto de la caratula? Es la foto que me hiciste para nuestro primer mes ☀️</i></p>
                    </Page>

                    {/* INTRODUCCIÓN */}
                    <Page title="~ Introducción ~" number="1" pageClass={"pageDiary2 page-interior"}>
                        <p>
                            &emsp;¡Hola amor! Te estoy hablando desde este diario, que... Es la continuación del primer diario que te dediqué para nuestro primer mes. <br />
                            &emsp;Este diario se titula de "invierno" porque son los recuerdos que vamos a ir generando en el mismo de este 2026, quiero que todos los recuerdos especiales que tengo con vos se alojen en algún lugar y no solo en mi mente ❤️‍🩹. Además, esperemos que en este invierno por fin ya nos podamos haber conocido en persona<br />
                            &emsp;Sin más dilación... Espero que me acompañes en estas páginas que escribí con mucho amor para la persona que ocupa uno de los lugares más importantes en mi corazón.
                        </p>
                        <img src="https://static.vecteezy.com/system/resources/thumbnails/070/220/364/small_2x/pink-rabbit-and-green-turtle-cartoon-characters-running-together-in-playful-interaction-illustration-vector.jpg"
                            className='imgFirstPage' />
                    </Page>

                    {/* CAPITULO 7 */}
                    <Page title="Capítulo 7 ~ Sobrepensar" number="2" pageClass={"pageDiary2 page-interior"}>
                        <p>
                            &emsp; Quizá no es la mejor forma de comenzar a relatar un diario pero creo que es conveniente dejar constatado en el mismo... Dado que tal vez esto queda para la posterioridad como un simple recuerdo anecdótico. <br />
                            &emsp; Como sabrás del anterior diario narré que en mi cabeza había un conflicto por ser un caballero o un antiheróe. La realidad es que no es lo único que pasa por ella, hay un conflicto con el que luchó por decadas y es...
                        </p>
                        <h4 style={{ textAlign: "center" }}><i>¿Podré ser amado como me gustaría que me amen?</i></h4>
                        <p>&emsp; Estoy acostumbrado a dar el 110% en mis vínculos porque es una forma de ponerle "pruebas" para ver si valen la pena o no. Algo que suelo decir es "¿Te estás cansando de mi?" pero en realidad significa: "¿Estás seguro/a qué podés cuidar nuestro vínculo? ¿Aunque eso implique sacrificarse...?"</p>
                    </Page>
                    <Page number="3" pageClass={"pageDiary2 page-interior"}>
                        <p style={{ marginTop: "10px" }}>
                            &emsp; La realidad es que no me cuesta esforzarme por ver al otro feliz, hace tiempo lo dejé de hacer porque me di cuenta que nadie lo valía...
                        </p>
                        <div className='audioAndImgMyHurtHeart'>
                            <img src="https://i.pinimg.com/1200x/ee/6b/46/ee6b469b3cf0833bdbcc01ec078ed042.jpg" />
                            <audio src={audios.BlackAndWhiteEmotion} controls />
                        </div>
                        <p style={{ marginTop: "10px" }}>
                            &emsp; Hasta que hace poco te conocí y al ver que te esforzabas por mi en algunos ámbitos me dieron ganas de comenzar a hacer lo mismo porque como dije: "110%", "reciprocidad" y "empatía" o nada...
                        </p>
                    </Page>
                    <Page number="4" pageClass={"pageDiary2 page-interior"}>
                        <p style={{ marginTop: "10px" }}>
                            &emsp; Antes que nada, perdón si soy muy duro, es que genuinamente confío en vos y tu esfuerzo. Hay algo dentro de mí que me dice que sos capaz de lograr tocar lo profundo de mi corazón... <br />
                            &emsp; No sé si te diste cuenta pero la imagen de antes es un chico pequeño con su "pokémon" que lo acompaña siempre... Y me recordó a mi con Melba... Aquel ser vivo que me dio a entender que si podía ser amado pero que el transcurrir del tiempo me la quitó...
                        </p>
                        <div className='imgMelba'>
                            <img src={images.YoConMelba} />
                            <label>(Acá tenía como 12 años, no te burles lpm 😭)</label>
                        </div>
                    </Page>
                    <Page number="5" pageClass={"pageDiary2 page-interior"}>
                        <p style={{ marginTop: "10px" }}>
                            &emsp; Con todo esto voy a que realmente confío en que puedas hacerme feliz... Muchos de tus gestos demuestran que te esforzas, hoy 6 de junio de 2026 me hiciste tan feliz con todos los gestos que tuviste a mi pero hubo algunos en particular que me llenaron el alma y de nuevo, gracias.
                        </p>
                        <div className='trustHer'>
                            <img src={images.HerIntentions} />
                            <img src={images.FirstLovePhoto} />
                            <img src={images.Landscape} />
                            <img src={images.SheRemember} />
                            <img src={images.Whasaa} />
                        </div>
                        <label style={{ marginTop: "50px", textAlign: "center" }}>
                            <i>Todo esto demuestra cuanto me escuchas y cuanto me amas ❤️‍🩹</i>
                        </label>
                    </Page>
                    <Page number="6" pageClass={"pageDiary2 page-interior"}>
                        <p style={{ marginTop: "10px" }}>
                            &emsp; Pero por favor, no prometas cosas que no vas a cumplir, no juegues con mi pobre corazón, no me lo lastimes más porque de verdad que estás en una posición que me puede hacer mucho daño. Confío plenamente en vos y lo último que quisiera es tener que romper con vos porque implicaría romper también mi corazón por tener que recuperar un estado de "paz" que no era tampoco la gran paz en su momento...
                        </p>
                        <h4 style={{ textAlign: "center", margin: "15px 0" }}>
                            <i>Por eso, porque te amo demasiado, depósito mi fe en que serás la persona que pueda dar el 110% como yo lo hago porque sé que sos capaz con tu brillo de alcanzarme el ritmo 🌟</i>
                        </h4>
                        <div className='tryImgBox'>
                            <img src={images.SheTry1} />
                            <img src={images.SheTry2} />
                        </div>
                    </Page>

                    {/* CAPITULO 8 */}
                    <Page title="Capítulo 8 ~ La videollamada" number="7" pageClass={"pageDiary2 page-interior"}>
                        <p>
                            &emsp; Es difícil comenzar a narrar esto porque es mucho lo que quiero expresar... Por lo que es muy probable que me tome un mínimo de 5 hojas jajajaja... Pero dejo de dar vueltas.
                        </p>
                        <h3 style={{ textAlign: "center", margin: "15px 0" }}>
                            <i>Gracias ❤️‍🩹</i>
                        </h3>
                        <p>
                            &emsp; Gracias por prender tu cámara... Uno de mis deseos más grandes en esta relación es que pudiera conocerte en persona, no solo a través de una foto o un audio... Sino en vivo, cara a cara pero por "x" circunstancias, que vos y yo sabemos, aún no podemos...<br />
                            &emsp; Pero bien, eso no impide que no pueda "conocerte en persona", y acá entra la famosa videollamada que tanto tiempo te he solicitado y que por fin después de tanto estamos pudiendo hacer como pareja...
                        </p>
                    </Page>
                    <Page number="8" pageClass={"pageDiary2 page-interior"}>
                        <iframe src="https://www.youtube.com/embed/1aaZbO7PgQw" className='videocallLove'
                            frameBorder="0" allow="autoplay; encrypted-media;" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        <label style={{ textAlign: "center", fontSize: ".85rem" }}>
                            <i>(Esta canción te la dediqué ya pero me sirve para hacerte ver lo que siento yo)</i>
                        </label>
                        <p style={{ marginTop: "10px", zIndex: "999" }}>
                            &emsp; Verte no es simplemente "ver a mi novia", es ver a la persona que poco a poco me está ayudando a ver el mundo con colores de nuevo. Como dije en el diario anterior: a mi ángel. Y que pese yo aún no estar construido ni ser lo que aspiro a ser en la vida me escoge a mí, una persona que no podría explicar todo lo que me hace sentir con simplemente un "te amo".
                        </p>
                        <div className='winter-frame'>
                            <img src={images.AGirlWhoLovesMe} className='GWLM' />
                        </div>
                    </Page>

                    <Page number="9" pageClass={"pageDiary2 page-interior"}>
                        <p style={{ marginTop: "10px" }}>
                            &emsp; Y aunque aún no haya visto tu cara en una videollamada (ya dentro de poco, yo sé que sí) estoy generando recuerdos sumamente preciosos y maravillosos que me hacen querer afrontar mis días a días con una sonrisa de oreja a oreja en el rostro. Te adjunto tu bella manita y un poco de tu hermosa frente (sí, sos hermosa deja de atacarte porque sino me enojo 😡):
                        </p>
                        <div className='videocallIMG-container'>
                            <div className='winter-frame'>
                                <img src={images.MyHand} />
                            </div>
                            <div className='winter-frame'>
                                <img src={images.HerHand} />
                            </div>
                            <div className='winter-frame'>
                                <img src={images.KoreanHeart} />
                            </div>
                            <div className='winter-frame'>
                                <img src={images.HerFingersHeart} />
                            </div>
                        </div>
                    </Page>
                    <Page number="10" pageClass={"pageDiary2 page-interior"}>
                        <p style={{ margin: "10px 0" }}>
                            &emsp; En fin mi alma gemela... Es simplemente hermoso poder pasar tiempo con vos, realmente lo valoro mucho pero valoro aún más que no sea yo el único que sienta todo lo que siento... PD: Me hiciste llorar el día que me dijiste "gracias" de la nada, te amodio
                        </p>
                        <div className='thankfulImg'>
                            <div className='winter-frame'>
                                <img src={images.Thanks} />
                            </div>
                            <div className='winter-frame'>
                                <img src={images.SheIsThankful} />
                            </div>
                        </div>
                    </Page>

                    <Page title="9 ~ El conejo y la tortuga..." number="11" pageClass={"pageDiary2 page-interior"}>
                        <p>
                            &emsp; Después de un buen tiempo... Retomo el diario que dije escribir cuando creyera que era necesario...  <br /> &emsp; Y acá me encuentro, para narrar 6 capítulos; pero primero, narrar el que tenía pendiente. Y es el del conejo y la tortuga, o más bien...
                        </p>
                        <h3 style={{ textAlign: "center", margin: "15px 0" }}>
                            <i>Yo 🐇 y vos 🐢</i>
                        </h3>
                        <audio src={audios.OneLove} controls style={{ alignSelf: "center" }} />
                        <p>
                            &emsp; Pensar que todo comenzó creyendo que yo era un tipo "rudo", la realidad es que no puede estar más alejado de eso y con el tiempo lo fuiste descubriendo. Diría mí mamá (tu suegra jajaja): "Vos sos un perro herido, no un mal tipo". Cansado de sufrir tanto levanté tantas barreras a mi alrededor para que nadie más pudiera hacerme daño o notar mis debilidades...
                        </p>
                    </Page>
                    <Page number="12" pageClass={"pageDiary2 page-interior"}>
                        <p style={{ margin: "10px 0" }}>
                            &emsp; ¿Por qué? Porque tenía miedo de que me abandonarás o de qué te pudieras cansar... La gente se cansa rápido de mí, lo dije en su momento, y suele ser porque soy atosigante de vez en cuando. Pero no podía estar más equivocado porque llegó "Miss Tortuga" a romper con ese sesgo mío.
                        </p>
                        <div className='bunnyAndTurtle'>
                            <div className='winter-frame'>
                                <img src={images.Bunny} />
                            </div>
                            <div className='winter-frame'>
                                <img src={images.Turtle} />
                            </div>
                        </div>
                    </Page>
                    <Page number="13" pageClass={"pageDiary2 page-interior"}>
                        <p style={{ margin: "10px 0" }}>
                            &emsp; Como me dijo en el primer diario, las personas correctas se van a tomar el tiempo de conocerme porque creen que vale la pena el esfuerzo. Al final, descubrió que era una persona que sí le gusta estar en compañia de aquellos que él considera valiosos para su vida. <br /> &emsp;Ahora.... ¿Cómo es qué ella llega ser una "tortuga"? Adjunto evidencia 😃👍🏻
                        </p>
                        <div className='howSheBecameInATurtle'>
                            <div className='winter-frame'>
                                <img src={images.FirstTurtle} />
                            </div>
                            <div className='winter-frame'>
                                <img src={images.SecondTurtle} />
                            </div>
                        </div>
                    </Page>
                    <Page number="14" pageClass={"pageDiary2 page-interior"}>
                        <p style={{ margin: "10px 0" }}>
                            &emsp; En fin, mi mujer más de una vez se olvida de mí y de lo que me gusta... Por eso es lenta como una tortuga mientras su pareja es veloz como un conejo ❤️. Aunque bueno, el esfuerzo y dedicación que pone en la relación es algo muy valioso que a veces se olvida cuanto lo valoro. <br /> &emsp;Ya vas a ver amor que es cuestión de tiempo para que, sea veloz como un conejito o lento como una tortuga, lleguemos a la meta juntos.
                        </p>
                        <h3 style={{ textAlign: "center", margin: "15px 0" }}>
                            <i>🐢 Porque lo que importa, no es la velocidad, sino que lleguemos juntos hasta el final 🐇</i>
                        </h3>
                        <div className='winter-frame thinkAbouTheOther'>
                            <img src={images.TogetherThinkingAboutTheOther} style={{ width: "85%" }} />
                        </div>
                    </Page>
                    <Page title="10 ~ El fondo..." number="15" pageClass={"pageDiary2 page-interior"}>
                        <p>
                            &emsp; Sin duda, este diario va a quedar para la anécdota de la cantidad de adversidades que han aparecido en este mes... Pero de la que vamos a hablar ahora creo que ha sido la más chocante o profunda... La que realmente nos ha forjado como pareja para que podamos ser más fuerte y entendernos muchísimo mejor. Quién dice que de la caída uno se levanta más fuerte, no podría tener más razón. O que hay que tocar fondo para poder saber hasta donde uno puede presionar tristemente...
                        </p>
                    </Page>
                    <Page number="16" pageClass={"pageDiary2 page-interior"}>

                    </Page>

                    <Page isCover={true} pageClass={"pageDiary2 book-cover"}>
                    </Page>
                    <Page isCover={true} pageClass={"pageDiary2 book-cover"}>
                        <div className='end-cover'>
                            <img src={images.AboutUs} />
                        </div>
                    </Page>
                </HTMLPageFlip>
            </div >
        </>
    )
}

/* 
El caballero antiheróe 
Los acertijos 
El rechazo (familia)
La bella flor que duda de si 
*/