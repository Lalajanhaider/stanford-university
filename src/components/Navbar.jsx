import React from 'react'
import { useEffect, useState } from "react";







function Navbar() {

    const [scrolled,setScrolled]=useState(false);

useEffect(()=>{

const handleScroll=()=>{
if(window.scrollY > 120){
setScrolled(true)
}else{
setScrolled(false)
}
}

window.addEventListener('scroll',handleScroll);

return ()=> window.removeEventListener('scroll',handleScroll)

},[])


  return (
    <>

{/* Scroll Navbar */}
<header className={scrolled ? "stanford-navbar show" : "stanford-navbar"}>

<div className="top-strip">
<div className="brand">Stanford University</div>

<ul>
<li>Students</li>
<li>Faculty & Staff</li>
<li>Families</li>
<li>Visitors</li>
<li>Alumni</li>
<li>Search</li>
</ul>
</div>

<div className="main-nav">
<a href="#">Academics</a>
<a href="#">Research</a>
<a href="#">Health Care</a>
<a href="#">Campus Life</a>
<a href="#">Athletics</a>
<a href="#">Admission</a>
<a href="#">About</a>
<a href="#">News</a>
<a href="#">Events</a>
</div>

</header>

</>
  )
}

export default Navbar
