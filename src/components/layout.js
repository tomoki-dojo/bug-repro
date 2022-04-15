import React from 'react'

const Layout = ({ location, title, children }) => {

  
  return (
    <div>
      <main>
        <div>
          {children}
        </div>
      </main>
    </div>
  )
}

export default Layout
