import '../components/infoPage.css'
import {ReactComponent as DawsonLogo} from './../Dawson_En_Logo_White_RGB.svg'
import { useState, useCallback } from "react";
import {Outlet} from "react-router-dom";

export function Media({lang, setLang}){

    const onLangClick = useCallback(() => {
		if (lang === 'EN')
			setLang('FR');
		if (lang === 'FR')
			setLang('EN');
	});
    const thankMessage = lang === 'FR'? 'Merci au Collège Dawson et l\'initiative SPACE pour offrir l\'opportunité d\'apprendre et expérimenter en robotique:' : 'Thank you to Dawson College and SPACE for providing opportunities to learn and experiment in Robotics';
    const pageName = lang === 'FR'? 'Média' : 'Media';
    const vidAndTut = lang === 'FR'? 'Vidéo et Tutoriel' : 'Video and tutorial';
    const iframeStyle = {
        border: '0',
        width:'30%',
        height:'400px'
    }
    return (
        <>
            <section id="column-3">
      
      <div class="top-wrapper">
                  <div class="top-display">
                      <div class="top-display-left">
                          <nav id="primary-nav">
                            <a href="/">{lang==="FR"? "ACCEUIL" : "HOME"}</a>
                            <a href="/index">ARCHIVES</a>
                          </nav>
                          <div class="chunk"> </div>

                          <div className="panel-wrapper">
                          <div className="panel-1" onClick={onLangClick}>
							LANG: {lang}
                          </div>
                        </div>
                      </div>
                      <div class="top-display-right">
                          <div class="top-display-content">
                              <div class="top-arch-1">
                                  <div class="top-arch-2">
                                      <div class="top-arch-content">
                                          <img src="./assets/sfcmd.png" class="sfc"/>
                                          <div class="lcars-heading">USS DAWSON • {pageName} </div>
                                          <div class="lcars-access">
                                             SPONSORS
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
                    <section className='index-main-section'>
                    <section class="infoPage">
                        <p> {thankMessage} </p>
                        <p>
                            <a href="https://www.dawsoncollege.qc.ca/">
                            <DawsonLogo alt="Dawson logo"/>
                            </a>
                        </p>
                        <p>
                            <a href="https://space.dawsoncollege.qc.ca/">
                                <img src={require("../SpaceLogo.png")} alt="Space logo" title="SPACE"/>
                            </a>
                        </p>
                        <p>
                            3040 Sherbrook St W, Montreal, Quebec, H3Z 1A4
                        </p>
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3529.0055466461954!2d-73.58763613560149!3d45.49029263509446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91a12a3fee4ab%3A0x6d25c9582df137e1!2sDawson%20College!5e1!3m2!1sen!2sca!4v1675111428738!5m2!1sen!2sca"
                            title="dawson on google maps"
                            width="100vw"
                            style= {iframeStyle}
                            allowFullScreen loading="lazy"
                            referrerPolicy='no-referrer-when-downgrade'
                        />
                        <h2>{vidAndTut}</h2>

                        
                    </section>
                    <Outlet/>
                    </section>
                </div>
          
        </div>
    </section>

    </>
    )
  }