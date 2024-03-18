import MyThree from '../components/spaceship.jsx';

export const RightSide = () =>{
    return(
        <>
            <section className="bottom-right-side">
                <div className="bar-panel">
                    <div id="bottom-bar1" className="bars"></div>
                    <div id="bottom-bar2" className="bars"></div>
                    <div id="bottom-bar3" className="bars">
                        <div id="bottom-bar3-1"></div>
                    </div>
                    <div id="bottom-bar4" className="bars"></div>
                </div>
                <main>
                    <MyThree/>
                </main>
            </section>
        </>
    )
}