import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Usuarios(){


    const navigate = useNavigate();

    const [usuarios, setUsuarios] = useState([{
        id: 0,
        login:"",
        avatar_url:""
    }]);

    useEffect(() => {
       
        async function reqUsers() {
          
            try{
                const resp = await fetch('https://api.github.com/users');
                const dados = await resp.json();
                if(!resp.ok){
                    throw new Error("Requisição dados falhou!"); 
                }
                setUsuarios(dados);
            }
            catch(err){
                console.log(err);
                navigate("/error");
            }
        }
        reqUsers();

    },[]);
    
    return (
        <div>
            <h1>Users</h1>
            <div>
                <Link to="/">Home</Link>
            </div>
            <div>
                {usuarios.map(usuario => (
                    <div key={usuario.id}>
                        <figure>
                          <img src={usuario.avatar_url} alt={usuario.login} />
                          <figcaption>{usuario.login}</figcaption>
                        </figure>
                    </div>
                ))} 
            </div>
        </div>
    );
}