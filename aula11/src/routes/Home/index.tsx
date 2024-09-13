import { Link } from "react-router-dom";

export default function Home(){
    return (
        <main>
            <h1>Welcome to my home page</h1>
            <div>
                <Link to="/users">Usuários</Link>
            </div>
        </main>
    );
}