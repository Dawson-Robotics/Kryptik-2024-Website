
import "./testhome-top.css"
import {Numbers} from './numbers.jsx'
import {Link} from "react-router-dom";

function fullscreen(){

    if(document.fullscreenElement != null){
        document.exitFullscreen()
    }
    else{
        document.documentElement.requestFullscreen()
    }
}
    
function changeLang(){
    console.log("language changed!")
}
export const Top = () =>{
    return (
        <>
            <section className="wrap">
                <div className="decal-top-left">
                    <button className="panel-top-left" id="fullscreen1" onClick={fullscreen}>(fullscreen)</button> 
                    {/* extra button to replace the first when screen size is too small to avoid  text overflow */}
                    <button className="panel-top-left" id="fullscreen2" onClick={fullscreen}>(FS)</button> 
                    
                    <div className="panel-top-left2" id="top-left1">
                        296-CH
                    </div>
                    {/* extra button to replace the first when screen size is too small to avoid  text overflow */}
                    <div className="panel-top-left2" id="top-left2">
                        et-2
                    </div>

                    <div className="panel-top-left2" id="lang" onClick={changeLang}>
                        (fr)
                    </div>

                </div>
                <div className="top-right">
                    <h1> USS Dawson</h1>
                    <div className="top-right-mid">
                            <Numbers />
                                <nav className="filler">
                                    <div id="about-page">Mission</div>
                                    <div id="robot-page">Departments</div>
                                    <div id="team-page">Crew</div>
                                    <div id="journal-page">Journal</div>
                                    <Link to="/Media"><div id="media-page"> Media</div></Link>
                                </nav>
                    </div>
                    <div className="top-bar-panel">
                        <div id="top-bar1" className="bars"></div>
                        <div id="top-bar2" className="bars"></div>
                        <div id="top-bar3" className="bars">
                            <div id="top-bar3-1"></div>
                        </div>
                        <div id="top-bar4" className="bars"></div>
                    </div>
                </div>
            </section>
        </>
    )
}