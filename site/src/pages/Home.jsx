/* eslint-disable no-restricted-globals */
import {Top} from '../components/top'
import {Bottom} from '../components/bottom'
import "./responsiveness.css"

screen.orientation.addEventListener("change", ()=>{
    location.reload();
})

export function Home(){
  return (
      <>
          <section class="whole-page">
              < Top />
              < Bottom />
          </section>
      </>
  )
}
