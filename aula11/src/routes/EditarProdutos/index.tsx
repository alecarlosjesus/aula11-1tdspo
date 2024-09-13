import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TipoProduto } from "../../types";

export default function EditarProdutos(){

    const navigate = useNavigate();
    const {id} = useParams();

    //Recuperando a lista do localStorage
    const listaDeProdutosString = localStorage.getItem('lista') || '[]';
    const lista:TipoProduto[] = JSON.parse(listaDeProdutosString);

    const [produto, setProduto] = useState<TipoProduto>({
        id: 0,
        nome: '',
        preco: 0.0,
    });

    useEffect(() => {
      const produtoEncontrado = lista.find(p => p.id === Number(id));
      if(produtoEncontrado)
        setProduto(produtoEncontrado);

    }, [])
    
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(produto){
            const idProduto = lista.findIndex( p => p.id == produto.id);
            lista.splice(idProduto,1,produto);
            localStorage.setItem('lista', JSON.stringify(lista));
            alert('Produto alterado com sucesso!!');
            navigate("/produtos");
        }

    }

    return (
        <div>
            <h1>Editar Produtos</h1>
            <div>
                <p>Parâmetro que veio do componente produto! : {id}</p>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Nome:</label>
                        <input type="text" value={produto.nome} onChange={(e) => setProduto({...produto, nome: e.target.value})}/>
                    </div>
                    <div>
                        <label>Preço:</label>
                        <input type="number" value={produto.preco} onChange={(e) => setProduto({...produto, preco: parseInt(e.target.value)})}/>
                    </div>
                    <div>
                        <button type="submit">Editar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}