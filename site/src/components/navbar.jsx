export default function Navbar({selection, lang}) {
    const links = selection === "DEPARTMENTS" ? [[lang === "FR"? "JOURNAUX DU CAPITAINE":"CAPTAIN LOGS", "/URL"],  [lang ==="FR"? "JOURNAUX D'ÉQUIPE" : "CREW LOGS", "/URL"]]: 
    [
        ['ROBOT', '/URL'],
        [lang==="FR"? "Kiosque" : 'KIOSK', '/URL'],
        [lang==="FR"? "SITE WEB": 'WEBSITE', '/URL'],
        [lang==="FR"? "VIDÉO" : 'VIDEO', '/URL']
    ];

    return(
        <>
            <nav id="secondary-nav">
                {links.map(([title, url]) => (
                    <a href={url}>{title}</a>
                ))}
            </nav>
        </>
    );
}