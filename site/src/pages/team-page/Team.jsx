import {useEffect, useState} from 'react'
import {MemberDisplay} from '../../components/member.jsx'
import "./team.css"
import { ReactComponent as PicFrame } from "./pic-frame.svg";
import {ReactComponent as Nametag} from './nametag.svg'

export function Team() {

  var [teamlist, setTeamList] = useState([])
  var [displayUser, setDisplayUser] = useState('');
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
      console.log(json)
      if (json)
        setTeamList(json)
    });
    

  }, []);

  console.log(teamlist)

  return (<section className="team-body">
    
    <div class="lcars-text-bar"> <span>CREW</span> </div>

    {displayUser &&
     <MemberDisplay user={displayUser} setUser={setDisplayUser}/>
    }

    <section className="team-page">

    { teamlist.map((member) => {
      return <div className="person" onClick={() => onUserClick(member)}>
        <div className="person-pic">
          <PicFrame alt="pic-frame"/>
          <img className="pic" src={`images/${member}.jpg`} alt="member"/>
        </div>
        <div className="container">
          <Nametag className="label" alt="name-tag"/>
          <div className="name">{member}</div>
        </div>
      </div>
    }) }

    </section>

  </section>);
}