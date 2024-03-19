export default function Navbar({selection, lang, setDep, setJournal}) {
    const links = selection === "DEPARTMENTS" ? [[lang === "FR"? "JOURNAUX DU CAPITAINE":"CAPTAIN LOGS", "cap"],  [lang ==="FR"? "JOURNAUX D'ÉQUIPE" : "CREW LOGS", "crew"]]:
    [
        ['ROBOT', 'robot'],
        [lang==="FR"? "Kiosque" : 'KIOSK', 'kiosk'],
        [lang==="FR"? "SITE WEB": 'WEBSITE', 'website'],
        [lang==="FR"? "VIDÉO" : 'VIDEO', 'video'],
        [lang==="FR"? "TUTORIEL" : "TUTORIAL", 'tutorial']
    ];

    function runNav(url) {
        console.log(url)
        if (selection !== "DEPARTMENTS")
            setDep(url);
        else {
            console.log('set')
            setJournal(url);
        }

    }

    return(
        <>
            <nav id="secondary-nav">
                {links.map(([title, url]) => {

                    return <a onClick={() => runNav(url)}>{title}</a>
                })}
            </nav>
        </>
    );
}