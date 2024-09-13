import { useEffect, useState } from "react";
import { TipoProduto } from "../../types";
import { MinhaTabela } from "../../style/styled";
import { Link } from "react-router-dom";

export default function Produtos(){
    
    localStorage.getItem('lista')
    
    const [produtos, setProdutos] = useState<TipoProduto[]>([{
        id: 0,
        nome: '',
        preco:0 
    }]);

    useEffect(() => {

        const listaDeProdutos:TipoProduto[] = [
            {id: 1, nome: 'Camiseta', preco: 19.99},
            {id: 2, nome: 'Calça', preco: 39.99},
            {id: 3, nome: 'Tênis', preco: 99.99},
        ];
        
        if(!localStorage.getItem('lista')){
            localStorage.setItem('lista', JSON.stringify(listaDeProdutos));
        }

         const listaProdutosString = localStorage.getItem('lista') ||  '[]';
         const lista = JSON.parse(listaProdutosString);
         setProdutos(lista);
    }, [])


    return (
        <div>
            <h1>Produtos</h1>
            <MinhaTabela>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Preço</th>
                        <th>Editar | Excluir</th>
                    </tr>
                </thead>
                <tbody>
                    {produtos.map((p)=>(
                        <tr key={p.id}>
                            <td>{p.nome}</td>
                            <td>{p.preco}</td>
                            <td> <Link to={`/editar/produtos/${p.id}`}>Editar</Link> | <Link to={`/excluir/produtos/${p.id}`}>Excluir</Link></td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={3}>Total: R$ {produtos.reduce((ac, p) => ac + p.preco, 0)}</td>
                    </tr>
                </tfoot>
            </MinhaTabela>
        </div>
    );
}