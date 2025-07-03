import React from 'react'

const loading = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-yellow-600 border-t-transparent"></div>
    </div>
  )
}

export default loading