import Router, { useRouter } from "next/router";
import fetch from "isomorphic-fetch";
import Container from "../../components/container";


const User = (props) => {
    const router = useRouter();
    const {id} = router.query;

    return <h1>Holaaaaaaaaa</h1>
}

User.getInitialProps = async (ctx) => {
    const res = await fetch("https://reqres.in/api/users/${ctx.query.id}")
    const resJSON = await res.json();
    console.log(resJSON)
    return{}
}


export default User;