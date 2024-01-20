
export class Ui{
    displayMainData(dataFirst) {
        let dadaSet = ` `
        for (let i = 0; i < dataFirst.length; i++) {
            dadaSet +=`
            <div class="col-md-3">
            <div data-id="${dataFirst[i].id}"  class="card h-100 "  ">
               <div  class="card-body">
                  <div class="">
                     <img class="card-img-top object-fit-cover h-100" src="${dataFirst[i].thumbnail}" />
                  </div>
                  <section>
                     <div class=" d-flex justify-content-between mt-2">
                        <h3 class=" fs-5 text-white">${dataFirst[i].title}</h3>
                        <button class="btn btn-primary  p-2">Free</button>
                     </div>
                     <p class="card-text fs-5 text-center opacity-50">
                        ${dataFirst[i].short_description.split(" ", 8)}
                     </p>
                  </section>
               </div>
               <section class="card-footer fs-5  d-flex justify-content-between">
                  <span class="text-white bg-secondary rounded-2 p-1 fs-6  ">${dataFirst[i].genre}</span>
                  <span class="text-white bg-secondary rounded-2 p-1 fs-6 ">${dataFirst[i].platform}</span>
               </section>
            </div>
         </div>
            `
        }
        document.querySelector('#wholeData').innerHTML = dadaSet;
      }
    displayDetails(dataFirst){
        let seconde =
        `
        
        
        <div class="row mx-3">

        <div class="col-md-4">

        <img src="${dataFirst.thumbnail}" class="w-100" alt="">
        </div>
      <div class="col-md-8 text-white">
      <h2 class="fs-2">Title:${dataFirst.title}</h2>
      <p class="fs-5">Category: <span class="badge text-bg-info">${dataFirst.genre}</span></p>
      <p class="fs-5">Platform: <span class="badge text-bg-info">${dataFirst.platform}</span></p>
      <p class="fs-5">Status:   <span class="badge text-bg-info">${dataFirst.status}</span></p>
      <p class="fs-6">${dataFirst.description}</p>
      <a class="btn btn-outline-warning text-white fs-4" target="_blank" href="${dataFirst.game_url}">show Games</a>
      </div>
      
      </div>
      `
      document.getElementById("detailsInformation").innerHTML = seconde;
      console.log(seconde);
    }
}
