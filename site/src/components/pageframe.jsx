import '../styles/Index.css';
import { Outlet, useLocation } from "react-router-dom";
import { useCallback } from 'react';

export function PageFrame({lang, setLang}) {

  const path = useLocation().pathname;

		
	const onLangClick = useCallback(() => {
		if (lang === 'EN')
			setLang('FR');
		if (lang === 'FR')
			setLang('EN');
	});


  return (
    <>
    <section id="column-3">
      <div id='page-frame' className="wrap">
				<div className="scroll-top"><a href="#page--top"><span className="hop">{lang==="FR"? "retour" : "screen"}</span> {lang==="FR"? "": "top"}</a></div>
				<div className="left-frame">
					<div>
						<div className="panel-3">03<span className="hop">-111968</span></div>
						<nav id="secondary-nav">
							<a onClick={onLangClick}>LANG: {lang}</a>
							<a href="/">{lang==="FR"? "ACCEUIL": "HOME"}</a>
						</nav>
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

					<section id='index-main-section'>
						<Outlet/>
					</section>
				</div>
			</div>

    </section>
    </>
  );
};