
import React from 'react';
import './player.css';
import YouTube from 'react-youtube';

const Player = (({imgURL, embedId}) => {
  function click(e) {
      
    const player = document.getElementById('player');
    if (~player.src.indexOf('?')) player.src += '&autoplay=1&mute=1';
    else player.src += '?mute=1&autoplay=1';

    var req = player.requestFullscreen
        || player.webkitRequestFullscreen
        || player.mozRequestFullScreen
        || player.msRequestFullscreen;

    req.call(player);
    e.preventDefault();
    }
        return (
            
        <div className="PlayerComponent">
             <div className="PlayerDiv">
                    <iframe className="Player" id="player" type="text/html" 
                    src="http://www.youtube.com/embed/M7lc1UVf-VE"
                    frameborder="0" allowFullScreen>
                    </iframe>
                </div>
            <div className="ImgDiv">
                <img className="img" src={imgURL}  width="720" height="400"/>
                <br/>
                <div className="InfoDiv">
                    <b className="Name">TEST ATT TESTA</b>
                    <b className="Location">TEST2</b>
                    <button className="imageButton" width="100px" id="play-fullscreen" onClick={click}>TA MIG DIT</button>
                </div>
             </div>
        </div>
        );
    })




  
  export {Player};
  