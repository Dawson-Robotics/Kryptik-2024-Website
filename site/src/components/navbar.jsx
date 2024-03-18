export default function Navbar({selection}) {
    const links = selection === "DEPARTMENTS" ? [["CAPTAIN LOGS", "/URL"],  ["CREW LOGS", "/URL"]]: 
    [
        ['ROBOT', '/URL'],
        ['KIOSK', '/URL'],
        ['WEBSITE', '/URL'],
        ['VIDEOS', '/URL']
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