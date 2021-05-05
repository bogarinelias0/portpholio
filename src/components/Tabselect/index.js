import React from 'react';
import './tabselect.css'
import victory from '../../assets/img/victory.png'

function Tabselect (){
    return (
    
        <div class="container-all">
            <div className='background-all'>
            <div class="custom-shape-divider-top-1615943611">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 0L0 0 598.97 114.72 1200 0z" class="shape-fill"></path>
                </svg>
            </div>
        <div class="container-box">
            <a href="#">
                <div class="box box1">
                    <h4 class="title">Elo Boost</h4>
                    <p>
                        Servicio de Eloboost
                    </p>
                    <div class="background-hover background-hover1">
                        
                    </div>
                </div>
            </a>
            <a href="#">
                <div class="box box2">
                    <h4 class="title">Coaching</h4>
                    <p>
                        Contamos con servicios de coaching con especialistas de primer nivel
                    </p>
                    <div class="background-hover background-hover2">
                        
                    </div>
                </div>
            </a>
            <a href="#">
                <div class="box box3">
                    <h4 class="title">Venta de cuentas</h4>
                    <p>
                        Vendemos cuentas desde hierro hasta challenger
                    </p>
                    <img src='' />
                    <div class="background-hover background-hover3">

                    </div>
                </div>
            </a>
        </div>
        <div class="custom-shape-divider-bottom-1615944122">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M1200 0L0 0 598.97 114.72 1200 0z" class="shape-fill"></path>
            </svg>
        </div>

    </div>
    </div>
    );
};

export default Tabselect;
