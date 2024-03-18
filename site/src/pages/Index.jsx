import Navbar from '../components/navbar.jsx';
import '../styles/Index.css';
import { useState } from 'react';
import {Outlet} from "react-router-dom";

export function Index() {
  const [selection, setSelection] = useState(["DEPARTMENTS", "/dep-url"]);
  
  const onLinkClick = (e) => {
    e.preventDefault();
    setSelection(selection[0] === "DEPARTMENTS" ? ["LOGS", "/log-url"] : ["DEPARTMENTS", "/dep-url"]);
  };

  return (
    <>
    <section id="column-3">
      
    <div class="top-wrapper">
				<div class="top-display">
					<div class="top-display-left">
						<nav id="primary-nav">
              				<a href="/">HOME</a>
							<a href={Selection[1]} onClick={onLinkClick}>{selection[0]}</a>
						</nav>
						<div class="chunk"> </div>
						<div class="panel-wrapper">
							<div class="panel-1">USS DAWSON</div>
						</div>
					</div>
					<div class="top-display-right">
						<div class="top-display-content">
							<div class="top-arch-1">
								<div class="top-arch-2">
									<div class="top-arch-content">
										<img src="./assets/sfcmd.png" class="sfc"/>
										<div class="lcars-heading">LIBRARY COMPUTER ACCESS/RETRIEVAL SYSTEM</div>
										<div class="lcars-access">
											user authorization code <span class="blink medium-dark-blue">accepted</span>
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
				<div class="scroll-top"><a href="#page--top"><span class="hop">screen</span> top</a></div>
				<div class="left-frame">
					<div>
						<div class="panel-3">03<span class="hop">-111968</span></div>
						<Navbar selection={selection[0]} />
						<div class="panel-4">04<span class="hop">-41969</span></div>
						<div class="panel-5">05<span class="hop">-1701D</span></div>
						<div class="panel-6">06<span class="hop">-071984</span></div>
						<div class="panel-7">07<span class="hop">-47148</span></div>
					</div>
					<div>
						<div class="panel-8">08<span class="hop">-091966</span></div>
					</div>
				</div>
				<div class="right-frame">
					<div class="bar-runner">
						<div class="bar-6"></div>
						<div class="bar-7"></div>
						<div class="bar-8"></div>
						<div class="bar-9"></div>
						<div class="bar-10"></div>
					</div>
				</div>
        
        <section className='index-main-section'>
          <Outlet/>
        </section>
      
			</div>

    </section>
    </>
  );
};