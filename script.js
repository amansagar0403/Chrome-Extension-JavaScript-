let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.querySelector("#input-btn")
let ulEl = document.querySelector("#ul-el")
const deleteBtn = document.querySelector("#delete-btn")
let tabBtn = document.getElementById("tab-btn")

const leadsFromLocalStorage =  JSON.parse(localStorage.getItem("myLeads"))
if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads);
}

tabBtn.addEventListener("click",function(){
    chrome.tabs.query({action:true,currentWindow:true},function(tabs){
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads);
    })

})

deleteBtn.addEventListener("dblclick", function (){
    localStorage.clear()
    myLeads = []
    render(myLeads);
})

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads);
})
function render(leads){
    let listItems = ""
    for(let i = 0; i < myLeads.length; i++){
        // listItems += "<li><a href='" + myLeads[i] + "' target='_blank'>" + myLeads[i] + "</a><li>"
        listItems += `
            <li>
                <a href='${leads[i]}' target='_blank'>
                    ${leads[i]} 
                </a>
            <li>`
        //template strings

        // const li = document.createElement("li")
        // li.textContent = myLeads[i]
        // ulEl.append(li);
    }
    ulEl.innerHTML = listItems
}