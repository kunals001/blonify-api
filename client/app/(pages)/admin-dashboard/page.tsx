import React from 'react'
import ProtectedAdminRoute from '@/components/AdminProtect'

const page = () => {
  return (
    <ProtectedAdminRoute><div>hello world</div></ProtectedAdminRoute>
    
  )
}

export default page