import { compiler } from 'markdown-to-jsx';
import { useEffect, useState } from 'react';

export function ContentView({ markdown }) {

  const [mdSource, setMdSource] = useState('# Loading...')

  useEffect(() => {
    
    fetch(`/api/${markdown}`).then(res => {
      if (res.ok) {
        return res.json();
      }
    }).then(json => {
      setMdSource(json.content);
    });

  }, [markdown])

  return (<>
    {compiler(mdSource, {wrapper: 'article'})}
  </>);

}

export default ContentView;