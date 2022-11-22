export const sampleFunction = () => {}

const mainFunction = () => {}

export const howLoopsWork = () => {

    const months = ["January", "February", "March", "April", "May", "June", "July"]
   
    for (let i = 0; i < months.length; i++) {
        console.log("traditional", months[i]);
    }

    const monthsUpperCase = [];
    months.forEach( (month)=>{
        console.log("modern", month);
        monthsUpperCase.push(month.toUpperCase());
    } )

    console.log(monthsUpperCase);

    const firstLetters = months.map (month => month.substring(0,1));
    const firstLetters1 = months.map ( (month,i) => month.substring(0,1) + i );

    console.log(firstLetters1);

    // const monthsStartingJ = months.filter( (month) => {
    //     const firstLetter = month.substring(0,1);
    //     const isAJ = firstLetter === "J";
    //     return isAJ;
    // }  )

    const monthsStartingJ = months
        .filter ( month => month.substring(0,1) ===  "J")
        .map (month => month.toUpperCase());

    console.log("MonthsStartingJ", monthsStartingJ)
    
}

export default mainFunction;