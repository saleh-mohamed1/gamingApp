
import { Ui } from "./ui.module.js";

export class Details{
    constructor(id){
        this.uiDetails = new Ui(); 
        document.getElementById("closePage").addEventListener("click" , () => {
            document.querySelector("#secondeDataSet").classList.add("d-none");
            document.querySelector(".hide").classList.remove("d-none");
        });
        this.detailsOfGaming(id);
    };
    
    async detailsOfGaming(idGame) {
        let loadPages = document.getElementById('loadPages');
        loadPages.classList.remove('d-none');
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'ebeae0ab7dmsh1e1730239e7b369p1e9fb9jsnc78dee677e70',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    let responseDetails = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${idGame}` , options);
    let finallys =        await  responseDetails.json();

    loadPages.classList.add('d-none');
    
    this.uiDetails.displayDetails(finallys);
    };

    

}

