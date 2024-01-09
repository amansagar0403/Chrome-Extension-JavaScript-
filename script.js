let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.querySelector("#input-btn")
let ulEl = document.querySelector("#ul-el")
const deleteBtn = document.querySelector("#delete-btn")

const leadsFromLocalStorage =  JSON.parse(localStorage.getItem("myLeads"))
if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    renderLeads();
}

deleteBtn.addEventListener("dbclick", function (){
    localStorage.clear()
    myLeads = []
    renderLeads();
})

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads();
})
function renderLeads(){
    let listItems = ""
    for(let i = 0; i < myLeads.length; i++){
        // listItems += "<li><a href='" + myLeads[i] + "' target='_blank'>" + myLeads[i] + "</a><li>"
        listItems += `
            <li>
                <a href='${myLeads[i]}' target='_blank'>
                    ${myLeads[i]} 
                </a>
            <li>`
        //template strings

        // const li = document.createElement("li")
        // li.textContent = myLeads[i]
        // ulEl.append(li);
    }
    ulEl.innerHTML = listItems
}