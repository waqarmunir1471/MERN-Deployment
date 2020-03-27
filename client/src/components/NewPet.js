import React, { useState } from 'react';
import { Link,navigate } from '@reach/router';
import Axios from 'axios';

const NewPet = () =>{
    const [PetName, setPetName] = useState();
    const [PetType, setPetType] = useState();
    const [PetDesc, setPetDesc] = useState();
    const [Skill1, setSkill1] = useState();
    const [Skill2, setSkill2] = useState();
    const [Skill3, setSkill3] = useState();
    const [errors, setErrors] = useState();
    const onSubmitHandler =e=>{
        e.preventDefault();
        Axios.post("http://localhost:8000/api/pet/new",{
            PetName,
            PetType,
            PetDesc,
            Skill1,
            Skill2,
            Skill3
        })
        .then(res=>{
            if(res.data.errors){
                const errorResponse = res.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
                console.log(errorArr);
                console.log(res.data.errors);
            }else{
                navigate("/")
            }
        })
        .catch(err=>(console.log(err)))
    }
    return(
        <div className="container col-lg-10">
            <h1>Pet Shelter</h1>
            <h3>Know a Pet Needing Home?</h3>
            <form onSubmit={onSubmitHandler} className="form-group col-lg-6">
            {errors != null ? errors.map(msg=>(<p className="alert alert-danger">{msg}</p>)):null}
                    <p>
                        <label>Pet Name : </label>
                        <input type="text" className="form-control" onChange={(e)=>setPetName(e.target.value)}/>
                    </p>
                    <p>
                        <label>Pet Type : </label>
                        <input type="text" className="form-control" onChange={(e)=>setPetType(e.target.value)}/>
                    </p>
                    <p>
                        <label>Pet Description : </label>
                        <input type="text" className="form-control" onChange={(e)=>setPetDesc(e.target.value)}/>
                    </p>
                    <p>
                        <label>Skill 1 :(Optional) </label>
                        <input type="text" className="form-control" onChange={(e)=>setSkill1(e.target.value)}/>
                    </p>
                    <p>
                        <label>Skill 2 :(Optional) </label>
                        <input type="text" className="form-control" onChange={(e)=>setSkill2(e.target.value)}/>
                    </p>
                    <p>
                        <label>Skill 3 :(Optional) </label>
                        <input type="text" className="form-control" onChange={(e)=>setSkill3(e.target.value)}/>
                    </p>
                    <p>
                        <input type="submit" className="btn btn-success" onChange="Add a Pet"/>
                    </p>
            </form> 
            <Link to="/"><button className="btn btn-primary">Go Back</button></Link>

        </div>
    )
}
export default NewPet;