import './gizmo.css'
import { useEffect, useState, useCallback } from 'react'


export default function Gizmo() {

  const Update = useCallback((delta, ball) => {

    ball.update();

    requestAnimationFrame((time) => {
      Update(time, ball);
    })

  }, [])

  useEffect(() => {

    const FRAME_RATE = 60;
    const _FRAME_DELTA = (1 / FRAME_RATE) * 1000;

    console.log('Sim starting at ' + FRAME_RATE + ' FPS.')
    console.log(_FRAME_DELTA + ' ms per update.')


    class Space {

      constructor(height, width) {
        this.height = height;
        this.width = width;
      }

      resize(width, height) {
        this.height = height;
        this.width = width;
      }

    }


    class Ball {

      constructor() {

        this.x = 0;
        this.y = 0;

        this.momentum = {x: 1, y: 1}

        this.gizmo = document.getElementById("gizmo");
        this.hitbox = document.querySelector('#gizmo img.front')

        document.getElementById(this.gizmo.id + "header").onmousedown = this.mouseDown;

        this.dragData = {
          beginx: 0,
          beginy: 0,
          beginmousex: 0,
          beginmousey: 0
        };

      }

      mouseDown(e) {
        e.preventDefault() 
        ball.momentum = {x:0 ,y:0}
        
        ball.dragData.beginx = ball.x;
        ball.dragData.beginy = ball.y;

        ball.dragData.beginmousex = e.clientX;
        ball.dragData.beginmousey = e.clientY;

        let endmomentum = {x:0,y:0}
        
        let prevClientX = e.clientX;
        let prevClientY = e.clientY;
        function mouseMove(ex) {
          // console.log(ex)
          // console.log(ball.dragData.beginmousex - ex.clientX);
          // console.log(ball.dragData.beginmousey - ex.clientY);

          endmomentum.x = ((prevClientX - ex.clientX)) * -1
          endmomentum.y = ((prevClientY - ex.clientY)) * -1


          const newPosX = ball.dragData.beginx - (ball.dragData.beginmousex - ex.clientX)
          const newPosY = ball.dragData.beginy - (ball.dragData.beginmousey - ex.clientY)
          ball.x = newPosX;
          ball.y = newPosY;

          // console.log(ball)
          prevClientX = ex.clientX;
          prevClientY = ex.clientY;

        }

        function mouseUp(ex) {
          ball.momentum = endmomentum
          window.removeEventListener('mouseup', mouseUp);
          window.removeEventListener('mousemove', mouseMove)
        }

        window.addEventListener('mousemove', mouseMove)
        window.addEventListener('mouseup', mouseUp)

      }

      update() {

        this.checkCollision();
        
        if (this.momentum.x > 0.1) {
          this.momentum.x -= 0.01;
        }

        if (this.momentum.y > 0.1) {
          this.momentum.y -= 0.01;
        }

            
        if (this.momentum.x < -0.1) {
          this.momentum.x += 0.01;
        }

        if (this.momentum.y < -0.1) {
          this.momentum.y += 0.01;
        }

        if (this.momentum.x < 0.1 && this.momentum.x > -0.1) {
          this.momentum.x = 0;
        }


        if (this.momentum.y < 0.1 && this.momentum.y > -0.1) {
          this.momentum.y = 0;
        }

        
        this.x += this.momentum.x * (_FRAME_DELTA/200) ;
        this.y += this.momentum.y * (_FRAME_DELTA/200) ;

        if (this.x < -this.hitbox.width)
          this.x = 0

        if (this.y < -this.hitbox.height)
          this.y = 0

        if (this.x > space.width)
          this.x = space.width - this.hitbox.width;

        if (this.y > space.height - this.hitbox.height/2)
          this.y = space.height - this.hitbox.height;

        this.gizmo.style.top = (this.y) + "px";
        this.gizmo.style.left = (this.x) + "px";
      }

      checkCollision() {
        //console.log(space)
        if (this.x > space.width - this.hitbox.width || this.x < -this.hitbox.width/ 2) {
          this.momentum.x = -this.momentum.x/2;
        }

        if (this.y > space.height - this.hitbox.height || this.y < -this.hitbox.height/ 2) {
          this.momentum.y = -this.momentum.y/2;
        }


        // console.log(this.hitbox.height)
      }


    }

    let space;
    let ball;

    space = new Space(window.innerHeight, window.innerWidth);
    ball = new Ball();
   
    window.addEventListener('resize', e => {
  
      space.resize(window.innerHeight, window.innerWidth);
      
    });

    requestAnimationFrame((time) => {
      Update(time, ball);
    })

  }, [Update])

  return (
    <div id="gizmo">
      <div id="gizmoheader">
        <img className="back" src="/assets/gizmop2.svg" alt='gizmo' />
        <img className="front" src="/assets/gizmo2.svg" alt="gizmo" />
        <img className="frontre" src="/assets/gizmocen.svg" alt="gizmocen" />
      </div>
    </div>
  );
}