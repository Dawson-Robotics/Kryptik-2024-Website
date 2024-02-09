import {useEffect, useState} from 'react'
import {MemberDisplay} from '../components/member.jsx'

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

  return (<>


    <section className="wrapper">
      <div>
        {
          teamlist.map(x => {
            return <p onClick={() => onUserClick(x)}>{x}</p>
          })
        }
      </div>

      <MemberDisplay user={displayUser}/>
    </section>


  </>);
}