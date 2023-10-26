'use client'
import axios from 'axios'
import {useRouter} from "next/navigation"; 
import toast from 'react-hot-toast'

export default function Logout(){
    const router = useRouter()
    function logout(){
        try {
            axios.get('/api/users/logout').then(async() => {
                toast.success('Successfully logged out!')
                router.push('/login');
            });
        } catch (error:any) {
            toast.error(error.message);
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