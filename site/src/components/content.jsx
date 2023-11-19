import { compiler } from 'markdown-to-jsx';
import { useEffect, useState } from 'react';

export function ContentView({ markdown }) {

  const [mdSource, setMdSource] = useState('# Loading...')
  const [mdLang, setMdLang] = useState('en')

  useEffect(() => {
    
    fetch(`/api/${markdown}?lang=${mdLang}`).then(res => {
      if (res.ok) {
        return res.json();
      }
    }).then(json => {
      setMdSource(json.content);
    });

  }, [markdown, mdLang])

  function onSetLang(event) {
    setMdLang(event.target.value);
  }

  return (<>
    <select onChange={onSetLang}>
        <option value='en'>En</option>
        <option value='fr'>Fr</option>
    </select>
    {compiler(mdSource, {wrapper: 'article'})}
  </>);

}

export default ContentView;