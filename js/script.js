let table = document.body.firstElementChild;

// recuperation des tr
let allTr = table.children[0].children

for (const key in allTr) {
    if(allTr[key].children){
        allTr[key].children[key].style.backgroundColor = 'red'
    }
}