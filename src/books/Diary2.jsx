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

                    {/* CAPITULO 9 */}
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

                    {/* CAPITULO 10 */}
                    <Page title="10 ~ El fondo..." number="15" pageClass={"pageDiary2 page-interior"}>
                        <p>
                            &emsp; Sin duda, este diario va a quedar para la anécdota de la cantidad de adversidades que han aparecido en este mes... Pero de la que vamos a hablar ahora creo que ha sido la más chocante o profunda... La que realmente nos ha forjado como pareja para que podamos ser más fuerte y entendernos muchísimo mejor. Quién dice que de la caída uno se levanta más fuerte, no podría tener más razón. O que hay que tocar fondo para poder saber hasta donde uno puede presionar tristemente...
                        </p>
                        <audio src={audios.CallYourName} controls style={{ alignSelf: "center", marginTop: "50px" }} />
                    </Page>
                    <Page number="16" pageClass={"pageDiary2 page-interior"}>
                        <p style={{ marginTop: "10px" }}>
                            &emsp; Esa tarde/noche sin duda ninguno de los dos la va a olvidar. A pesar de haber derramado ambos muchas lagrimas y sufrir bastante (donde la adversidad casi nos gana) decidimos volver a elegirnos como siempre lo hacemos. Los pilares de nuestra relación nos volvieron a levantar para continuar juntos...
                            <h3 style={{ textAlign: "center", margin: "15px 0" }}>
                                <i>🐢 Honestidad 🐇</i>
                            </h3>
                            <h3 style={{ textAlign: "center", margin: "15px 0" }}>
                                <i>🐢 Empatía 🐇</i>
                            </h3>
                            <h3 style={{ textAlign: "center", margin: "15px 0" }}>
                                <i>🐢 Paciencia 🐇</i>
                            </h3>
                        </p>
                        <p>
                            &emsp; Y porque sí, como dije, la adversidad casi nos gana pero eso jamás sucederá... Porque ambos vamos a ganar esta guerra dónde todo se pone en contra de nuestro amor.
                        </p>
                        <h3 style={{ textAlign: "center", margin: "20px 0" }}>
                            <i>🐢 Nada ni nadie nos ganará si permanecemos juntos. 🐇</i>
                        </h3>
                    </Page>
                    <Page number="17" pageClass={"pageDiary2 page-interior"}>
                        <p style={{ marginTop: "10px" }}>
                            &emsp; Y obviamente, no puede faltar como en ningún capítulo, algunas palabras de aliento de mi hermosa novia que son las que me dan fuerzas en el día a día para no caer en la locura nuevamente.
                        </p>
                        <div className='sheSupportingMe'>
                            <div className='winter-frame'>
                                <img src={images.Deepdown1} />
                            </div>
                            <div className='winter-frame'>
                                <img src={images.Deepdown2} />
                            </div>
                            <div className='winter-frame'>
                                <img src={images.Deepdown3} />
                            </div>
                        </div>
                    </Page>

                    {/* CAPITULO 11 */}
                    <Page title="11 ~ El caballero antiheróe" number="18" pageClass={"pageDiary2 page-interior"}>
                        <p>
                            &emsp; Quién diría que el sol y la luna se unirían para terminar de conformar mi personalidad... Cuando daba por muerto mi lado de la luna, esta vuelve a aparecer pero más fuerte y más concentrada. Y esta vez para quedarse y nunca más irse.
                        </p>
                        <audio src={audios.TheBreathOfAVow} controls style={{ alignSelf: "center", margin: "20px 0" }} />
                        <p>
                            &emsp; ¿Y por qué vuelve? Vuelve porque no pude soportar la noche que me dijiste que lloraste, suplicando, por querer conocerme y aún así, te trataron con indiferencia y desprecio, a vos y a nuestros bellos recuerdos; como si no valieran nada. Sin duda ese día me queda marcado por el resto de mis días.
                        </p>
                        <h3 style={{ textAlign: "center", margin: "20px 0" }}>
                            <i>🐢 Quiero cuidarte de todo, te lo prometí. 🐇</i>
                        </h3>
                    </Page>
                    <Page number="19" pageClass={"pageDiary2 page-interior"}>
                        <p style={{ marginTop: "10px" }}>
                            &emsp; Por lo que el sol y la luna se unen para terminar de conformar mi personalidad... Cuando daba por muerto mi lado de la luna, vuelve a aparecer pero más fuerte y más concentrada. Y esta vez para quedarse y nunca más irse.
                        </p>
                        <div className='sunAndMoon'>
                            <div className='winter-frame'>
                                <img src={images.SunAndMoon} />
                            </div>
                        </div>
                        <h3 style={{ textAlign: "center", margin: "20px 0" }}>
                            <i>🐢&emsp; Así que, que venga cualquier adversidad que la voy a superar con tal de no ver una lagrima en ese bello rostro. 🐇</i>
                        </h3>
                    </Page>

                    {/* FUNNY TIME 1 */}
                    <Page title="~ Funny Time (1)" number="20" pageClass={"pageDiary2 page-interior"}>
                        <p>
                            &emsp; Este es un nuevo apartado que aparece a partir de este diario. Consistirá en momentos graciosos que hemos ido vivivendo y no he encontrado lugar para ponerlos en un capítulo.
                        </p>
                        <div className='funnyTime1'>
                            <div className='winter-frame'>
                                <img src={images.CabyHdp} />
                            </div>
                            <div className='winter-frame'>
                                <img src={images.DeadOrLive} />
                            </div>
                            <div className='winter-frame'>
                                <img src={images.HouseTree} />
                            </div>
                            <div className='winter-frame'>
                                <img src={images.ImOld} />
                            </div>
                        </div>
                    </Page>
                    <Page number="21" pageClass={"pageDiary2 page-interior"}>
                        <div className='funnyTime1-2'>
                            <div className='winter-frame'>
                                <img src={images.InstagramMistake} />
                            </div>
                            <div className='winter-frame'>
                                <img src={images.SheAuthorizedUsToDestroyTheHouse} />
                            </div>
                            <div className='winter-frame'>
                                <img src={images.SheDoesntThinkTooMuch} />
                            </div>
                            <div className='winter-frame'>
                                <img src={images.YoWhatTheHell} />
                            </div>
                        </div>
                    </Page>
                    <Page number="22" pageClass={"pageDiary2 page-interior"}>
                        <div className='funnyTime1-3'>
                            <div className='winter-frame'>
                                <img src={images.TalkingWithHerBrother1} />
                            </div>
                            <div className='winter-frame'>
                                <img src={images.TalkingWithHerBrother2} />
                            </div>
                        </div>
                    </Page>

                    {/* CAPITULO 12 */}
                    <Page title="12 ~ Los acertijos" number="23" pageClass={"pageDiary2 page-interior"}>
                        <audio src={audios.Tranquility} controls style={{ alignSelf: "center", marginTop: "10px" }} />
                        <p>
                            &emsp; ¿Qué curioso no? Así fue como nos conocimos, vos siendo una detective de los acertijos de mi vida. No me di cuenta como pasó el tiempo pero has ido cada día aprendiendo más y más sobre mí. <br />
                            &emsp; Solo espero que todo lo que he ido proponiéndote te sirva en algún momento.
                        </p>
                        <i style={{ textAlign: "center", fontSize: "1.2rem", margin: "15px 0" }}>¿Qué es un acertijo?</i>
                        <div className='puzzleDiv'>
                            <div className='winter-frame'>
                                <img src={images.Puzzle} />
                            </div>
                        </div>
                    </Page>
                    <Page number="24" pageClass={"pageDiary2 page-interior"}>
                        <p style={{ marginTop: "10px" }}>
                            &emsp; Resulta que todos estos acertijos es para descubrir que personas se toman en serio la vida, los desafios que pueden encontrarse o no... <br />
                            &emsp; Para mí sorpresa llegaste vos (sea por tus decisiones tomadas por vos, Dios o el universo). Una hermosa personita que se tomó el tiempo de conocerme y aumentar sus conocimientos. Al fin y al cabo: "una vida sin saber es una vida aburrida". <br />
                            &emsp; Por eso quiero decirte...
                        </p>
                        <i style={{ textAlign: "center", fontSize: "1.2rem", margin: "15px 0" }}>Gracias</i>
                        <p>
                            &emsp; Gracias por tomarte el tiempo de querer conocer mi mundo interno cada día más y más pese tener nuestras diferencias ideológicas. Todo lo que hemos ido hablando te va a ayudar tarde o temprano, después de todo, a mi me han servido a lo largo de mi vida. Entonces ¿Qué es un puzzle para Matías? No es más que un pedacito de su vida, un pedacito de su saber para resolver problemas o adversidades, entender más el mundo en el que vivimos.
                        </p>
                    </Page>

                    {/* CAPITULO 13 */}
                    <Page title="13 ~ La bella flor que duda de si" number="25" pageClass={"pageDiary2 page-interior"}>
                        <p>
                            (Breve consejo: la canción del anterior capítulo también es para este) <br />
                            &emsp; Nos vamos acercando al final del diario... Y creo que es conveniente mencionar esto porque es increíble como aún te cueste aceptarte. Hay algo que me preocupa mucho en la relación y es precisamente que no te ames, al no amarte y no mostrarte terminas lastimándome. Lo dije en el otro diario pero lo voy a repetir hasta que se te grabe:
                        </p>
                        <h3 style={{ textAlign: "center", margin: "20px 0" }}>
                            <i>🐢 Andrea, sos hermosa, una flor bella que no aprecia lo linda que es en foto, en video, en persona o en VIDEOLLAMADA. 🐇</i>
                        </h3>
                        <p>
                            &emsp; Por eso, este capítulo es un pedido de auxilio a que te aceptes por el bien de la relación. Por mi felicidad, la que tanto juraste cuidar y proteger.
                        </p>
                    </Page>
                    <Page number="26" pageClass={"pageDiary2 page-interior"}>
                        <div className='funnyTime1-3'>
                            <div className='winter-frame'>
                                <img src={images.ProtectMe1} />
                            </div>
                            <div className='winter-frame'>
                                <img src={images.ProtectMe2} />
                            </div>
                        </div>
                    </Page>
                    <Page number="27" pageClass={"pageDiary2 page-interior"}>
                        <p style={{ marginTop: "10px" }}>
                            &emsp; Quisiera con todas mis fuerzas poder entregarte mi visión para que puedas observar lo que yo observo cuando te veo, mi corazón para que sientas lo que siento cuando te veo y mi "amor" para que puedas ver todo lo que te amo. <br />
                            &emsp;Porque sí, esta mujer, es la que tiene mi corazón:
                        </p>
                        <div className='myFlower'>
                            <div className='winter-frame'>
                                <video controls src={videos.Flower1} />
                            </div>
                            <div className='winter-frame'>
                                <img src={images.Flower2} />
                            </div>
                            <div className='winter-frame'>
                                <img src={images.Flower3} />
                            </div>
                            <div className='winter-frame'>
                                <img src={images.Flower4} />
                            </div>
                        </div>
                    </Page>

                    {/* CAPITULO 14 */}
                    <Page title="14 ~ ¡Por fin!" number="28" pageClass={"pageDiary2 page-interior"}>
                        <p>
                            &emsp; Bueno mi amor... Hemos llegado al final de este hermoso diario y ya en este capítulo me comienzo a emocionar jajaja... ¡Qué título tan llamativo! Si me haces el honor, me gustaría que vuelvas a la introducción y leas lo que dice, antes de continuar leyendo este capítulo. <br />
                            &emsp; Asumiendo que lo has leído entonces...
                        </p>
                        <h3 style={{ textAlign: "center", margin: "20px 0" }}>
                            <i>🐢 ¡LO HICIMOS, NOS CONOCIMOS EN PERSONA! 🐇</i>
                        </h3>
                        <p>
                            &emsp; Después de tanta lucha logramos conocernos (no de la forma que nos hubiese gustado pero lo hicimos y es lo que vale). Jamás me voy a olvidar del jueves 02/06/2026, fallé el lunes de esa semana y rogué por otra oportunidad para poder conocerte... Y contra todo pronostico... Se nos dió, logramos vernos y poder dar nuestro primer abrazo así como compartir un hermoso momento donde sostuvimos nuestras manos.
                        </p>
                    </Page>
                    <Page number="29" pageClass={"pageDiary2 page-interior"}>
                        <p style={{ marginTop: "10px" }}>
                            &emsp; Y ese día, cuando comenzaste a mostrar dudas me comencé a preocupar hasta que recordé lo que te juré, como dije el lunes...
                        </p>
                        <audio src={audios.Freedom} controls style={{ alignSelf: "center", marginTop: "10px" }} />
                        <p>
                            &emsp; Esa es la canción que me acompañó todo el jueves "Counter Attack-Mankind". Una canción que me dió la fuerza que necesitaba para no perder ante el miedo ni ante nada. Te juré que te vería y juré que si tenía otra oportunidad el jueves para verte, iría sino me quitaría la vida. <br />
                            &emsp; Por eso ese día estuve tan sereno y concentrado, aunque la duda me invadió en un momento, peleé, peleé contra el miedo de ser descubierto, contra el miedo de no poder verte de nuevo por culpa de tus papás (sobre todo tu mamá, la gran enemiga de esta relación y la que no nos permite vernos) y contra el miedo de que pierdas la confianza que tenés en mí. Prometí cuidarte, y eso haré hasta donde vos me lo permitas, mi bella y dulce princesa ángelical.
                        </p>
                    </Page>
                    <Page number="30" pageClass={"pageDiary2 page-interior"}>
                        <p style={{ marginTop: "10px" }}>
                            &emsp; Gracias por todos tus regalos ese día, gracias por dejarte abrazar, gracias por querer abrazarme y sostener mi mano pese a que estuvieras hecha una bomba de nervios (cosita hermosa jajaja). Y que consté...
                        </p>
                        <h3 style={{ textAlign: "center", margin: "20px 0" }}>
                            <i>🐢 ¡ESTA GUERRA LA GANAMOS NOSOTROS! 🐇</i>
                        </h3>
                        <div className='thisWar'>
                            <div className='winter-frame'>
                                <img src={images.ThisWarWeAreGoingToWin} />
                            </div>
                        </div>
                    </Page>
                    <Page number="31" pageClass={"pageDiary2 page-interior"}>
                        <p style={{ marginTop: "10px" }}>
                            &emsp; Porque juntos, somos más fuertes y nada ni nadie detendrá nuestro amor. Un amor que pese a sus caídas y subidas, pese a la adversidad y a los problema sigue brillando como el día que comenzó, es más...
                        </p>
                        <h3 style={{ textAlign: "center", margin: "20px 0" }}>
                            <i>Brilla aún más. Hasta el 20 de julio, mi bella dama, donde nos veremos nuevamente.</i>
                        </h3>
                        <div className='firstDate'>
                            <div className='winter-frame'>
                                <img src={images.MyGift} />
                            </div>
                            <div className='winter-frame'>
                                <img src={images.HerGift} />
                            </div>
                        </div>
                    </Page>

                    <Page title="Continuará..." number="32" pageClass={"pageDiary2 page-interior"}></Page>

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