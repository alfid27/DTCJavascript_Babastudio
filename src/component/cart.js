import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class cart extends Component {
    render() {
        return (
        <div>
            <br/>
            <div>
              <div className="slider-section ml-4 mt-3">
                <h4>Kursus Terpopuler di Design</h4>
              </div>
              <div class="col-md-12 row">
                <div class="card col-md-3" >
                    <img class="card-img-top" src={require('../images/grafis.webp')}/>
                    <div class="card-body">
                        <p class="card-text">Kursus Animasi Drawing menggunakan Aplikasi Vidio Scribe.</p>
                    </div>
                    <span>
                        <strong>Rp. 499.000</strong>
                    </span>
                </div>
                <div class="card col-md-3" >
                    <img class="card-img-top" src={require('../images/grafis.webp')}/>
                    <div class="card-body">
                        <p class="card-text">Kursus Animasi Drawing menggunakan Aplikasi Vidio Scribe.</p>
                    </div>
                    <span>
                        <br/>
                        <strong>Rp. 499.000</strong>
                    </span>
                 </div>
                 <div class="card col-md-3" >
                    <img class="card-img-top" src={require('../images/grafis.webp')}/>
                    <div class="card-body">
                        <p class="card-text">Kursus Animasi Drawing menggunakan Aplikasi Vidio Scribe.</p>
                    </div>
                    <span>
                        <br/>
                        <strong>Rp. 499.000</strong>
                    </span>
                 </div>
               </div>
            </div>
            <div>
              <div className="slider-section ml-4 mt-3">
                <h4>Kursus Terpopuler Digital Marketing</h4>
              </div>
              <div class="col-md-12 row">
                <div class="card col-md-3" >
                    <img class="card-img-top" src={require('../images/courses-seo.webp')}/>
                    <div class="card-body">
                        <p class="card-text">Kursus Animasi Drawing menggunakan Aplikasi Vidio Scribe.</p>
                    </div>
                    <span>
                        <strong>Rp. 499.000</strong>
                    </span>
                </div>
                <div class="card col-md-3" >
                    <img class="card-img-top" src={require('../images/grafis.webp')}/>
                    <div class="card-body">
                        <p class="card-text">Kursus Animasi Drawing menggunakan Aplikasi Vidio Scribe.</p>
                    </div>
                    <span>
                        <br/>
                        <strong>Rp. 499.000</strong>
                    </span>
                 </div>
                 <div class="card col-md-3" >
                    <img class="card-img-top" src={require('../images/grafis.webp')}/>
                    <div class="card-body">
                        <p class="card-text">Kursus Animasi Drawing menggunakan Aplikasi Vidio Scribe.</p>
                    </div>
                    <span>
                        <br/>
                        <strong>Rp. 499.000</strong>
                    </span>
                 </div>
               </div>
            </div>
            
            <div>
              <div className="slider-section ml-4 mt-3">
                <h4>Kursus Terpopuler di Progamming Front End</h4>
              </div>
              <div class="col-md-12 row">
                <div class="card col-md-3" >
                    <img class="card-img-top" src={require('../images/courses-seo.webp')}/>
                    <div class="card-body">
                        <p class="card-text">Kursus Animasi Drawing menggunakan Aplikasi Vidio Scribe.</p>
                    </div>
                    <span>
                        <strong>Rp. 499.000</strong>
                    </span>
                </div>
                <div class="card col-md-3" >
                    <img class="card-img-top" src={require('../images/grafis.webp')}/>
                    <div class="card-body">
                        <p class="card-text">Kursus Animasi Drawing menggunakan Aplikasi Vidio Scribe.</p>
                    </div>
                    <span>
                        <br/>
                        <strong>Rp. 499.000</strong>
                    </span>
                 </div>
                 <div class="card col-md-3" >
                    <img class="card-img-top" src={require('../images/grafis.webp')}/>
                    <div class="card-body">
                        <p class="card-text">Kursus Animasi Drawing menggunakan Aplikasi Vidio Scribe.</p>
                    </div>
                    <span>
                        <br/>
                        <strong>Rp. 499.000</strong>
                    </span>
                 </div>
               </div>
            </div>
        </div>
      );
    }
}

export default cart;