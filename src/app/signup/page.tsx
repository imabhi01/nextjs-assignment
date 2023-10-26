"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import {useRouter} from "next/navigation";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';

export default function SignupPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        username: "",
        email: "",
        password: "",
        confirm_password: ""
    })
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const onSignup = async () => {
        
        if(user.email.length === 0 || user.password.length === 0 || user.username.length === 0 || user.confirm_password.length === 0) {
            toast.error('Please fill all the required fields.');
        }

        try {
            setLoading(true);
            const response = await axios.post("/api/users/signup", user)
            .then((res) => {
                console.log(res);
                console.log(res.data.message);
                toast.success('Sign up Successfully!')
                router.push("/login");
            });
        } catch (error:any) {
            console.log(error.status)
            if(error.code === 'ERR_BAD_RESPONSE'){
                toast.error("Signup failed!");
            };
        }finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if(user.email.length > 0 && user.password.length > 0 && user.username.length > 0 && user.confirm_password.length > 0) {
            setButtonDisabled(false);
        } else {
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
                <h1 className="text-lg text-center mb-4">{loading ? "Processing" : "SIGN UP"}</h1>
                
                <label htmlFor="username">Username</label>
                <input 
                    className="p-2 border border-gray-300 rounded-lg mb-4 text-black"
                    id="username"
                    type="text"
                    value={user.username}
                    onChange={(e) => setUser({...user, username: e.target.value})}
                    placeholder="Username"
                />
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
                <label htmlFor="password">Confirm Password</label>
                <input 
                    className="p-2 border border-gray-300 rounded-lg mb-4 text-black"
                    id="confirm-password"
                    type="password"
                    value={user.confirm_password}
                    onChange={(e) => setUser({...user, confirm_password: e.target.value})}
                    placeholder="Confirm Password"
                />
                <button
                    onClick={onSignup}
                    className="p-2 border border-gray-300 rounded-lg mb-4"
                >{buttonDisabled ? "NO SIGN UP" : "SIGN UP"}
                </button>
                <Link href="/login" className="text-center underline hover:text-gray">VISIT LOGIN PAGE</Link>
            </div>
        </div>
    )

}