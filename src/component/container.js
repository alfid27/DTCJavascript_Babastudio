import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class container extends Component {
    render() {
        return (
            <div>
                <div className="banner">
                    <div className="container">
                        <div className="banner_content">
                            <div clasName="img">
                                <h1>
                                    "Kursus Online Digital Marketing"
                                    <br/>
                                    "Programing dan Desain"
                                    <br/>
                                    "Telah di ikuti 133 ribu alumni"
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="properti">
                    <div className="container text-center">
                    <h6>Pernah Di Liput Oleh:</h6>
                    <ul>
                        <li>
                        <img className="metro" src={require('../images/metro.png')}/>
                        </li>

                        <li>
                        <img className="kompas" src={require('../images/kompas.png')}/>
                        </li>

                        <li>
                        <img className="yahoo" src={require('../images/yahoo.png')}/>
                        </li>

                        <li>
                        <img className="detik" src={require('../images/detik.png')}/>
                        </li>
                    </ul>
                </div>
                </div>
                <div class="video-section">
                    <div class="container">
                    <div class="row">
                        <div class="col-md-6 col-sm-6 col-xs-12">
                        <div class="video__iframe" id="portal-embed">
                        <iframe width="554" height="340" src="https://www.youtube.com/embed/k8XN5iCJFhI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen=""></iframe>
                        </div>
                        </div>
                        <div class="col-md-6 col-sm-6 col-xs-12">
                        <div class="video__description pt-5">
                            <div class="video__content pt-4">
                            <h2>Liputan Babastudio E-Learning di kompas TV bersama alumni</h2>
                            <h5 class="text-secondary">Kompas TV melipus Babastudio E-Learning karena, memberikan kursus pada lebih 500 orang setiap harinya.</h5>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
    
             </div>

        )
    }
}

export default container;