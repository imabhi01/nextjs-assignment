"use client";
import axios from "axios";
import Link from "next/link";
import React, {useState} from "react";
import {useRouter} from "next/navigation";

export default function NavBar() {
    const router = useRouter();
    const logout = async () => {
        try {
            await axios.get('/api/users/logout')
            alert('Logout successful')
            router.push('/login')
        } catch (error:any) {
            console.log(error.message);
        }
    }

    return(
        <> 
        This is NavBar 
        </>
    )
}
