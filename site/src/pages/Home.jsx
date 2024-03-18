import "../styles/Index.css";

import MyThree from "../components/spaceship.jsx";
import { useState, useCallback } from "react";
import { Outlet } from "react-router-dom";

import Gizmo from '../components/gizmo.jsx';

function fullscreen() {
  if (document.fullscreenElement != null) {
    document.exitFullscreen();
  } else {
    document.documentElement.requestFullscreen();
  }
}

export function Home({lang, setLang}) {
  const [selection, setSelection] = useState(["DEPARTMENTS", "/dep-url"]);
	const [gizmo, setGizmo] = useState(false);

	const onLangClick = useCallback(() => {
		if (lang === 'EN')
			setLang('FR');
		if (lang === 'FR')
			setLang('EN');
	});

	const monitor = lang === 'FR'? 'MONITEUR D\'État' : 'STATUS MONITOR';
	const status = lang === 'FR'? 'ÉTAT DU SYSTÈME ' : "SYSTEM STATUS ";
	const op = lang === 'FR'? 'OPÉRATIONNEL' : 'OPERATIONAL';

	const shield = lang === 'FR'? 'BOUCLIER' : "SHIELDS";
	const power = lang === 'FR'? "ÉNERGIE": "POWER";
  // const panel8Style = {
  //   height: 156,
  // };

  return (
    <>
			{
				gizmo && <Gizmo />
			}
      <section id="column-3">
				<link rel="stylesheet" href="/assets/hlock.css" />
        <div className="top-wrapper">
          <div className="top-display">
            <div className="top-display-left">
              <div className="chunk"> </div>
              <div className="panel-wrapper">
                <div className="panel-1">USS DAWSON</div>
              </div>
              <div className="panel-wrapper">
                <div className="panel-1" onClick={fullscreen}>
                  296-CH
                </div>
              </div>
							<div className="panel-wrapper">
                <div className="panel-1" onClick={onLangClick}>
									{lang}
                </div>
              </div>
            </div>
            <div className="top-display-right">
              <div className="top-display-content">
                <div className="top-arch-1">
                  <div className="top-arch-2">
                    <div className="top-arch-content">
                      <a href="/index">
                        <img src="./assets/sfcmd.png" className="sfc" />{" "}
                      </a>
                      <div className="lcars-heading">USS DAWSON {monitor}</div>
                      <div className="lcars-access">
                        {status}
                        <span className="blink medium-dark-blue">{op}</span>
                      </div>
                    </div>
                    <div className="top-arch-panel-1">
										</div>
                    <div onClick={() => { setGizmo(value => !value) }} className="top-arch-panel-2">
                      23<span className="hop">-</span>Gizmo
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
            <div className="bar-4"></div>
            <div className="bar-5"></div>
          </div>
        </div>

        <div className="spacer">
          <div className="space-sidebar"></div>
          <div className="space-1">---</div>
          <div className="space-2">---</div>
          <div className="space-3">---</div>
          <div className="space-4">---</div>
        </div>

        <div className="wrap">
          <div className="left-frame">
            <div className="panel-3">
              03<span className="hop">-111968</span>
            </div>
            <div className="panel-4" id="panel-4-2">
              04<span className="hop">-41969</span>
            </div>

            <div className="panel-8">
              {shield}: <span className="hop blink">100%</span>

							<div>
								{power}: <span className="hop"> 99.7%</span>
							</div>
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
            <section className="index-main-section">
              <MyThree />
            </section>
          </div>
        
				
				</div>
      </section>
    </>
  );
}
