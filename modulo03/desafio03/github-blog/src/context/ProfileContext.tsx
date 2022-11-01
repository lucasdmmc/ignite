import { createContext, ReactNode, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api, apiIssues } from "../lib/axios";

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
  loadIssues: (query?: string) => Promise<void>
}

interface ProfileProviderContext {
  children: ReactNode
}



export const ProfileContext = createContext({} as ProfileContextProps)

export function ProfileProvider({ children }: ProfileProviderContext) {
  const [profiles, setProfiles] = useState({} as Profile )
  const [issues, setIssues] = useState<Blog[]>([])
  const [totalCount, setTotalCount] = useState(0)

  const {id} = useParams()

  // const endpoint = `https://api.github.com/search/issues?q=user:lucasdmmc%20repo:lucasdmmc/IGNITE`

  async function loadProfile() {
    const response = await api.get(`/users/lucasdmmc`)
    setProfiles(response.data)
  }

  async function loadIssues(query?: string) {
  const response = await apiIssues.get("search/issues?q=repo:lucasdmmc/IGNITE", {
    params: {
      q: query
    }
  })
  console.log(response)
  
    const normalizeIssues = response.data.items.map(((item: Blog) => {
      return {
        id: item.number,
        body: item.body,
        title: item.title,
        created_at: item.created_at
      }
    }))
    setIssues(normalizeIssues)
    setTotalCount(response.data.total_count)
   }

  useEffect(() => {
    loadProfile()
    loadIssues()
  }, [])
  return (
    <ProfileContext.Provider value={{ profiles, issues, totalCount, loadIssues }}>

      {children}
    </ProfileContext.Provider>
  )
}

