import { compiler } from 'markdown-to-jsx';
import { useEffect, useState } from 'react';
import { useParams  } from 'react-router'
import './content.css'
export function ContentView({ color }) {

  const markdown = useParams()["*"];
  const [mdSource, setMdSource] = useState('# Loading...')

  const [mdLang, setMdLang] = useState('en')
  function onSetLang(event) {
    setMdLang(event.target.value);
  }
  useEffect(() => {
    
    fetch(`/api/md/${markdown}?lang=${mdLang}`).then(res => {
      if (res.ok) {
        return res.json();
      }
    }).then(json => {

      if (json)
        setMdSource(json.content);

    });

  }, [markdown, mdLang])

  return (<>
  <section class="page-wrapper"> 
  <header class="bar-section">
    <section style={{'background-color': color}} class="end l">

    </section>

    <select onChange={onSetLang}>
    <option value='en'>English</option>
    <option value='fr'>French</option>
    </select>
    <section style={{'background-color': color}} class="bar">

    </section>
    <h1>{markdown}</h1>
    <section style={{'background-color': color}} class="end r">

    </section>
  </header>
  <main>
  {compiler(mdSource, {wrapper: 'article'})}
  </main>
  <footer class="bar-section">
    <section style={{'background-color': color}} class="end l">
      
    </section>
    <h1>{markdown}</h1>
    <section style={{'background-color': color}} class="bar">

    </section>
    <section style={{'background-color': color}} class="end r">

    </section>
  </footer>
</section>
  </>);

}

export default ContentView;