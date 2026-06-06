import React, { useEffect, useRef } from 'react'
import HTMLPageFlip from 'react-pageflip';
import { Page } from '../components/Page';
import { images, audios, videos } from '../diary-files/diary1/Diary1-Data';
import './Diary1.css';

export const Diary2 = ({ setDiarySelected }) => {

    const bookRef = useRef();
    useEffect(() => {
        document.body.style.background =
            "url('https://gifdb.com/images/high/nature-landscape-background-6tnnhmtb0yy1djui.gif')";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundAttachment = "fixed";

        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflowY = "auto";
        }
    }, []);

    return (
        <>
            <span class="material-symbols-outlined back-btn" onClick={setDiarySelected}>
                arrow_circle_left
            </span>
            <div className="diary1 book-container">
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
                    <Page title="🌸 Mi diario de recuerdos 🌸" pageClass={"pageDiary1 book-cover start"}>
                        <div className='img-coverContainer'>
                            <img src={images.Promesa} className='img-cover' />
                        </div>
                        <label><i>Con mucho amor, la persona que más te ama ☀️</i></label>
                    </Page>
                    <Page isCover={true} pageClass={"pageDiary1 book-cover"}>
                        <p className='back-cover-text'><i>¿Recuerdas aquella promesa que nos hicimos con la foto de la caratula? Es muy especial para mi ☀️</i></p>
                    </Page>

                    {/* INTRODUCCIÓN */}
                    <Page title="~ Introducción ~" number="1" pageClass={"pageDiary1 page-interior"}>
                        <p>
                            &emsp;¡Hola amor! Te estoy hablando desde este diario, que... Yo sé que tenemos una app pero prefiero poder narrar todo lo que siento en esto que será nuestra próxima bitácora o bueno, más bien... Mi bitácora especial junto a vos ¡Jajajaja! <br />
                            &emsp;No quiero que sea un simple diario, quiero que todos los recuerdos especiales que tengo con vos se alojen en algún lugar y no solo en mi mente; quiero que formes parte de lo que pasa por mi mente cada día que haces algo especial por mi. Ya sea que a distancia o cuando nos veamos cara a cara ❤️‍🩹<br />
                            &emsp;Sin más dilación... Espero que me acompañes en estas páginas que escribí con mucho amor para la persona que ocupa uno de los lugares más importantes en mi corazón.
                        </p>
                        <img src="https://img.pikbest.com/png-images/20241219/sweet-love-the-adorable-cartoon-couple_11274311.png!sw800"
                            className='imgFirstPage' />
                    </Page>

                    {/* CAPITULO 1 */}
                    <Page title="Capítulo 1 ~ El comienzo" number="2" pageClass={"pageDiary1 page-interior"}>
                        <p>
                            &emsp;¿Quién diría que dos personas en la misma provincia podrían conocerse por una red social y caer tan perdidamente enamorados uno del otro? A veces, me hace pensar que el destino o Dios si existe, y que lindo que las cosas estén saliendo así pese que con anterioridad... Mi vida no fuera la más más hermosa.
                        </p>
                        <div className='greetingsDiv'>
                            <img src={images.Saludo} />
                            <label>¡Qué comienzo jajajaja! Yo siendo raro como siempre</label>
                        </div>
                        <p style={{ marginTop: "10px" }}>
                            &emsp;No podría estar más agradecido que aparezcas en mi vida Andrea, con una mano en el corazón lo digo.
                        </p>
                    </Page>
                    <Page number="3" pageClass={"pageDiary1 page-interior"}>
                        <p style={{ marginTop: "10px" }}>
                            &emsp;Si esto sigue así, podría decir fácilmente que sos el amor de mi vida, el amor que años y años esperé sufriendo en silencio porque pensé que jamás encontraría a una persona que me amé como lo estás haciendo vos; solo mi perrita Melba y perdón que sea insistente con el tema pero, como sabes, gracias a ella estoy vivo y es posible este romance. <br />
                            &emsp;No voy a mentir cuando comence a desarrollar los sentimientos hacia vos pensé que no iban a ser correspondidos gracias a mi "gran" suerte... ¡Qué más! Que te cuente el audio que te mandé hace un tiempo jajsajsjas
                        </p>
                        <div className='audioHowIFallInLove'>
                            <audio src={audios.AudioMeGusta} controls />
                            <label>(Desistí con hacer mi propia etiqueta de audio... Llevo 2h y 30 min peleando acá, Dios JSDJA)</label>
                        </div>
                        <p style={{ marginTop: "10px" }}>
                            &emsp; Pero en conclusión... Estamos juntos, correspondiste a mis sentimientos pese a mis dudas... Gracias 🌼
                        </p>
                    </Page>

                    {/* CAPITULO 2 */}
                    <Page title="Capítulo 2 ~ Caballero vs Antihéroe" number="4" pageClass={"pageDiary1 page-interior"}>
                        <p>
                            &emsp; Creo que este capítulo es el que más te va a gustar leer amor y es cómo poco a poco estás purificando a una persona consumida por el odio, le estás re-enseñando que el amor es otra fuerza digna de usar.
                        </p>
                        <div className='audioAntiheroVsKnight'>
                            <audio src={audios.TaktOfHeroes} controls />
                            <label>¡Te dejo una música para que le des emoción al asunto!</label>
                        </div>
                        <p style={{ marginTop: "10px" }}>
                            &emsp; Te voy a ser sincero, yo perdí la fe en la humanidad hace tiempo, mi cabeza llegó un punto que no pudo aguantar más con el dolor por lo que creó "mascaras" para resguardarse del daño exterior. Todos los acertijos cuando te conocí creo que lo demostraban... ¿Creo? Jajajaja. <br />
                            &emsp; Te conté un poco sobre esto pero ¿Qué tiene que ver esto con nosotros? Pues como dije, me estás ayudando poco a poco a recuperar algo dentro de mi que creí haber perdido... Y son mis ideales de <b>"caballero"</b>.
                        </p>
                    </Page>
                    <Page number="5" pageClass={"pageDiary1 page-interior"}>
                        <p style={{ marginTop: "10px" }}>
                            &emsp;Hace rato los había dejado de lado porque no tenía nada que proteger además de mi hermanito, sí, solo a él. El caso es que, llegó una persona especial a mi vida que me dan ganas de protegerla, cuidarla... A la que yo le suelo decir <b>"MI ÁNGEL"</b> porque sin siquiera conocerme me tendió la mano para devolverme la poca luz que poco a poco estaba desapareciendo 🪽. <br />
                            &emsp; No fueron más que sus mensajes de esperanza y aliento los que me dieron fuerza, coraje y valor para levantarme día tras día...
                        </p>
                        <div className='imgKnights'>
                            <div>
                                <img src={images.SeVosMismo} />
                            </div>
                            <div>
                                <img src={images.NoEstoySolo} />
                                <img src={images.NoTeEstanques} />
                            </div>
                        </div>
                    </Page>
                    <Page number="6" pageClass={"pageDiary1 page-interior"}>
                        <p style={{ marginTop: "10px" }}>
                            &emsp;Gracias "amorcito" 🌸, devolviste el brillo a un pobre chico que se sentía ahogado en la oscuridad, el resentimiento y el dolor; dice el dicho "después de la lluvia sale el arcoíris" y mi arcoíris sos vos amor. Te juro que si me seguís cuidando como lo haces hasta el día de hoy, voy a protegerte con todo lo que tengo en mi haber, incluyendo mi vida porque tu corazón tan noble decidió ayudar a esta pobre alma...
                        </p>
                        <div className='myPrincess'>
                            <img src={images.ReinhardFret} />
                            <label>Y así como un caballero hace un pacto con su princesa... Yo lo hago ante usted, mi bella y dulce princesa</label>
                        </div>
                    </Page>
                    <Page number="7" pageClass={"pageDiary1 page-interior"}>
                        <p style={{ marginTop: "10px" }}>
                            &emsp;Jamás me alcanzarán las palabras para poder decirte cuanto te amo, amor mio, eso lo sé; pero si tengo el poder y la voluntad para demostrar mi amor día a día. Y eso haré, apreciando cada detalle que me hagas y valorando los gestos de mucha voluntad que dedicas hacia mi y que otros humanos no están dispuesto a hacer por mi así como vos no estás dispuesta a brindarle tal confianza a cualquiera.
                        </p>
                        <div className='imgGifts'>
                            <div className='containerGifts'>
                                <div>
                                    <img src={images.PrimerFoto} />
                                    <img src={images.Regalo1} />
                                </div>
                                <div>
                                    <audio src={audios.SuPrimerAudio} controls playsInline />
                                    <video controls muted>
                                        <source src={videos.SuPrimerVideo} type="video/mp4"></source>
                                    </video>
                                </div>
                            </div>
                            <label>Te amo y amo cada detalle 💌. PD: Pa' vos 🖕🏻</label>
                        </div>
                    </Page>

                    {/* CAPITULO 3 */}
                    <Page title="Capítulo 3 ~ Mi niña angelical" number="8" pageClass={"pageDiary1 page-interior"}>
                        <p>
                            &emsp;Gracias por ayudarme a escoger el apodo para este capítulo, mi bella niña ❤️‍🩹. Y así como lo escribí en el poema que te dediqué...
                        </p>
                        <p className='text-poem'>
                            <br />
                            <i>
                                "Pocas son las palabras para descibrir la euforia y la alegría<br />
                                que mi corazón siente al recibir un mensaje tuyo, amada mía.<br />
                                Y si bien, quisiera poder estar cerca para compartir todo lo que siento,<br />
                                no dejaré que los obstáculos se interpongan entre el amor nuestro."<br />
                            </i>
                        </p>
                        <p style={{ marginTop: "10px" }}>
                            &emsp;Y la realidad es que siempre estoy esperando un mensaje tuyo, un audio, una foto o un video. Me hace muy feliz tenerte a mi lado y quisiera poder compartir siempre cada momento, por más pequeño que sea, con vos.
                        </p>
                        <audio style={{ alignSelf: "center" }} src={audios.AtTheBeginning} controls></audio>
                    </Page>
                    <Page number="9" pageClass={"pageDiary1 page-interior"}>
                        <p style={{ marginTop: "10px" }}>
                            &emsp;Y si, esa canción tiene algo muy especial para mi por si no te diste cuenta... Y es que cuando la escuché por primera vez me dijiste de verla juntos, investigué ese día un poco sobre los personajes y la verdad es que me encantaron, sobre todo Dimitri porque hay algo que compartimos él y yo, así como vos con Anastasia; y es que Anastasia transformó a Dimitri inspirándolo a ser su mejor versión, dejando una mala vida atrás. <br />
                            &emsp; Y la princesa de la que enamoré, por más que a veces se acompleje de su imagen, - ante mis ojos, es la mujer más bella que he visto, no solo por su físico sino por su alma y su personalidad - se ve así:
                        </p>
                        <div className='divAngel' style={{ marginTop: "5px" }} >
                            <img src={images.Album11} />
                            <img src={images.PrimerFotoRostro} />
                            <img src={images.Album21} />
                        </div>
                    </Page>
                    <Page number="10" pageClass={"pageDiary1 page-interior"}>
                        <p style={{ marginTop: "10px" }}>
                            &emsp;Y no voy a mentir... Amo nuestras noches hormonales pero amo mucho más las veces que nos decimos "te amo" mutuamente y competimos por ver quién amá más a quién... (El mes de junio es mio JASJA). <br />
                            &emsp;Sin embargo, la realidad es que así como vos me ayudas mil y un veces con mis pensamientos, quiero poder yo ser tu escudo y refugio en tus días más grises. ¿Necesitas mi hombro? Acá estoy. ¿Necesitas alguien que te oiga? Acá estoy. ¿Necesitas alguien con el que simplemente ser vos misma? Acá estoy.
                        </p>
                        <audio controls src={audios.AThousandMiles} style={{ alignSelf: "center", marginTop: "10px" }}></audio>
                        <p style={{ marginTop: "10px" }}>
                            &emsp;Si me permitís acompañarte toda la vida, eso haré, no quiero que haya nadie más. No necesito de otra mujer porque encontré una mujer que me ama, <b>hace el esfuerzo continuamente por recordarmelo y demostrarmelo</b> y que sobre todas las cosas, no desiste conmigo.
                        </p>
                    </Page>
                    <Page number="11" pageClass={"pageDiary1 page-interior"}>
                        <p style={{ marginTop: "10px" }}>
                            &emsp;Así que sí, por vos caminaría "Miles de millas" para poder estar con vos y demostarles a tus papás que no tengo malas intenciones con vos.
                        </p>
                        <div className='funnyMoments11' style={{ marginTop: "10px" }}>
                            <div>
                                <img src={images.Latrell} />
                                <img src={images.CCG} />

                            </div>
                            <label><i>🌸 Gracias por amarme tanto 🌼</i></label>
                        </div>
                    </Page>

                    {/* CAPITULO 4 */}
                    <Page title="Capítulo 4 ~ Somos un gran equipo" number="12" pageClass={"pageDiary1 page-interior"}>
                        <p>
                            &emsp;Cuando pensabá que era yo el único que estaba recuperando su brillo resulta que no... Más bien, ambos nos estamos devolviendo el brillo mutuamente como un gran equipo, el gran equipo que somos ☀️☝🏻
                        </p>
                        <audio src={audios.ShapeOfMyHeart} controls style={{ alignSelf: "center" }} />
                        <img src={images.SuBrillo} className='herShine' />
                        <label><i>🌸 Y espero poder seguir sacandote sonrisas para que tu brillo nunca se apague 🌼</i></label>
                    </Page>
                    <Page number="13" pageClass={"pageDiary1 page-interior"}>
                        <p style={{ marginTop: "10px" }}>
                            &emsp;Porque así como me dijiste... Creo que ambos no solo hacemos la pareja ideal por el brillo que nos sacamos mutuamente, sino por la #Honestidad y #Empatía que nos tenemos mutuamente. <br />
                            &emsp;<b>Nos entedemos mutuamente y eso se nota, inclusive en cada "conflicto" que hemos superado ❤️‍🩹</b>
                        </p>
                        <div className='imgMutualCouple'>
                            <img src={images.TeVanAEntender} />
                            <img src={images.HacerteBien} />
                        </div>
                        <label><i>Pondría mensajes mios acá pero la que brilla ahora mismo sos vos, no yo 🌟</i></label>
                    </Page>
                    <Page number="14" pageClass={"pageDiary1 page-interior"}>
                        <p style={{ marginTop: "10px" }}>
                            &emsp;Además... Todo esto es tan maravilloso que yo sé que seremos unos grandes padres en el futuro (Porque sí, si no es con vos entonces no quiero ser padre), en adición, ¡Tendremos una granja con todos nuestros animales!
                        </p>
                        <div className='togetherWeAreGreat'>
                            <img src={images.OurHouse} />
                            <img src={images.ImInLove} />
                        </div>
                    </Page>
                    <Page number="15" pageClass={"pageDiary1 page-interior"}>
                        <p style={{ marginTop: "10px" }}>
                            &emsp;De verdad, quisiera poder hacer tantas cosas con vos... Pero <b>yo sé que las haremos porque juntos hacemos un equipo genial y nada nos detiene.</b> <br />
                            &emsp; Y aunque me cueste y me pese la distancia, seré paciente por vos; porque es muy obvio que estoy muy enamorado... Tan enamorado que si veo una pareja por la calle o algo de lo que hablamos no puedo evitar pensar en vos.
                        </p>
                        <div className='ImInLove'>
                            <img src={images.MeExtrano} />
                            <img src={images.MiedoAPerderme} />
                        </div>
                        <label><i>🌙 No pude haber encontrado mejor pareja que mi alma gemela ☀️</i></label>
                    </Page>

                    {/* CAPITULO 5 */}
                    <Page title="Capítulo 5 ~ Nuestro primer mes" number="16" pageClass={"pageDiary1 page-interior"}>
                        <p>
                            &emsp;Y si llegaste hasta acá quiero decirte, feliz primer mes amor, hoy 6 de junio cumplimos el primer mes de muchos. <br />
                            &emsp;Sé que me quedo corto con tan pocas páginas porque de verdad, pasamos tanto en un solo mes que fue increíble pero sé que los que vienen lo serán aún más... Hay imagenes que me faltan añadir al diario pero creo que estuvieron todas las importantes o las que quería transmitir por este mes. <br />
                            &emsp;Y así como me dijiste:
                        </p>
                        <div className='ourFirstMonth'>
                            <img src={images.EsMia} />
                            <audio src={audios.Kaoruhana} controls></audio>
                        </div>
                    </Page>
                    <Page number="17" pageClass={"pageDiary1 page-interior"}>
                        <h3 style={{ textAlign: "center" }}>
                            <i>Dejame tomar tu mano y llevarte por un mundo de fantasías y sueños conmigo, mi hermosa flor 🌸</i>
                        </h3>
                        <img src={images.UsKaoruhana} />
                        <p></p>
                    </Page>
                    <Page number="18" pageClass={"pageDiary1 page-interior"}>
                        <p style={{ marginTop: "10px" }}>
                            <i> &emsp;Gracias Andrea por todo... Te amé, te amo y te amaré por toda una eternidad.</i> Nuestros corazones están enlazados por un lazo rojo del destino dirían los japoneses... El lazo del amor verdadero ☀️
                        </p>
                        <audio src={audios.MillionDreams} controls style={{ alignSelf: "center", marginBottom: "10px" }}></audio>
                        <img src={images.EndOfTheFirstMonth} style={{ width: "68%", alignSelf: "center", borderRadius: "20px" }} />
                    </Page>

                    <Page title="Capítulo 6 ~ La adversidad" number="19" pageClass={"pageDiary1 page-interior"}>
                        <p>
                            &emsp;Este capítulo es un bonus porque ocurré antes del 6 de junio y quería escribirlo porque lo considero importante. <br />
                            &emsp;Hoy 30 de mayo de 2026 se presentaron muchas adversidades pero no a nivel pareja sino a nivel exterior. Y es muy probable que esto siga ocurriendo a lo largo de nuestros años porque la gente es asi, sin embargo, tene presente algo... <br />
                            &emsp;Y es que no voy a permitir que la adversidad nos gané, da igual quién nos tiré comentarios negativos voy a mover mar, cielo y tierra para que lo nuestro sea posible y el día de mañana, seamos una pareja "modelo a seguir". Porque así como mi bello ángel me enseño... <br /><br /><i><b>Hay una fuerza muy poderosa que puede con todo y es...</b></i>
                        </p>
                        <h2 style={{ textAlign: "center" }}>💫 El amor 👩🏻‍❤️‍👨🏻</h2>
                    </Page>
                    <Page number="20" pageClass={"pageDiary1 page-interior"}>
                        <p style={{ marginTop: "10px" }}>
                            &emsp;Así que amor, confia en mí asi como yo confio en vos. Da igual que adversidad se presente, da igual lo poderosa que sea, da igual que tan frecuente sea...
                            <br /><br />
                        </p>
                        <p style={{ textAlign: "center" }}><i><b>🌸 Lo superaremos juntos 🌼</b></i></p>
                        <img src={images.Promesa} className='togetherWeAreStrong' />
                    </Page>

                    <Page title="Continuará..." number="21" pageClass={"pageDiary1 page-interior"}>
                    </Page>
                    <Page number="22" pageClass={"pageDiary1 page-interior"}>
                    </Page>

                    <Page isCover={true} pageClass={"pageDiary1 book-cover"}>
                    </Page>
                    <Page isCover={true} pageClass={"pageDiary1 book-cover"}>
                        <div className='end-cover'>
                            <img src={images.MePufferfish} />
                            <img src={images.ShePufferfish} />
                        </div>
                    </Page>
                </HTMLPageFlip>
            </div >
        </>
    )
}