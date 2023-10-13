"use client";
import axios from "axios";
import Link from "next/link";
import React, {useState} from "react";
import {useRouter} from "next/navigation";
import NavBar from '@/components/Navbar/NavBar'
import SideBar from '@/components/Sidebar/SideBar'
import Footer from '@/components/Footer/Footer'

export default function Home() {
  const router = useRouter()
  const logout = async () => {
    try {
      await axios.get('/api/users/logout')
      alert('Logout successful')
      router.push('/login')
    } catch (error:any) {
      console.log(error.message);
    }
  }

  return (
    <div>
      <NavBar></NavBar>
      <SideBar></SideBar>
      <Footer></Footer>
      <p>Content</p>
      <p>Footer</p>
      <button
        onClick={logout}
        className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >Logout</button>
    </div>
  )
}
