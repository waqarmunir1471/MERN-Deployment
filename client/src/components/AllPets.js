import React, { useState ,useEffect} from 'react';
import { Link } from '@reach/router';
import axios from'axios';

const AllPets = ()=>{
    const [pets,setAllPets] = useState()
    const fetchAllPets=()=>{
        axios.get("http://localhost:8000/api/allpets")
        .then(res=>{
            setAllPets(res.data.Pets)
            console.log(res.data.Pets)
        })
    }
    useEffect(()=>{
       fetchAllPets();
    },[])
    
    return(

        <div className="container col-lg-8">
            <navbar>
            <Link to="/pet/new"><button className="btn btn-info"> Add a Pet to the Shelter</button></Link>
            </navbar>
            <h1>Pet Shelter</h1>
            <h3>These Pet are Looking for good home</h3>
            <table className="table table-striped table-bordered">
                <thead className="thead thead-dark">
                    <th>Name</th>
                    <th>Type</th>
                    <th>Action</th>
                </thead>
                <tbody>
                { pets ? pets.map(Pet=>(
                        <tr>
                    <td>{Pet.PetName}</td>
                        <td>{Pet.PetType}</td>
                        <td>
                            <Link to={"/details/"+Pet._id}><button className="btn btn-info">Details</button></Link>
                            <Link to={"/update/"+Pet._id}><button className="btn btn-warning">Edit</button></Link>
                        </td>
                    </tr>
                    )):null}
                   
                </tbody>
            </table>
        </div>
    )
}
export default AllPets;