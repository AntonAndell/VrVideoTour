
import React from 'react';
import './player.css';


const Player = (({imgURL, embedId, Title, Location}) => {
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
                    <iframe className="Player"  id="player" type="text/html" 
                    src="https://www.youtube.com/embed/hNAbQYU0wpg"
                    frameborder="0" allowFullScreen>
                    </iframe>
                </div>
            <div className="ImgDiv">
                <img className="img" src={imgURL}  width="720" height="400"/>
                <br/>
                <div className="InfoDiv">
                    <b className="Name">{Title}</b>
                    <b className="Location">{Location}</b>
                    <button className="imageButton" width="100px" id="play-fullscreen" onClick={click}>TA MIG DIT</button>
                </div>
             </div>
        </div>
        );
    })




  
  export {Player};
  