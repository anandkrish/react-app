import React, { useEffect, useState } from "react";
import {getUsers} from "../api/usersAPi";

const Users = () => {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        let url = 'users?page=2';
        getUsers(url).then(resp =>{
            setUserData(resp.data.data)
           // console.log(resp);
        }).catch(error => {
            console.log(error);
        })
    },[]);

    handleDetailsClick(user) {

    }

   return (
       <div>
           <h2>List of users</h2>
           {userData && userData.length > 0 && userData.map((user) => {
               return (
                   <div>
                     <span>{user.email}</span>
                     <span>{user.first_name}</span>
                     <a href="#" onClick={this.handleDetailsClick}>User details</a>
                     </div>
           );
        })}
       </div>
   );

}

export default Users;