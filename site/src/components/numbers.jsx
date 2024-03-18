//generates {numberCount} random numbers and puts them into a list of divs
function generateNumbers(){
    const numbers = [];
    let numberCount = Number(getComputedStyle(document.documentElement).getPropertyValue('--number-count'));
    for( let i = 0; i < numberCount; i ++){
        numbers.push(Math.floor(Math.random() * (10000 - 1 + 1) + 1))
    }
    const listNumbers = numbers.map( (num) => 
        <div className="nums" key={num}> {num} </div>
    )

    return listNumbers
}

//uses the generate numbers function to create a list of rows containing the numbers 
function generateRows(){
    const rows = []
    let numrows = Number(getComputedStyle(document.documentElement).getPropertyValue('--number-row-count'));;
    let id;
    for( let i = 1; i <= numrows; i ++){
        id = `row${i}`
        rows.push(
            <div id={id} className="numberRow" key="numbers">
                {generateNumbers()}
            </div>
        )
    }

    return rows
}

export const Numbers = () =>{

    return(
        <>
            <section className="numbers">
                {generateRows()}
            </section>
        </>
    )

}
