import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface Blog {
  id: number
  number: number
  body: string
  title: string
  created_at: string

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
  issues: Blog[]
  totalCount: number
}

interface ProfileProviderContext {
  children: ReactNode
}

const endpoint = `https://api.github.com/search/issues?q=%20repo:valmy-ericles/onebitfood`

export const ProfileContext = createContext({} as ProfileContextProps)

export function ProfileProvider({ children }: ProfileProviderContext) {
  const [profiles, setProfiles] = useState({} as Profile )
  const [issues, setIssues] = useState<Blog[]>([])
  const [totalCount, setTotalCount] = useState(0)
  
  async function loadProfile() {
    const response = await api.get(`/users/lucasdmmc`)
    setProfiles(response.data)
  }

  async function loadIssues() {
     const response = await fetch(endpoint)
     const data = await response.json()
      console.log(data)

      const normalizeIssues = data.items.map(((item: Blog) => {
        return {
          id: item.number,
          body: item.body,
          title: item.title,
          created_at: item.created_at
        }
      }))
     setIssues(normalizeIssues)
     setTotalCount(data.total_count)
    //  console.log(normalizeIssues)
   }

  useEffect(() => {
    loadProfile()
    loadIssues()
  }, [])
  return (
    <ProfileContext.Provider value={{ profiles, issues, totalCount }}>

      {children}
    </ProfileContext.Provider>
  )
}

