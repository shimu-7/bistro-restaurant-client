import { Link, useNavigate } from "react-router-dom";
import logoImage from '../../assets/others/authentication1.png'
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import SocialLogin from "../../components/SocialLogin/SocialLogin";





const SignUp = () => {
    const axiosPublic = useAxiosPublic();

    const [error, setError]= useState(null)
const navigate = useNavigate();
  
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const {createUser} = useContext(AuthContext);

    const onSubmit = (data) => {
        console.log(data)
        const {name,email,password,photo} = data;
        console.log(name, email,password)
        createUser(email, password)
        .then(result=>{
            //console.log(result.user);
            const userInfo ={
                name: name,
                email: email
            }
            axiosPublic.post('/users',userInfo)
            .then(res=>{
                if(res.data.insertedId){
                    console.log('user added to the database')
                    reset();
                    updateProfile(result.user,{
                        displayName: name,
                        photoURL:photo
                    })
                    .then(()=>{
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Your work has been saved",
                            showConfirmButton: false,
                            timer: 1500
                          });
                    })
                    .catch((error)=>{
                        console.log(error.message)
                    })
                    navigate('/');
                }
            })
            
        })
        .catch(error=>{
            console.log(error.message);
            setError(error.message);
        })
    }

    // const handleSignUp = e => {
    //     e.preventDefault();
    //     const name = e.target.name.value;
    //     const email = e.target.email.value;
    //     const password = e.target.password.value;
    //     console.log(name, email, password);
    // }
    return (
        <div>
            <Helmet>
                <title>Bistro - SignUp</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col md:flex-row-reverse">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <img src={logoImage} alt="" />
                    </div>
                    <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" className="input input-bordered" {...register("name", { required: true })} name='name'  />
                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="photo url" className="input input-bordered" {...register("photo", { required: true })} name='photo'  />
                                {errors.photo && <span className="text-red-600">Photo is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" {...register("email", { required: true })} name='email' required />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" {...register("password",  { required: true,
                                    minLength:6, 
                                    maxLength: 20,
                                    pattern: /(?=^.{6,}$)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).*/
                                     })} name='password' required />
                                {errors.password?.type==='required' && <span className="text-red-600">Email field is required</span>}
                                {errors.password?.type==='minLength' && <span className="text-red-600">Password should contain 6 character or more</span>}
                                {errors.password?.type==='maxLength' && <span className="text-red-600">Password should contain maximum 20 character</span>}
                                {errors.password?.type==='pattern' && <span className="text-red-600">Password should contain at least one capital/special character</span>}

                            </div>

                            <div className="form-control mt-6">
                                <button className={`btn text-white bg-yellow-700 btn-outline`}>SignUp</button>
                            </div>
                            <div className="w-full">
                            <SocialLogin className='w-full'></SocialLogin>
                            </div>
                            <p><small>Already have an account? <Link to="/login">Sign In</Link></small></p>
                            {
                                error && <p className="text-red-600">{error}</p>
                            }
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;