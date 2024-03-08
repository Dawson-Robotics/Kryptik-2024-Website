function fullscreen(){

    if(document.fullscreenElement != null){
        document.exitFullscreen()
    }
    else{
        document.documentElement.requestFullscreen()
    }
}
    

const Top = () =>{
    return (
        <>
            <section class="wrap">
                <div class="decal-top-left">
                    <button id="panel-top-left" onClick={fullscreen}>(fullscreen)</button>
                    
                    <div id="panel-top-left2">
                        example text - 2
                    </div>
                </div>
                <div class="top-right">
                    <h1> Dawtrek • Home</h1>
                    <div class="top-right-mid">
                            <Numbers />
                            <div class="filler">

                            </div>
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