let myLeads = []
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
let listItems = ""
const storedValue = JSON.parse(localStorage.getItem("myLeads"))



if (storedValue) {
    myLeads = storedValue
    render(myLeads)
}

const saveButton = document.getElementById("input-btn").addEventListener("click", () =>{
    myLeads.push(inputEl.value)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))


    render(myLeads)
    inputEl.value = ""
    
    
})

const deleteButton = document.getElementById("delete-btn").addEventListener("dblclick", () =>{

    localStorage.clear()
    myLeads = []
    render(myLeads)
})

const saveTab = document.getElementById("tab-btn").addEventListener("click", () => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })

})

function render(leads){
    listItems = ""
    ulEl.innerHTML = listItems
    for (let i = 0; i < leads.length; i++) {
        listItems += `
        <li>
            <a target='_blank' href='http://${leads[i]}'>
                ${leads[i]}
            </a>
        </li>
        `
     }
     
     ulEl.innerHTML = listItems
}
