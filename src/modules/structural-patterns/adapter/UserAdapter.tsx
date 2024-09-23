const UserAdapter = (apiData: any) => {
  return {
    name: apiData.full_name,
    email: apiData.contact_email,
  }
}

export default UserAdapter
