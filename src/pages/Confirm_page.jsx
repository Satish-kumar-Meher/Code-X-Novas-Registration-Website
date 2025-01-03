import React from 'react';
import "../css/confirm_page.css";
import backgroundAnimation from "../animations/cxn_gif.gif";
import backgroundFireAnimation from "../animations/fire_gif.gif";


const ConfirmPage = () => {
  return (
    <div className='confirm-container'>
      <section>
        <div className="terms_con_confirm">
          <div className="form_head_confirm">
            <p>YOU ARE NOW ENROLLED TO</p>
          </div>

          <div className="exploration_confirm">
            <p>EXPLORATION COURSE</p>
          </div>

          <div className="gif-container_confirm">
            <img
              src={backgroundAnimation}
              alt="Animated GIF"
              className="background-gif_confirm"
            />
            <img
              src={backgroundFireAnimation}
              alt="Animated GIF"
              className="background-gif_confirm"
            />
          </div>
        </div>
      </section>

      {/* Uncomment and use the following code as needed */}
      {/* <div id="lottie-background_confirm">
          <dotlottie-player 
            src="https://lottie.host/6c169da8-975c-4950-9d9c-e6d14b8852f6/o7AOVolGkW.lottie" 
            background="transparent" 
            speed="1" 
            loop 
            autoplay 
            className="lottie_confirm"
          ></dotlottie-player>
      </div>

      <div className="video-container_confirm">
        <video autoplay loop muted playsinline className="background-video_confirm">
          <source src="animations/fire_ani.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div> */}

      <script
        src="https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs"
        type="module"
      ></script>
    </div>
  );
};

export default ConfirmPage;
