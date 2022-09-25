import React, { useEffect, useState } from "react";
import { firebaseAuth } from "../../config/Firebase";

import Loading from "../../components/Loading";

import GuestUser from "./GuestUser";
import UserLogged from "./UserLogged";

export default function Account(){
    
    const [login , setLogin] = useState(null);
    useEffect(() => {
         
        firebaseAuth.onAuthStateChanged(user => { 
            console.log(user);
            user ? setLogin(true) : setLogin(false);
        });

    }, [])

    if(login == null) return <Loading isVisible = {true} text="cargando usuario..." />
    

    return ( login ? <UserLogged/> : <GuestUser/>);
}