import '../styles/Index.css';
import MyThree from '../components/spaceship.jsx';
import { useState } from 'react';
import {Outlet} from "react-router-dom";

function fullscreen(){

    if(document.fullscreenElement != null){
        document.exitFullscreen()
    }
    else{
        document.documentElement.requestFullscreen()
    }
}

export function Home() {
  const [selection, setSelection] = useState(["DEPARTMENTS", "/dep-url"]);
  
  const onLinkClick = (e) => {
    e.preventDefault();
    setSelection(selection[0] === "DEPARTMENTS" ? ["LOGS", "/log-url"] : ["DEPARTMENTS", "/dep-url"]);
  };
  const panel8Style ={
    height:156
  }

  return (
    <>
    <section id="column-3">
      
    <div class="top-wrapper">
				<div class="top-display">
					<div class="top-display-left">
						<div class="chunk"> </div>
						<div class="panel-wrapper">
							<div class="panel-1">USS DAWSON</div>
						</div>
                        <div class="panel-wrapper">
							<div class="panel-1" onClick={fullscreen}>296-CH</div>
						</div>
					</div>
					<div class="top-display-right">
						<div class="top-display-content">
							<div class="top-arch-1">
								<div class="top-arch-2">
									<div class="top-arch-content">
										<a href="/index"><img src="./assets/sfcmd.png" class="sfc"/> </a>
										<div class="lcars-heading">USS DAWSON STATUS MONITOR</div>
										<div class="lcars-access">
											system status <span class="blink medium-dark-blue">normal</span>
										</div>
									</div>
									<div class="top-arch-panel-1">
									</div>
									<div class="top-arch-panel-2">
										23<span class="hop">-</span>09										
									</div>
								</div>
							</div>							
						</div>
						<div class="arch-bottom">
							<div class="arch-base"> </div>
						</div>
					</div>
				</div>
				<div class="top-display-bottom">					
					<div class="bar-elbow"></div>
					<div class="bar-1"></div>
					<div class="bar-2"></div>
					<div class="bar-3"></div>
					<div class="bar-4">
						
					</div>
					<div class="bar-5"></div>		
				</div>
			</div> 
      
			<div class="spacer">
				<div class="space-sidebar"></div>
				<div class="space-1"></div>
				<div class="space-2"></div>
				<div class="space-3"></div>
				<div class="space-4"></div>
			</div>

      <div class="wrap">
				<div class="left-frame">
					
						<div class="panel-3">03<span class="hop">-111968</span></div>
						<div class="panel-4" id="panel-4-2">04<span class="hop">-41969</span></div>

					
					
						<div class="panel-8" style={panel8Style}>08<span class="hop">-091966</span></div>
					
				</div>
				<div class="right-frame">
					<div class="bar-runner">
						<div class="bar-6"></div>
						<div class="bar-7"></div>
						<div class="bar-8"></div>
						<div class="bar-9"></div>
						<div class="bar-10"></div>
					</div>
                    <section className='index-main-section'>
                        <MyThree/>
                    <Outlet/>
                    </section>
				</div>
        
      
	</div>

    </section>
    </>
  );
};