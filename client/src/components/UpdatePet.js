import React,{useState,useEffect} from 'react';
import Axios from 'axios';
import {Link,navigate} from '@reach/router';

const UpdatePet = (props)=>{
    const [PetName, setPetName] = useState("");
    const [PetType, setPetType] = useState("");
    const [PetDesc, setPetDesc] = useState("");
    const [Skill1, setSkill1] = useState("");
    const [Skill2, setSkill2] = useState("");
    const [Skill3, setSkill3] = useState("");
    const [errors, setErrors] = useState();
    const [loaded, setLoaded] = useState( false)

    useEffect(() => {
        Axios.get("http://localhost:8000/api/details/" + props.id)
            .then(res => {
                setPetName(res.data.PetName)
                setPetType(res.data.PetType)
                setPetDesc(res.data.PetDesc)
                setSkill1(res.data.Skill1)
                setSkill2(res.data.Skill2)
                setSkill3(res.data.setSkill3)
            setLoaded(true);

            console.log(res.data.errors)
            // setLoaded(true);
        })},[])
    const onSubmitHandler =e=>{
        e.preventDefault();
        Axios.put("http://localhost:8000/api/update/"+props.id,{
            PetName,
            PetDesc,
            PetType,
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
    }
    return(
        
        <div className="container col-lg-8">

            <h1>Pet Shelter </h1>
            <h3>Edit {PetName} </h3>
            <form onSubmit={onSubmitHandler} className="form-group col-lg-6">
            {errors != null ? errors.map(msg=>(<p className="alert alert-danger">{msg}</p>)):null}

                    <p>
                        <label>Pet Name : </label>
                        <input type="text" className="form-control"  value={PetName} onChange={(e)=>setPetName(e.target.value)}/>
                    </p>
                    <p>
                        <label>Pet Type : </label>
                        <input type="text" className="form-control" value={PetType} onChange={(e)=>setPetType(e.target.value)}/>
                    </p>
                    <p>
                        <label>Pet Description : </label>
                        <input type="text" className="form-control" value={PetDesc} onChange={(e)=>setPetDesc(e.target.value)}/>
                    </p>
                    <p>
                        <label>Skill 1 :(Optional) </label>
                        <input type="text" className="form-control" value={Skill1}onChange={(e)=>setSkill1(e.target.value)}/>
                    </p>
                    <p>
                        <label>Skill 2 :(Optional) </label>
                        <input type="text" className="form-control" value={Skill2} onChange={(e)=>setSkill2(e.target.value)}/>
                    </p>
                    <p>
                        <label>Skill 3 :(Optional) </label>
                        <input type="text" className="form-control"value={Skill3} onChange={(e)=>setSkill3(e.target.value)}/>
                    </p>
                    <p>
                        <input type="submit" className="btn btn-success" onChange="Add a Pet"/>
                    </p>
            </form>
            <Link to="/"><button className="btn btn-primary">Go Back</button></Link>
        </div>
    )
}

export default UpdatePet;