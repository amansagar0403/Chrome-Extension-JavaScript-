let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.querySelector("#input-btn")
let ulEl = document.querySelector("#ul-el")

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value);
    console.log(myLeads);
})

for(let i = 0; i < myLeads.length; i++){
    ulEl.innerHTML += "<li>" + myLeads[i] + "</li> "
    // const li = document.createElement("li")
    // li.textContent = myLeads[i]
    // ulEl.append(li);
}