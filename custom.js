const card=document.querySelector(".container");

fetch('https://api.sampleapis.com/countries/countries')
.then(res=>res.json())
.then(data=>{
    data.map((item)=>{
        let dataContent = `
        <div class="content">
        <h2 class="country">${item.name}</h2>
        <p>Country Capital: <span class="capital">${item.capital}</span></p>
        <p>Country Currency: <span class="curren
         cy">${item.currency}</span></p>
        <p>Population: <span class="population">${item.population}</span></p>
        <p>Flag: <span class="flag"><a href=${item.media.flag} target="_blank">See Flag</a></span></p>
        <p>Emblem: <span class="flag"><a href=${item.media.emblem} target="_blank">See Emblem</a></span></p>
      </div>
        `
        card.innerHTML += dataContent;

        const btn=document.querySelector(".btn");
        const input=document.querySelector("input");
        const contents=document.querySelectorAll('.content');
        btn.addEventListener("click",searchContainer);

        function searchContainer(){
          contents.forEach((content)=>{
            const search=input.value.toLowerCase();
            const contentText=content.textContent;
            if(contentText.toLowerCase().includes(search.toLowerCase())){
              content.style.display="inline-block";
            }else{
              content.style.display="none";
            }
          })
        } 
    })
})

