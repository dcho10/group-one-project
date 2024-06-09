import {Link} from "react-router-dom"

import "./Home.css"

export default function Home() {
  return (
    <>
    <section className="home-content">
      <h1> Welcome! </h1>
      <p><a href="/login"> Login </a> or <a href="/signup"> signup</a> to get started!</p>
    </section>
    </>
  )
}
