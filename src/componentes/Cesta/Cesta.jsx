import { URL_SERVER } from "../../constantes.js";
export default function Cesta({articulosCesta,setArticulosCesta}) {
    
    const total = articulosCesta.reduce((acc, articulo) => acc + articulo.precio*articulo.unidades, 0);
    const eliminarArticuloCesta = (articulo) => {
        fetch(URL_SERVER+"articulos/"+articulo.id)
        .then((response)=>response.json())
        .then((data)=>{
            fetch(URL_SERVER+"articulos/"+articulo.id,{
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ unidades: articulo.unidades + data.unidades })
            })
            .then((response)=>{
                if(response.ok){
                    //Elimino articulo de la cesta
                    setArticulosCesta(articulosCesta.filter(art=>art.id!==articulo.id));
                }
            })

        })
    } 
    return (
        <div>
            <h2>Cesta</h2>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Unidades</th>
                    </tr>
                </thead>
                <tbody>
                    {articulosCesta.map(articulo => (
                        <tr key={articulo.id}>
                            <td>{articulo.nombre}</td>
                            <td>{articulo.precio}</td>
                            <td>{articulo.unidades}</td>
                            <td><button id={articulo.id} onClick={(e)=>eliminarArticuloCesta(articulo)}>Eliminar</button></td>
                        </tr>
                    ))}
                </tbody>
               { <tfoot>
                    <tr>
                        <td>Total Cesta</td>
                        <td>{total}</td>
                    </tr>
                </tfoot>}
            </table>
            
        </div>
    )
}