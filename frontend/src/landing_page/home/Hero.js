import React from 'react';
import { useNavigate } from 'react-router-dom'; 

function Hero() {
    const navigate = useNavigate(); // 

    const goToSignup = () => {
        navigate("/signup"); 
    };

    return ( 
        <div className="container p-5">
            <div className="row text-center">
                <img src='media/images/homeHero.png' alt='Hero Image' className='mb-5'/>
                <h1 className='mt-5'>Invest in everything</h1>
                <p className="p-2 fs-5 mb-4">
                    Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
                </p>
                <button 
                    className='p-2 btn btn-primary' 
                    style={{ width: "17%", margin: "0 auto", fontSize: "1.5em" }} 
                    onClick={goToSignup} 
                >
                    Sign up for free
                </button>
            </div>
        </div>
    );
}

export default Hero;
