import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";

import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const FoodCard = ({item}) => {
    const {image, name, recipe, price, _id} = item;
    const {user} = useAuth();
    const navigate = useNavigate()
    const location = useLocation();
    const axiosSecure = useAxiosSecure()

    const [,refetch] = useCart()

    const handleAddToCart = () =>{
        
        if(user && user.email){
           //console.log(food);
            const cartItem={
            menuId: _id,
           email: user.email,
           name, image, price }
           axiosSecure.post('/carts', cartItem)
           .then(res=>{
            console.log(res.data);
            if(res.data.insertedId){
                Swal.fire({
                    icon: "success",
                    title: "Congratulations",
                    text: "items added to cart successfully",
                    
                  });
                  //refetch the cart to update items count
                  refetch()
            }
           })
        }
        else{
            Swal.fire({
                title: "You are not logged in",
                text: "Please sign in to add to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "log in"
              }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login',{state: {from: location}})
                  
                }
              });

        }
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
                        <button onClick={handleAddToCart} className="btn btn-outline bg-slate-200 text-yellow-600 border-0 border-b-4">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;