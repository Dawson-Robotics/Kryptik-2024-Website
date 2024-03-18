import Navbar from '../components/navbar.jsx';
import '../styles/Index.css';
import { useState, useCallback } from 'react';
import { Outlet, useParams, useLocation } from "react-router-dom";

export function Index({lang, setLang}) {

  const displayNone ={
	display: 'none',
  }
	
	const onLangClick = useCallback(() => {
		if (lang === 'EN')
			setLang('FR');
		if (lang === 'FR')
			setLang('EN');
	});

	const path = useLocation().pathname;

  const selection = path === '/index/departments'? ["LOGS", "/index/logs"] : ["DEPARTMENTS", "/index/departments"];

  return (
    <>
    <section id="column-3">
      
    <div className="top-wrapper">
				<div className="top-display">
					<div className="top-display-left">
						<nav id="primary-nav">
              <a href="/">HOME</a>
							<a href="/media">MEDIA</a>
							<a href={selection[1]}>{selection[0]}</a>
						</nav>
						<div className="chunk"> </div>
						<div onClick={onLangClick} className="panel-wrapper">
							<div className="panel-1">{"LANG: "+lang}</div>
						</div>
					</div>
					<div className="top-display-right">
						<div className="top-display-content">
							<div className="top-arch-1">
								<div className="top-arch-2">
									<div className="top-arch-content">
										<img src="/assets/sfcmd.png" className="sfc"/>
										<div className="lcars-heading">LIBRARY COMPUTER ACCESS/RETRIEVAL SYSTEM</div>
										<div className="lcars-access">
											user authorization code <span className="blink medium-dark-blue">accepted</span>
										</div>
									</div>
									<div className="top-arch-panel-1">
									</div>
									<div className="top-arch-panel-2">
										23<span className="hop">-</span>09										
									</div>
								</div>
							</div>							
						</div>
						<div className="arch-bottom">
							<div className="arch-base"> </div>
						</div>
					</div>
				</div>
				<div className="top-display-bottom">					
					<div className="bar-elbow"></div>
					<div className="bar-1"></div>
					<div className="bar-2"></div>
					<div className="bar-3"></div>
					<div className="bar-4">
						
					</div>
					<div className="bar-5"></div>		
				</div>
			</div> 
      
			<div className="spacer">
				<div className="space-sidebar"></div>
				<div className="space-1"></div>
				<div className="space-2"></div>
				<div className="space-3"></div>
				<div className="space-4"></div>
			</div>

      <div className="wrap">
				<div className="scroll-top"><a href="#page--top"><span className="hop">screen</span> top</a></div>
				<div className="left-frame">
					<div>
						<div className="panel-3">03<span className="hop">-111968</span></div>
						<Navbar selection={selection[0]} />
						<div className="panel-4">04<span className="hop">-41969</span></div>
						<div className="panel-5">05<span className="hop">-1701D</span></div>
						<div className="panel-6">06<span className="hop">-071984</span></div>
						<div className="panel-7">07<span className="hop">-47148</span></div>
					</div>
					<div>
						<div className="panel-8">08<span className="hop">-091966</span></div>
					</div>
				</div>
				<div className="right-frame">
					<div className="bar-runner">
						<div className="bar-6"></div>
						<div className="bar-7"></div>
						<div className="bar-8"></div>
						<div className="bar-9"></div>
						<div className="bar-10"></div>
					</div>
				</div>
        
        <section className='index-main-section' style={displayNone}>
          <Outlet/>
        </section>
      
			</div>

    </section>
    </>
  );
};