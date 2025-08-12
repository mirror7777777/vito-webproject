import React, { use } from 'react'
import { useRouteError } from 'react-router-dom'

export default function Error() {
  const Error = useRouteError
  return (
    <div>
        {/* <h1>404 Error</h1>
        <p>Page Not Found</p>
        <p>Sorry, the page you are looking for does not exist.</p>
        <a href="/">Go back to Home</a> */}
      
    </div>
  )
}
