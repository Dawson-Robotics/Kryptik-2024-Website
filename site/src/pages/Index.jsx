import Navbar from '../components/navbar.jsx';
import '../styles/Index.css';
import { useState, useCallback } from 'react';
import { Outlet, useParams, useLocation } from "react-router-dom";
import ContentView from '../components/content.jsx';
export function Index({lang, setLang}) {

	const [selectedJournal, setJournal] = useState('cap');
	const [selectedDep, setDep] = useState('robot');

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

	const currentArt = path === '/index/departments/'? selectedDep : selectedJournal;
	
  const selection = path === '/index/departments/'? ["LOGS", "/index/logs", lang==='FR'? 'JOURNAUX' : "LOGS"] : ["DEPARTMENTS", "/index/departments",(lang==='FR'? 'DIVISIONS' : "DIVISIONS")];

  return (
    <>
    <section id="column-3">
      
    <div className="top-wrapper">
				<div className="top-display">
					<div className="top-display-left">
						<nav id="primary-nav">
							<a href="/">{lang==="FR"? "ACCEUIL" : "HOME"}</a>
							<a href="/media">{lang==='FR'? "MÉDIAS": "MEDIA"}</a>
							<a href={selection[1]}>{selection[2]}</a>
						</nav>
						<div className="chunk"></div>
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
										<div className="lcars-heading">{lang==="FR"? "SYSTÈME D'ACCÈS ET DE RÉCUPÉRATION DES DONNÉES INFORMATIQUES" : "LIBRARY COMPUTER ACCESS/RETRIEVAL SYSTEM"}</div>
										<div className="lcars-access">
											{lang==="FR"? "code d'autorisation de l'utilisateur:": "user authorization code:"} <span className="blink medium-dark-blue">
												{lang==="FR"? "accepté": "accepted"}
											</span>
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
						<Navbar lang={lang} selection={selection[0]} setDep={setDep} setJournal={setJournal} />
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
					<section id='index-main-section' >
						<ContentView lang={lang} path={currentArt}/>
					</section>
				</div>
			</div>

    </section>
    </>
  );
};