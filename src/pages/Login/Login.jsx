import { useContext, useEffect, useRef, useState } from 'react';
import logoImage from '../../assets/others/authentication1.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Login = () => {
    const captchaRef = useRef(null)
    const [able, setAble] = useState(true);
    const {signIn} = useContext(AuthContext)

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])


    const handleLogin = e => {
        e.preventDefault();
        setAble(true)
        const email = e.target.email.value;
        const password = e.target.password.value;
        
        console.log(email, password);

        signIn(email,password)
        .then(result=>{
            console.log(result.user)
        })

        
    }

    const handleValidate = e => {
        e.preventDefault();
        const captcha = captchaRef.current.value;

        if (validateCaptcha(captcha) == true) {
            setAble(false);
            //alert('Captcha Matched');
        }

        else {
            setAble(true)
            alert('Captcha Does Not Match');
        }
    }
    return (
        <div>
            <Helmet>
                <title>Bistro - SignUp</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col md:flex-row">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <img src={logoImage} alt="" />
                    </div>
                    <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" name='email' required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" name='password' required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input type="text" ref={captchaRef} placeholder="type captcha" className="input input-bordered" name='captcha' required />
                                <button onClick={handleValidate} className='mt-2 btn btn-outline btn-xs'>Validate</button>

                            </div>
                            <div className="form-control mt-6">
                                <button disabled={able} className={`btn btn-primary`}>Login</button>
                            </div>
                            <p><small>New here? <Link to="/signup">Create An account</Link></small></p>
                        </form>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;