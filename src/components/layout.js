import React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header style={{ display: 'flex',  justifyContent: 'center', alignItems: 'center' }} className="global-header">
        {header}
        <a 
          style={{
            width: '120px',
            height: '40px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: '2px solid #005b99',
            borderRadius: '5px',
            color: '#005b99',
            fontWeight: 'bold',
            marginLeft: '10px'
          }} 
          href="https://niosh.vercel.app/"
        >
            Aplicación
        </a>
      </header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}
      </footer>
    </div>
  )
}

export default Layout
