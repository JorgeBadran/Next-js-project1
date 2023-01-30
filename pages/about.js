import Head from 'next/head';
import Container from '../components/container';
import Navegation from '../components/navegation'


const About = () => {
    return (
        <Container>
            <Head>
                <title>Next.js Project-About </title>
            </Head>
                <h1>About</h1>
                <p>Hay muchas variaciones de pasajes de Lorem Ipsum disponibles, pero la mayoría ha sufrido alteraciones de alguna forma, por humor inyectado o palabras aleatorias que no parecen ni un poco creíbles. Si vas a usar un pasaje de Lorem Ipsum, debes asegurarte de que no haya nada vergonzoso escondido en medio del texto. Todos los generadores de Lorem Ipsum en Internet tienden a repetir fragmentos predefinidos según sea necesario, lo que lo convierte en el primer generador verdadero en Internet. Utiliza un diccionario de más de 200 palabras latinas, combinado con un puñado de estructuras de oraciones modelo, para generar Lorem Ipsum que parece razonable. Por lo tanto, el Lorem Ipsum generado siempre está libre de repeticiones, humor inyectado o palabras no características, etc.</p>
        </Container>
    )
}

export default About;