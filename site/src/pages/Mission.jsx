import '../components/infoPage.css'
import { useState, useCallback } from "react";
import {Outlet} from "react-router-dom";

export function Mission({lang, setLang}){

    const onLangClick = useCallback(() => {
		if (lang === 'EN')
			setLang('FR');
		if (lang === 'FR')
			setLang('EN');
	});
    const iframeStyle = {
        border: '0',
        width: '60%'
    }
    
    const pageName = lang === 'FR'? 'Mission' : 'Mission';
    const missionHead = lang === 'FR'? 'Notre Mission' : 'Our Mission'; 
    const mission = lang === 'FR'? 
        ` 
        Les quelque 40 membres de l'équipage de l'USS Dawson se réunissent chaque semaine pour 
        accomplir chaque compétence de la compétition canadienne de robotique (CRC): 
        ingénierie mécanique/électrique, décoration d'intérieur, création de sites web, programmation, 
        réalisation de films, etc. Nous essayons d'être aussi éducatifs que récréatifs en 
        jetant un pont entre les mondes de l'art et de la science. 
        L'équipe accueille les étudiants de l'Académie Robofleet dans une dizaine de programmes différents et 
        dans plus de 15 profils différents.`
        :
        `
        The roughly 40-member crew of the USS Dawson meets weekly to accomplish each competency of 
        the Canadian Robotics Competition (CRC): mechanical/electrical engineering, interior design, 
        website creation, programming, filmmaking, and more. We try to be as educational as we are 
        recreational as we bridge the worlds of art and science. The team houses Robofleet Academy 
        students in approximately 10 different programs and ranging to over 15 different profiles. 
        `;
    const aboutHead = lang === 'FR'? 'Apropos de CRC' : 'About CRC';
    const about = lang === 'FR'? 
    `
    Le CRC a existé bien avant l'apparition du Robofleet. Depuis 2001, le CRC était une compétition 
    populaire à travers le Canada, qui réunit les écoles secondaires et les CÉGEPs afin d'apprendre 
    à propos des variétés des disciplines. Chaque année, une toute nouvelle compétition est organisée,
    allant des robots qui lancent des balles de tennis dans des conteneurs en forme de seau pour gagner
    des points à un jeu où les robots doivent retourner des pièces hexagonales pour gagner des points.
    Cette année, le CRC a créé la compétition Kryptik, où deux équipes de deux robots s'affrontent pour
    obtenir des points en lançant des ballons chasseur dans des tours ressemblant à des poteaux. 
    `
    :
    `
    The CRC has existed long before the dawn of Robofleet. Since 2001, 
    The CRC has been a popular competition across Canada, uniting high schools 
    and CEGEPs to learn about a variety of disciplines. Every year, there is a brand-new competition, 
    ranging from robots shooting tennis balls into bucket-like containers to earn points to a game where 
    robots must flip hexagonal pieces to earn points. This year, the CRC has created the Kryptik competition,
    where two teams of two robots compete to obtain points by shooting dodgeballs into post-like towers to 
    earn points.
    `;
    const ruleHead = lang === 'FR'? 'Les règles' : 'The rules';
    const gameRules = lang === 'FR' ? 
        ` 
        Pour la compétition Kryptik 2024, le classique 2v2 fait son retour.
        Les robots feront partie soit de l'équipe bleue, soit de l'équipe jaune. 
        Comme toujours, l'équipe qui aura marqué le plus de points sera déclarée victorieuse. 
        Le terrain du jeu est divisé en deux moitiés, et chaque équipe n'est autorisée à naviguer que 
        sur sa côté respectif. Les pièces du jeu de cette année sont 42 balles de dodgeball qui se trouvent
        au centre du terrain et sur les robots au début du match. Les robots doivent viser deux tours. 
        Ces tours attribuent des points à l'équipe qui réussit à lancer une pièce de jeu dans les zones 
        cibles désignées. La tour la plus éloignée (située à l'arrière du terrain) donne le plus de points. 
        L'autre tour se trouve sur le côté droit et, bien qu'elle soit mieux située, elle rapporte moins 
        de points. Pour augmenter la valeur de tous les points gagnés, la pièce du jeu peut être déposée 
        sur trois piliers différents qui sont placés du côté du terrain de l'équipe, chacun fournissant un 
        facteur par lequel les points totaux de l'équipe peuvent être multipliés.
        Enfin, le fait d'avoir des balles de son côté du terrain donne des points à l'autre équipe une 
        fois le match terminé. Chaque côté est délimité par deux barres rouges, séparant le terrain en 
        trois parties. En fonction de l'endroit où la balle atterrit, on peut gagner des points différents.
        `
        :
        `For the Kryptik 2024 competition, the classical 2v2 makes its return. 
        The robots will either be part of the Blue Team or the Yellow Team. 
        As always, the team with the most points scored will be declared the victor. 
        The playing field is divided into two halves, and each team is allowed only to navigate on
        its respective side. The Game Pieces (GPs) for this year are 42 dodgeballs that are found in 
        the center of the field and on the robots at the beginning of the match. 
        There are two towers for the robots to aim at. These towers will award points to a team that
        successfully launches a GP into its designated target zones. 
        The further tower (found at the back of the field) awards the most points. 
        The other tower is towards the right side, and while it is more conveniently located, 
        it gives fewer points. To be able to increase the worth of all points earned, 
        the GP can be dropped onto three different pillars that are placed on a team's own side of the field, 
        each providing a factor by which a team's total points can be multiplied. 
        Finally, having balls on your side of the field gives points to the other team once the match is over. 
        Each side is delimited by two red bars, separating the field into three parts. 
        Depending on where the ball lands, different amounts of points can be earned.
        `;
    return (
        <>
            <section id="column-3">
      
      <div class="top-wrapper">
                  <div class="top-display">
                      <div class="top-display-left">
                          <nav id="primary-nav">
                    <a href="/index">INDEX</a>
                              
                          </nav>
                          <div class="chunk"> </div>
                          <div class="panel-wrapper">
                              <div class="panel-1">USS DAWSON</div>
                          </div>
                          <div className="panel-wrapper">
                          <div className="panel-1" onClick={onLangClick}>
									{lang}
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
                            <h1>{missionHead}</h1>
                            <p class="information">{mission}</p>
                            <h1>{aboutHead}</h1>
                            <p class="information">{about}</p>
                            <a href='https://robo-crc.ca/about/'>
                                <img src={require('../CRClogo.png')} alt='CRC logo' title="CRC"/>
                            </a>
                            <div class="map">
                                <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3710.034473440165!2d-73.78551805480069!3d45.60494076994095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc926bf715640d3%3A0x68944ee7cd7ccc9b!2sSchool%20Secondary%20Cur%C3%A9-Antoine-Labelle!5e1!3m2!1sen!2sca!4v1674788854305!5m2!1sen!2sca" 
                                class="real-map" 
                                margin="auto" 
                                height="350" 
                                style={iframeStyle} 
                                allowfullscreen="" 
                                loading="lazy" 
                                referrerpolicy="no-referrer-when-downgrade" title="Location">
                                </iframe>
                                <div class="map-description">
                                    <a href='https://cureantoinelabelle.cslaval.qc.ca/'>
                                        <img src={require('../cure-antoine-labelle-logo.png')} alt="Cure Antoine Labelle logo" title="Antoine Labelle logo"/>
                                        page in french only
                                    </a>
                                    <h3>Address:</h3>
                                    <h3>216 Bd Marc-Aurèle-Fortin, Laval, QC</h3>
                                </div>
                            </div>

                            <h1>{ruleHead}</h1>
                            <p class="information">{gameRules}</p>
                        </section>
                        <Outlet/>
                    </section>
                </div>
          
        </div>
    </section>
    </>
    )
  }