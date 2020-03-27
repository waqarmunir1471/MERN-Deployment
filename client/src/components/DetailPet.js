import React, { useEffect,useState } from 'react';
import {Link, navigate} from '@reach/router';
import Axios from 'axios';
const DetailPet = (props) =>{
    const [PetName, setPetName] = useState('');
    const [PetType, setPetType] = useState("");
    const [PetDesc, setPetDesc] = useState("");
    const [Skill1, setSkill1] = useState("");
    const [Skill2, setSkill2] = useState("");
    const [Skill3, setSkill3] = useState("");
    useEffect(()=>{
        Axios.get("http://localhost:8000/api/details/"+ props.id)
        .then(res=>{
            setPetName(res.data.PetName)
            setPetType(res.data.PetType)
            setPetDesc(res.data.PetDesc)
            setSkill1(res.data.Skill1)
            setSkill2(res.data.Skill2)
            setSkill3(res.data.Skill3)
        })

    },[])
    const delPet=e=>{
        Axios.delete("http://localhost:8000/api/delpet/"+props.id)
        .then(res=>{console.log(res.data)
            navigate("/")
        })
    }
    return (
        <div className="container col-lg-10">
            <h1>Pet Shelter</h1>
            <h1>Details about : {PetName}</h1>
            <Link to="/"><button className="btn btn-primary">Back to Home</button></Link>

            <Link to={"/delpet/"+ props.id}><button onClick={delPet}className="btn btn-danger">Adapt {PetName}</button></Link>
            <table className="table table-striped table-bordered col-lg-8">
                <thead>
                    <th>Pet Type</th>
                    <th>Pet Description</th>
                    <th>Skills</th>
                </thead>
                <tbody>
                    <tr>
                        <td>{PetType}</td>
                        <td>{PetDesc}</td>
                        <td>
                            <ul>
                                <li>{Skill1}</li>
                                <li>{Skill2}</li>
                                <li>{Skill3}</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default DetailPet;