
import { Details } from "./details.module.js";
import { Ui } from "./ui.module.js";
export class AllGames{
    constructor(){
        this.getApi('mmorpg');
        document.querySelectorAll('ul li a').forEach((link) => {
            link.addEventListener('click'  ,  (e) => {
                document.querySelector("ul li  .active").classList.toggle("active");
                e.target.classList.add("active");
                this.getApi(link.getAttribute("id"));
        })
        })
        this.ui = new Ui(); 
    };
    async  getApi(get) {
        let loadPage = document.getElementById('loadPage');

        loadPage.classList.remove('d-none')
        document.querySelector("#loadDetails").classList.add('d-none')
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'ebeae0ab7dmsh1e1730239e7b369p1e9fb9jsnc78dee677e70',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    const projectApi = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${get}` , options) ;
    const datamain = await projectApi.json();
    this.ui.displayMainData(datamain);
    this.showingData();
    loadPage.classList.add('d-none')
    document.querySelector("#loadDetails").classList.remove('d-none')

};
    showingData(){
        document.querySelectorAll('.card').forEach((item) =>{
            item.addEventListener('click' , () =>{
                const id = item.dataset.id;
                console.log(id);
                this.detailsInfo(id);
            })
        })
    }

    detailsInfo(idInfo){
        new Details(idInfo);
        document.querySelector(".hide").classList.add("d-none");
        document.querySelector("#secondeDataSet").classList.remove("d-none");
    }
    
}






















// document.querySelectorAll('ul li a').forEach((link) =>{
//     link.addEventListener('click'  , function (eventInfo) {
//         console.log(eventInfo.target.innerHTML);
//         })
//     })
