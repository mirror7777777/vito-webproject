import React, { Children } from 'react'
import '../index.css'
export default function StyleLayout({children}) {
  return (
    <div className="styleLayout">
        {children}
    </div>
  )
}
