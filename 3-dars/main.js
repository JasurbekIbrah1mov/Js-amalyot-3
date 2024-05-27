let inps = document.querySelectorAll("input");
let ul = document.querySelector("ul");
let games = [];


inps.forEach((item)=>{
    item.addEventListener("change", ()=>{
        
        ul.innerHTML = ""
        if(item.checked){
            if(games.includes(item.dataset.game) == false){
                games.push(item.dataset.game)
            }
        } else{
            let index = games.indexOf(item.dataset.game);
            games.splice(index, 1)
        }

        games.forEach((x)=>{
            ul.innerHTML += `<li>${x}</li>`
        })
       
        
        
        
    })
})


















// inps.forEach((item) =>{
//     item.addEventListener("change", ()=>{
//         ul.innerHTML = ""
//         if(item.checked){
//             if(games.includes(item.dataset.game) == false){
//                 games.push(item.dataset.game)
//             }
//         } else{
//             let index = games.indexOf(item.dataset.game);
//             games.splice(index, 1)
//         }
//         games.forEach((x)=>{
//             ul.innerHTML += `<li> ${x} </li> <br> `
//         })
        
//     })
// })