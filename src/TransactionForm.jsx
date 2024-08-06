import { useState } from "react"


export default function TransactionForm({dataFromChild}) {
const[formData,setFormData]=useState({
    id:"",
    category:"",
    date:"",
    amount:"",
    description:""
})

function onChange(e){
    const {name, value}=e.target;
    setFormData(prevFormData=>({
        ...prevFormData,
        [name]:value
    }));
}


function onSubmit(e){
    e.preventDefault();

    dataFromChild(formData)

}


    return (
        <>
        <form onSubmit={onSubmit} className="w3-container w3-">
            <label>Id</label>
            <input className="w3-input w3-border" type="number" onChange={onChange} name="id" value={formData.id}></input>

   <label>Category</label>
   <input className="w3-input w3-border" type="text " onChange={onChange} name="category"  value={formData.category} ></input>
 
   <label>Date</label>
   <input className="w3-input w3-border" type="date" onChange={onChange} name="date"  value={formData.date}></input>

   <label>Amount</label>
   <input className="w3-input w3-border" type="number" onChange={onChange} name="amount" value={formData.amount}></input>

   <label>Description</label>
   <input className="w3-input w3-border" type="text" onChange={onChange} name="description" value={formData.description}></input>

   <button className="w3-button w3-red"type="submit">Submit</button>

    </form>
        </>
    )
}