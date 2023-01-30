import Container from "../components/container";
import Head from "next/head";
import fetch from "isomorphic-fetch";
import Users from "../components/Users";


const Index = (props) => {
    console.log(props)
    return (
        <Container>
            <Head>
                <title>Next.js Project-Home </title>
            </Head>
            <h1>Index</h1>
            <p>Es un hecho establecido desde hace mucho tiempo que un lector se distraerá con el contenido legible de una página cuando mire su diseño. El punto de usar Lorem Ipsum es que tiene una distribución de letras más o menos normal, en lugar de usar 'Contenido aquí, contenido aquí', lo que hace que parezca un inglés legible. Muchos paquetes de autoedición y editores de páginas web ahora usan Lorem Ipsum como su modelo de texto predeterminado, y una búsqueda de 'lorem ipsum' descubrirá muchos sitios web que aún están en su infancia. Varias versiones han evolucionado a lo largo de los años, a veces por accidente, a veces a propósito (humor inyectado y cosas por el estilo).                
            </p>
            <h1>Next</h1>
            <Users users={props.users} />
        </Container>
    );
};

Index.getInitialProps = async (ctx) => {
    const res = await fetch('https://reqres.in/api/users')
    const resJSON = await res.json()
    return {users: resJSON.data}
}

export default Index;