import MyThree from '../components/spaceship.jsx';

export const RightSide = () =>{
    return(
        <>
            <section class="bottom-right-side">
                <div class ="bar-panel">
                    <div id="bottom-bar1" class="bars"></div>
                    <div id="bottom-bar2" class="bars"></div>
                    <div id="bottom-bar3" class="bars">
                        <div id="bottom-bar3-1"></div>
                    </div>
                    <div id="bottom-bar4" class="bars"></div>
                </div>
                <main>
                    <MyThree/>
                </main>
            </section>
        </>
    )
}