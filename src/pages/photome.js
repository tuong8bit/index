import React from 'react'

const PhotoMe = () => {
  return (
    <div className="d-inline w-75 position-absolute photome">
      <h2 class="text-center">Ninh Bình photos</h2>
        <div class="row">

          <section class="wrap col-md-4 col-sm-4">
            <div class="cube">
              <img src="/cube/1.jpg" />
              <img src="/cube/2.jpg" />
              <img src="/cube/3.jpg" />
              <img src="/cube/5.jpg" />
              <img src="/cube/6.jpg" />
              <img src="/cube/7.jpg" />
            </div>
          </section>

          <section class="wrap col-md-4 col-sm-4">
            <div class="cube">
              <img src="/cube/8.jpg" />
              <img src="/cube/9.jpg" />
              <img src="/cube/10.jpg" />
              <img src="/cube/11.jpg" />
              <img src="/cube/12.jpg" />
              <img src="/cube/14.jpg" />
            </div>
          </section>

          <section class="wrap col-md-4 col-sm-4">
            <div class="cube">
              <img src="/cube/4.jpg" />
              <img src="/cube/13.jpg" />
              <img src="/cube/15.jpg" />
              <img src="/cube/16.jpg" />
              <img src="/cube/17.jpg" />
              <img src="/cube/18.jpg" />
            </div>
          </section>

        </div>
    </div>
  )
}

export default PhotoMe;