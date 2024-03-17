import {useEffect, useState} from 'react'
import {MemberDisplay} from '../../components/member.jsx'
import "./team.css"
import { ReactComponent as PicFrame } from "./pic-frame.svg";
import {ReactComponent as Nametag} from './nametag.svg'

export function Team() {

  var [teamlist, setTeamList] = useState([])
  var [displayUser, setDisplayUser] = useState('izzy');
  function onUserClick(user) {
    setDisplayUser(user)
  }

  useEffect(() => {

    // console.log('effect')

    fetch('/api/team').then(res => {
      if (res.ok) {
        // console.log('fetch')
        return res.json();
      }
    }).then(json => {
      // console.log(json)
      if (json)
        setTeamList(json)
    });
    

  }, []);

  console.log(teamlist)

  return (<section className="team-body">
    
    <h1 className="team-h1"> SHIP CREW </h1>

    <section className="team-page">

      <div className="person">
        <div className="person-pic">
          <PicFrame alt="pic-frame"/>
          <img className="pic" src="../content/md/images/cass.png" alt="member"/>
        </div>
        <div className="container">
          <Nametag className="label" alt="name-tag"/>
          <div className="name">NAME</div>
        </div>
      </div>
    </section>


  </section>);
}