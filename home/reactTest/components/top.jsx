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

const Top = () =>{
    return (
        <>
            <section class="wrap">
                <div class="decal-top-left">
                    <button class="panel-top-left" id="fullscreen1" onClick={fullscreen}>(fullscreen)</button> 
                    {/* extra button to replace the first when screen size is too small to avoid  text overflow */}
                    <button class="panel-top-left" id="fullscreen2" onClick={fullscreen}>(FS)</button> 
                    
                    <div class="panel-top-left2" id="top-left1">
                        example text - 2
                    </div>
                    {/* extra button to replace the first when screen size is too small to avoid  text overflow */}
                    <div class="panel-top-left2" id="top-left2">
                        et-2
                    </div>

                    <div class="panel-top-left2" id="lang" onClick={changeLang}>
                        (fr)
                    </div>

                </div>
                <div class="top-right">
                    <h1> Dawtrek • Home</h1>
                    <div class="top-right-mid">
                            <Numbers />
                                <nav class="filler">
                                    <div id="about-page">about</div>
                                    <div id="robot-page">robot</div>
                                    <div id="team-page">team</div>
                                    <div id="journal-page">journal</div>
                                    <div id="media-page">media</div>
                                </nav>
                    </div>
                    <div class="top-bar-panel">
                        <div id="top-bar1" class="bars"></div>
                        <div id="top-bar2" class="bars"></div>
                        <div id="top-bar3" class="bars">
                            <div id="top-bar3-1"></div>
                        </div>
                        <div id="top-bar4" class="bars"></div>
                    </div>
                </div>
            </section>
        </>
    )
}