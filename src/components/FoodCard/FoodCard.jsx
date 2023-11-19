
const FoodCard = ({item}) => {
    const {image, name, recipe, price} = item

    const handleAddToCart = food =>{
        console.log(food);
    }
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <p className="absolute right-0 mt-4 rounded-lg mr-6 px-2 bg-slate-900 text-white">${price}</p>
                <div className="card-body">
                    <h2 className="card-title mx-auto">{name}</h2>
                    <p>{recipe}</p>
                    
                    <div className="card-actions justify-center">
                        <button onClick={()=>handleAddToCart(item)} className="btn btn-outline bg-slate-200 text-yellow-600 border-0 border-b-4">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;