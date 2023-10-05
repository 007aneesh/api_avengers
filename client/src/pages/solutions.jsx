import React from 'react';
import img from '../images/logo.webp';
import img2 from '../images/heroImg.webp';

const Solutions = () => {
    return (
        <div className='solutions'>
            <div className='leftimgSol'>
                <img src={img}/>
                <div className='text'>
                    <h2>Lorem ipsum dolor sit.</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus quasi odio fuga, nisi reiciendis similique sapiente nobis earum debitis est. Rem doloribus, atque corporis harum quisquam adipisci unde asperiores, impedit hic esse explicabo excepturi dicta porro quam eveniet aspernatur rerum.</p>
                </div>
            </div>
            <div className='rightimgSol'>
                <div className='text'>
                    <h2>Lorem ipsum dolor sit.</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus quasi odio fuga, nisi reiciendis similique sapiente nobis earum debitis est. Rem doloribus, atque corporis harum quisquam adipisci unde asperiores, impedit hic esse explicabo excepturi dicta porro quam eveniet aspernatur rerum.</p>
                </div>
                <img src={img2}/>
            </div>
            <div className='leftimgSol'>
                <img src={img2}/>
                <div className='text'>
                    <h2>Lorem ipsum dolor sit.</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus quasi odio fuga, nisi reiciendis similique sapiente nobis earum debitis est. Rem doloribus, atque corporis harum quisquam adipisci unde asperiores, impedit hic esse explicabo excepturi dicta porro quam eveniet aspernatur rerum.</p>
                </div>
            </div>
            <div className='rightimgSol'>
                <div className='text'>
                    <h2>Lorem ipsum dolor sit.</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus quasi odio fuga, nisi reiciendis similique sapiente nobis earum debitis est. Rem doloribus, atque corporis harum quisquam adipisci unde asperiores, impedit hic esse explicabo excepturi dicta porro quam eveniet aspernatur rerum.</p>
                </div>
                <img src={img}/>
            </div>
        </div>
    );
}

export default Solutions;