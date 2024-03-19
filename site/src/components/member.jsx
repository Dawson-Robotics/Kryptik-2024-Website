import {useState, useEffect} from 'react';
import "./member.css"

export function MemberDisplay({user, setUser}) {

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

  if (user === "darcy") {
    return (
    <>
      <section className="member-section">
        <p className="x-button" onClick={()=>{setUser();}}>✖</p>
        <section id="image-section">
          <h2 className="member-name">{userData['name']}</h2>
          <img className="profile-image" src={`${userData['image']}`}/>
        </section>
        <section className="yapper">
          <p>Group: {userData['group']}</p>
          <p>"{userData['motto']}"</p>
          <p>Rarity: {userData['rarity']}</p>
        </section>
      </section>
  </>);
  }

  return (<>
      <section className="member-section">
        <p className="x-button" onClick={()=>{setUser();}}>✖</p>
        <section id="image-section">
          <h2 className="member-name">{userData['name']}</h2>
          <img className="profile-image" src={`${userData['image']}`}/>
        </section>
        <section className="info-section">
          <p>Group: {userData['group']}</p>
          <p className="motto">"{userData['motto']}"</p>
          <p>Rarity: {userData['rarity']}</p>
        </section>
      </section>
  </>)

}