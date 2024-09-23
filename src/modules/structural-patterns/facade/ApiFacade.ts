interface Post {
  id: number
  title: string
  content: string
}

interface User {
  id: number
  name: string
  email: string
}

const ApiFacade = {
  fetchUser: async (id: number): Promise<User> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id,
          name: "John Doe",
          email: "john.doe@example.com",
        })
      }, 500)
    })
  },

  fetchPosts: async (): Promise<Post[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 1, title: "Post 1", content: "This is the first post" },
          { id: 2, title: "Post 2", content: "This is the second post" },
          { id: 3, title: "Post 3", content: "This is the third post" },
        ])
      }, 500)
    })
  },
}

export default ApiFacade
