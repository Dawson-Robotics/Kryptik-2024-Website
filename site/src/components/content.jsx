import { compiler } from 'markdown-to-jsx';
import { useEffect, useState } from 'react';
import { useParams  } from 'react-router'
import './content.css'
export function ContentView({ color, path, lang }) {

  const md = useParams()["*"];
  const markdown = path??md;

  const [mdSource, setMdSource] = useState('# Loading...')

  const [mdLang, setMdLang] = useState(lang??'en');

  function onSetLang(event) {
    setMdLang(event.target.value);
  }
  
  useEffect(() => {

    if (lang != mdLang)
      setMdLang(lang)
    
    fetch(`http://45.33.98.184/api/md/${markdown}?lang=${mdLang}`).then(res => {
      if (res.ok) {
        return res.json();
      }
    }).then(json => {

      if (json)
        setMdSource(json.content);

    });

  }, [markdown, mdLang, lang])

  return (<>
  <section className="page-wrapper"> 
  <header className="bar-section">
    <section style={{'background-color': color}} className="end l">

    </section>

    { !lang && <select onChange={onSetLang}>
    <option value='en'>English</option>
    <option value='fr'>French</option>
    </select>}
    <section style={{'background-color': color}} className="bar">

    </section>
    <section style={{'background-color': color}} className="end r">

    </section>
  </header>
  <main>
  {compiler(mdSource, {wrapper: 'article'})}
  </main>
  <footer className="bar-section">
    <section style={{'background-color': color}} className="end l">
      
    </section>
    <section style={{'background-color': color}} className="bar">

    </section>
    <section style={{'background-color': color}} className="end r">

    </section>
  </footer>
</section>
  </>);

}

export default ContentView;