"use client";
import Link from "next/link";
import React, {useState} from "react";
import SideBar from '@/components/Sidebar/SideBar'
import Content from '@/components/Content/Content'
import Header from '@/components/Header/Header'
import toast, { Toaster } from 'react-hot-toast';

export default function Home() {
  return (
    <div>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <Header></Header>
      <div className="w-full bg-gray">
        <div className="grid">
          <div className="flex">
            <SideBar></SideBar>
            <Content></Content>
          </div>
        </div>
      </div>
    </div>
  )
}
