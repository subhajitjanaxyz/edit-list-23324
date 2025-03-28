// import { useState } from "react"
import { useState } from "react";
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { edit } from "./store/dataSlice";

export const Edit=()=>{
    const [fromstate,setfromstate]=useState(false)
    const dispatch=useDispatch();
    const dataformStore=useSelector((state)=>state.product.products)
    const [dataFrom,setdataFrom]=useState({
        title:"",
        description:"",
        brand:""
    })
 
    
   const handleOnchane=(e)=>{
          const value=e.target.value;
          const key=e.target.name

        console.log(key);
        setdataFrom((prev)=>({...prev,[key]:value}))
        

   }
const handleEdit=(data)=>{
    setdataFrom(data);
    setfromstate(true)
    

}
   const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(edit(dataFrom))
    setdataFrom({
        title:"",
        description:"",
        brand:""
    })
    setfromstate(false)
   }
    
    return (
        <>
      {fromstate &&  <form action="" onSubmit={handleSubmit} className="bg-primary">
        <p>title</p>
        <input type="text" name="title" onChange={handleOnchane}  value={dataFrom.title}/>
        <p>description</p>
        <input type="text" name="description" onChange={handleOnchane} value={dataFrom.description}/>
        <p>brand</p>
        <input type="text" name="brand" onChange={handleOnchane} value={dataFrom.brand} />
        <button type="submit">submit</button>
       </form> }
        {
      


            dataformStore.map((data)=>{
               return <div className="" key={data.id}>
                    <h1 className="">{data.title}</h1>
                    <div className="">{data.description}</div>
                    <div className="">${data.description}</div>
                    <div className="">{data.brand}</div>
                    <button onClick={()=>{handleEdit(data)}}>edit</button>
                </div>

            })
        }
        </>
    )
}