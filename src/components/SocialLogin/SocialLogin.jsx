import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const SocialLogin = () => {
    const {googleSignIn} = useAuth();
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result=>{
            console.log(result.user);
            const userInfo={
                email: result.user.email,
                name: result.user.displayName
            }
            axiosPublic.post('/users',userInfo)
            .then(res=>{
                console.log(res.data)
                if(res.data.insertedId){
                    console.log('user added to the database')
                   
            
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Your work has been saved",
                            showConfirmButton: false,
                            timer: 1500
                          });
                    
                   
                }
                navigate('/');
            })
            .catch((error)=>{
                console.log(error.message)
            })
        })

    }
    return (
        <div className="w-full">
            <div>
                <button onClick={handleGoogleSignIn} className="btn">
                    <FaGoogle></FaGoogle>
                    Button
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;