import { useState, useEffect } from 'react'
import heroImage from '../assets/HeroImage/hero.avif'
import image1 from '../assets/HomeImage/image1.avif'
import image2 from '../assets/HomeImage/image2.avif'
import image3 from '../assets/HomeImage/image3.avif'
import image4 from '../assets/HomeImage/image4.avif'
import image5 from '../assets/HomeImage/image5.jpg'
import image6 from '../assets/HomeImage/image6.avif'
import image7 from '../assets/HomeImage/image7.avif'
import image8 from '../assets/HomeImage/image8.avif'
import image9 from '../assets/HomeImage/image9.avif'
import image10 from '../assets/HomeImage/image10.avif' 
import profile from '../assets/HomeImage/profile.avif'


function Stanford() {
  const [isScrolling, setIsScrolling] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  
  const academicsData = [
  {
    id: 1,
    img: image7,
    title: "Undergraduate Education",
    desc: "Rich learning experiences that provide a broad liberal arts foundation and deep subject-area expertise",
    linkText: "Undergraduate Education >"
  },
  {
    id: 2,
    img: image8,
    title: "Graduate Education",
    desc: "Unsurpassed opportunities to participate in the advancement of entire fields of knowledge",
    linkText: "Graduate Education >"
  },
  {
    id: 3,
    img: image9,
    title: "Lifelong Learning",
    desc: "Continuing adult education, executive and professional programs, and programs for K-12 students",
    linkText: "Lifelong Learning >"
  }
];

 const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
 

  const StatItem = ({ number, label }) => (
  <div className="stat-item">
    <div className="stat-number">{number}</div>
    <div className="stat-label">{label}</div>
  </div>
);
  

  return (
    <div className="stanfordPage">

      <header className="stanfordHeader" aria-label="Stanford header">
        <div className="stanfordHeaderTop">
          <div className="stanfordBrand">Stanford University</div>
          <nav className="stanfordTopNav" aria-label="Information for">
            <span className="stanfordTopLabel">Information for:</span>
            <a href="#" className="stanfordTopLink">
              Students
            </a>
            <a href="#" className="stanfordTopLink">
              Faculty &amp; Staff
            </a>
            <a href="#" className="stanfordTopLink">
              Families
            </a>
            <a href="#" className="stanfordTopLink">
              Visitors
            </a>
            <a href="#" className="stanfordTopLink">
              Alumni
            </a>
            <button className="stanfordSearch" type="button" aria-label="Search">
              Search
            </button>
          </nav>
        </div>

        <nav className="stanfordMainNav" aria-label="Primary">
          <a href="#" className="stanfordMainLink">
            Academics
          </a>
          <a href="#" className="stanfordMainLink">
            Research
          </a>
          <a href="#" className="stanfordMainLink">
            Health Care
          </a>
          <a href="#" className="stanfordMainLink">
            Campus Life
          </a>
          <a href="#" className="stanfordMainLink">
            Athletics
          </a>
          <a href="#" className="stanfordMainLink">
            Admission
          </a>
          <a href="#" className="stanfordMainLink">
            About
          </a>
          <a href="#" className="stanfordMainLink">
            News
          </a>
          <a href="#" className="stanfordMainLink">
            Events
          </a>
        </nav>
      </header>

      <section
        className="stanfordHero"
        aria-label="Stanford hero"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="stanfordHeroOverlay" aria-hidden="true" />
        <div className="stanfordHeroInner">
          <h1 className="stanfordHeroTitle">Stanford</h1>
        </div>
        
       <div className={`stanfordExplore ${isScrolling ? 'hidden' : ''}`} role="button" tabIndex={0}>
        <span>Explore Stanford</span>
        <span className="stanfordChevron" aria-hidden="true">
          ▾
        </span>
      </div>
      </section>


      <main className="stanfordContent" aria-label="Page content">
        <div className="stanfordContainer">
          <h2>A Mission Defined by Possibility</h2>
          <p>
            At Stanford, our mission of discovery and learning is energized by a spirit of optimism and possibility that dates to our founding. Here you’ll find a place of intellectual expansiveness, wide-ranging perspectives, and freedom to explore new lines of thinking. Buzzing with ideas and innovation, approaching questions with openness and curiosity, pursuing excellence in all we do – this is Stanford.
          </p>
          <button>More About Standford</button>
          
        </div>
      </main>


      <section className="campus-news">
        <div className="campus-news-header">
           <h2>Campus News</h2>
           <p>Stories about people, research, and innovation across the Farm</p>
        </div> 

          <div className='campus-image'>
            <div className='campus-image-item'>
               <img src={image2} alt="Campus news 1"  />
               <div className='campus-text-overlay'>
                 <h1>IN THE SPOTLIGHT</h1>
                 <h3>Why research matters</h3>
               </div>
            </div>

           <div className="card-container">
             <img src={image1} alt="Social Scientists" className="card-image"/>
      
               <div className="card-body">
                 <span className="card-category">SOCIAL SCIENCES</span>
                 <h3 className="card-title">Social scientists embrace the AI moment</h3>
               </div>
             </div>

             <div className="card-container">
             <img src={image4} alt="Social Scientists" className="card-image"/>
      
               <div className="card-body">
                 <span className="card-category">Earth & Climate</span>
                 <h3 className="card-title">Tagged tunas reveal keys to Atlantic bluefin recovery</h3>
               </div>
             </div>
            </div>
           

           <div className='campus-img'>
            

           <div className="card-container">
             <img src={image5} alt="Social Scientists" className="card-image"/>
      
               <div className="card-body">
                 <span className="card-category">ARTIFICIAL INTELLIGENCE</span>
                 <h3 className="card-title">An AI health coach could change your mindset</h3>
               </div>
             </div>

             <div className="card-container">
             <img src={image3} alt="Social Scientists" className="card-image"/>
      
               <div className="card-body">
                 <span className="card-category">HEALTH & MEDICINE</span>
                 <h3 className="card-title">Stanford Health Care invests in Hope Lodge for cancer patients</h3>
               </div>
             </div>

             <div className='campus-image-item'>
               <img src={image6} alt="Campus news 1"  />
               <div className='campus-text-overlay'>
                 <h1>IN THE SPOTLIGHT</h1>
                 <h3>Why research matters</h3>
               </div>
              </div>
            </div>



             <div className='campus-button'>
               <button>More campus news</button>
             </div>
          
           </section>
        

        <section className="academics-container">
      {/* Heading Section */}
      <div className="header">
        <h1>Academics</h1>
        <p>Preparing students to make meaningful contributions to society as engaged citizens and leaders in a complex world</p>
      </div>

      {/* Cards Grid */}
      <div className="cards-grid">
        {academicsData.map((item) => (
          <div key={item.id} className="card">
            <img src={item.img} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <a href="#" className="card-link">{item.linkText}</a>
          </div>
        ))}
      </div>

      <div className="schools-container">
      <h2 className="section-title">Seven schools in which to pursue your passions</h2>
      
      <div className="schools-nav">
        <a href="#" className="school-link">Medicine</a>
        <span className="separator">|</span>
        <a href="#" className="school-link">Law</a>
        <span className="separator">|</span>
        <a href="#" className="school-link">Humanities & Sciences</a>
        <span className="separator">|</span>
        <a href="#" className="school-link">Engineering</a>
        <span className="separator">|</span>
        <a href="#" className="school-link">Education</a>
        <span className="separator">|</span>
        <a href="#" className="school-link">Sustainability</a>
        <span className="separator">|</span>
        <a href="#" className="school-link">Business</a>
      </div>

      <button className="academics-btn">More about academics</button>
    </div>
    </section>

    <section className={`hero ${scrolled ? "scrolled" : ""}`}>
        <div className="overlay-content">
          <img
            src={profile}
            alt="Profile"
            className="profile"
          />

          <h2>
            “The truly impactful technologies are always based on the
            condition that you can freely explore.”
          </h2>

          <h4>Renee Zhao</h4>
          <p>Assistant Professor of Mechanical Engineering</p>

          <a href="/">Read more →</a>
        </div>
      </section>

      <div className="dummy-scroll">
        Scroll Down
      </div>


      <section className="research-section">
      <h2>Research</h2>
      <p className="research-desc">Driving discoveries vital to our world, our health, and our intellectual life</p>
      
      <hr className="divider" />

      <div className="stats-grid">
        <StatItem number="6,699" label="Inventions created by federally funded Stanford research" />
        <StatItem number="3,029" label="U.S. patents based on federally funded Stanford research" />
        <StatItem number="400+" label="Start-up companies founded based on federally funded research at Stanford" />
        <StatItem number="350,000+" label="Jobs created by companies that started with federally funded Stanford research" />
        <StatItem number="$94 billion" label="Private investment in start-up companies that grew out of federally funded Stanford research" />
        <StatItem number="$11+ trillion" label="Market value of the top 30 companies founded by Stanford alumni" />
      </div>

      <hr className="divider" />

      <button className="research-btn">More about research</button>
    </section>
      
    </div>


     
  )
}

export default Stanford
