import {useState, useEffect} from 'react';
import "./Member.css"

export function MemberDisplay({user}) {

  const [userData, setUserData] = useState({
    name: "Name", group: "Group", motto: "Motto",
    rarity: "Rarity", image: "Image"
  })

  useEffect(() => {

    fetch(`/api/team/${user}`).then(res => {
      if (res.ok)
        return res.json();
    }).then(json=> {
      if (json)
        setUserData(json)
    })

  }, [user])


  return (<>
      <img className="profile-image" src={`${userData['image']}`}/>
      <section className="info-section">
        <h1 className="name">{userData['name']}</h1>
        <p>Group: {userData['group']}</p>
        <p>Motto:{userData['motto']}</p>
        <p>Rarity:{userData['rarity']}</p>
      </section>
  </>)

}