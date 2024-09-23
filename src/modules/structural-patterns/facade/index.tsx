import React, { useEffect, useState } from "react"

import ApiFacade from "./ApiFacade.ts"

const UserComponent = () => {
  const [user, setUser] = useState<any>(null)
  const [posts, setPosts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const userData = await ApiFacade.fetchUser(1)
      const postsData = await ApiFacade.fetchPosts()

      setUser(userData)
      setPosts(postsData)
      setLoading(false)
    }

    fetchData()
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1>Facade</h1>
      <h4>{user?.name}</h4>
      <p>Email: {user?.email}</p>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h4>{post.title}</h4>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UserComponent
