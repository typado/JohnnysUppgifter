import { products } from "./Data/ProductData.js"
const tableBody = document.getElementById("tableBody")


refreshProducts(products)

function createNewTr(products){

    let tr = document.createElement("tr")

    let createId = document.createElement("td")
    tr.appendChild(createId)
    createId.innerText = products.id

    let createTitle = document.createElement("td")
    tr.appendChild(createTitle)
    createTitle.innerText = products.title

    let createDescription = document.createElement("td")
    tr.appendChild(createDescription)
    createDescription.innerText = products.description

    let createCategory = document.createElement("td")
    tr.appendChild(createCategory)
    createCategory.innerText = products.category

    let createRating = document.createElement("td")
    tr.appendChild(createRating)
    createRating.innerText = products.rating.rate

    
    let createImage = document.createElement("td")
    let img = document.createElement("img")
    tr.appendChild(createImage)
    createImage.appendChild(img)
    img.src = products.image

    return tr
}

function refreshProducts(refreshTr){
    tableBody.innerHTML=''
    refreshTr.forEach((td)=>{
        let tr = createNewTr(td)
        tableBody.appendChild(tr)
    })
}
