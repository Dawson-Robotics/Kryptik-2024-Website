import "./testhome-bottom.css"
import {LeftSide} from './leftside.jsx'
import {RightSide} from './rightside.jsx'

export const Bottom = () =>{
    return(
        <>
            <section className="wrap" id="space">
                <LeftSide />
                <RightSide />
            </section>
        </>
    )
}