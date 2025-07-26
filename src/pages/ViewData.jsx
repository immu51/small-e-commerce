import { useParams } from "react-router-dom"
import { allProducts } from "../data"


const ViewData = () => {
    let { id } = useParams()
    let Products = allProducts.find((item) => item.id === parseInt(id));

    if (!Products)
        return (
            <div className="p-6">
                <p className="text-red-500">Product not found</p>
            </div>
        );


    return (
        <>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <div className="border p-4 rounded hover:shadow-md">
                    <img src={Products.img} alt='not found' className="w-full h-40 object-cover mb-3" />
                    <h3 className="text-lg font-semibold">{Products.name}</h3>
                    <p className="text-sm text-gray-500">{Products.description}</p>
                    <p className="text-black mt-1 font-medium">{Products.price}</p>
                </div>
            </div>

        </>
    )
}

export default ViewData