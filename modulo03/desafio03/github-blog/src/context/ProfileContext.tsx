import { createContext, ReactNode, useEffect, useState } from "react";
import { api, apiIssues } from "../lib/axios";

interface Blog {
  id: number
  body: string
  title: string
  total_count: number
}

interface Profile {
  login: string
  name: string
  bio: string
  avatar_url: string
  followers: string
}

interface ProfileContextProps {
  profiles: Profile
  issues: Blog
}

interface ProfileProviderContext {
  children: ReactNode
}

const endpoint = `https://api.github.com/search/issues?q=%20repo:lucasdmmc/IGNITE`

export const ProfileContext = createContext({} as ProfileContextProps)

export function ProfileProvider({ children }: ProfileProviderContext) {
  const [profiles, setProfiles] = useState({} as Profile )
  const [issues, setIssues] = useState({} as Blog)
  console.log(issues)
  
  async function loadProfile() {
    const response = await api.get(`/users/lucasdmmc`)
    setProfiles(response.data)
  }

  async function loadIssues() {
     const response = await fetch(endpoint)
     const data = await response.json()
    
     setIssues(data)
   }

  useEffect(() => {
    loadProfile()
    loadIssues()
  }, [])
  return (
    <ProfileContext.Provider value={{ profiles, issues }}>

      {children}
    </ProfileContext.Provider>
  )
}

