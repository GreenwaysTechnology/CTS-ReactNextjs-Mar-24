'use client'

import { useRouter } from "next/navigation"


export default function DashBoardNavigator() {
    const router = useRouter()
    return <>
        <h1>Dashboard</h1>
        <button onClick={() => {
            router.push('/dashboard')
        }}>Dashboard</button>
    </>
}