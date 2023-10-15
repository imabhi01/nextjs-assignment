'use client'
import axios from 'axios'
import {useRouter} from "next/navigation"; 

export default function Logout(){
    const router = useRouter()
    function logout(){
        try {
            axios.get('/api/users/logout')
            alert('Logout successful')
            router.push('/login')
        } catch (error:any) {
            console.log(error.message);
        }
    }

    return(
        <> 
            <button 
                onClick={() => logout()}
                className="px-2 py-2 border-none rounded-md button-color text-white text-sm"
            >
                Logout
            </button>
        </>
    )
}