import useFirebase from "../hooks/useFirebase";

const DisplayProducts = () => {
    const {docs} = useFirebase('products');
    return (
        <div>

            <table className="table table-striped">
                <tr className="d-flex">
                    <th className="col">Name</th>
                    <th className="col">Category</th>
                    <th className="col">Price</th>
                    <th className="col">Image</th>
                    <th className="col">In stcok</th>
                </tr>

                {docs && docs.map(product => (
                    <tr key={product.id} className="d-flex">
                        <td className="col">{product.name}</td>
                        <td className="col">{product.category}</td>
                        <td className="col">{product.price}</td>
                        <td className="col"><img src={product.image}  alt={product.name} width="200"/></td>
                        <td className="col">{product.inStock ? "Yes" : "No"}</td>
                    </tr>
                ))}

            </table>
        </div>


    )

}

export default DisplayProducts;
