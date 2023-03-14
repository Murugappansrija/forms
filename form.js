const headings = ['First Name', 'Gender', 'Address', 'Pincode','State','Country','Favourite Food'];
const table = document.createElement('table');
const tablehead = document.createElement('thead');
const tablebody = document.createElement('tbody');
const tdr = document.createElement('td')


function heading(data = []) {
   const titletag= [];
   for(let i = 0; i < data.length; i++) {
      const headingTag = document.createElement('td');
      headingTag.innerText = headings[i];
      titletag.push(headingTag)
   }
   return titletag;
}
const order ={}

function newrow(data = {}) {
   const tableRow = document.createElement('tr');
   const values = Object.values(data);
   for(let i = 0; i < values.length; i++) {
      const tableCell = document.createElement('td');
      tableCell.innerText = values[i];
      tableRow.append(tableCell);
   }
   return tableRow;
}
tablebody.append(newrow({

}))
function newrows(data = []) {
   let rows = [];
   if(data.length > 0) {
     for(let i = 0; i < data.length; i++) {
        const item = newrow(data[i]);
        rows.push(item);
     }
   }
   return rows;
}

function handeleinput(e){
   if(e.type === "radio"){
      order[e.name] = e.id

   }
   if(e.type === "text"){
      order[e.id] = e.value
   }
   
   console.log(order)

}
let  dataarr =[]
function submit(){
   if(Object.values(order).length){
      dataarr.push(order)
   }
   else{
      alert("invalid form")
   }
  
   Added(dataarr)
}
function Added(data=[]){
   table.innerHTML =""
   tablebody.append(...newrows(dataarr))
   document.body.append(table)

}

Added(dataarr)

tablehead.append(...heading(headings));
table.append(tablebody)
table.appendChild(tablehead)



