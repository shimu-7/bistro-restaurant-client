import { Link } from "react-router-dom";
import logoImage from '../../assets/others/authentication1.png'
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";





const SignUp = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
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
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" {...register("email", { required: true })} name='email' required />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" {...register("password",  { required: true,minLength:6, maxLength: 20 })} name='password' required />
                                {errors.password?.type==='required' && <span className="text-red-600">Password should contain 6 character or more</span>}

                            </div>

                            <div className="form-control mt-6">
                                <button className={`btn text-white bg-yellow-700 btn-outline`}>SignUp</button>
                            </div>
                            <p><small>Already have an account? <Link to="/login">Sign In</Link></small></p>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;