"use client";
import Link from "next/link";
import React, {useEffect} from "react";
import {useRouter} from "next/navigation";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';

export default function LoginPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
       
    })
    
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const onLogin = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/login", user)
            .then(() => {
                toast.success('Logged in Successfully!')
                router.push("/");
            });
        } catch (error:any) {
            toast.success('Logged failed!' + error.message);
        } finally{
            setLoading(false);
        }
    }

    useEffect(() => {
        if(user.email.length > 0 && user.password.length > 0) {
            setButtonDisabled(false);
        } else{
            setButtonDisabled(true);
        }
    }, [user]);

    return (
        <div className="w-full h-screen flex justify-center items-center">
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div className="w-1/3 p-4 flex flex-col bg-white rounded-md shadow-md px-10 py-10 m-10">
                <h1 className="text-lg text-center mb-4">{loading ? "Processing" : "LOGIN"}</h1>
                
                <label htmlFor="email">Email</label>
                <input 
                className="p-2 border border-gray-300 rounded-lg mb-4 text-black"
                    id="email"
                    type="text"
                    value={user.email}
                    onChange={(e) => setUser({...user, email: e.target.value})}
                    placeholder="Email"
                    />
                <label htmlFor="password">Password</label>
                <input 
                className="p-2 border border-gray-300 rounded-lg mb-4 text-black"
                    id="password"
                    type="password"
                    value={user.password}
                    onChange={(e) => setUser({...user, password: e.target.value})}
                    placeholder="Password"
                    />
                    <button
                    onClick={onLogin}
                    className="p-2 border border-gray-300 rounded-lg mb-4">SIGN IN</button>
                    <Link href="/signup" className="text-center underline hover:text-gray">VISIT SIGN UP PAGE</Link>    
            </div>        
            
        </div>
    )

}