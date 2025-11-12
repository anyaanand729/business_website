//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import logo from '/logo1.png'
import './App.css'
import katseye from '/sophia.webp'

function App() {

  return (
      <>
          <div id="logo">
              <img src={logo}/>
          </div>
          <h1 className="centering">
              “Beauty begins the moment you decide to be yourself.” — Coco Chanel
          </h1>


          <div>
              <h1 className="centering">
                  Our Mission
              </h1>
              At Pure Essence, our mission is to empower every client to look and feel their best by providing
              exceptional beauty services in a welcoming and inspiring environment. We are committed to creativity,
              professionalism, and personalized care, using high-quality products and advanced techniques to enhance
              natural beauty and boost confidence
          </div>

         <div className="boxes">
          <div className="flexItem">
              <h1>
                  The Problem
              </h1>
              <p>Many people struggle to find a beauty salon that provides high quality services in a welcoming
                  environment where they feel seen and valued. </p>
              <p>Our salon combines expertise and personalization for a welcoming, comforting, and supportive
                  environment</p>
          </div>
          <div className="flexItem">
              <h1>
                The Solution
              </h1>
              <p>Our salon provides full service beauty solutions and we focus on personalized experiences </p>
              <p>Our salon gives clients confidence, self-expression, and a sense of well-being by delivering beauty services that consistently look and feel amazing. Every visit leaves clients feeling polished, empowered, and refreshed.</p>
              <p>Unlike other salons, we combine highly skilled professionals, personalized service, and a welcoming, relaxing atmosphere. We focus on understanding each client’s unique style and needs, ensuring that every experience is not just another routine appointment.</p>
          </div>
         </div>


          <div>
              <h1 className="centering">
                  Meet our Customers
              </h1>
              <h2 className="centering">
                  Sophia
              </h2>

              <div id="image">
                  <img src={katseye} height={"300px"}/>
              </div>

              <p>Meet Sophia, a 28-year-old marketing professional living in the busy city. She values self-expression,
                  confidence, and taking time for self-care despite her busy schedule. Sofia enjoys staying on top of
                  beauty
                  trends and appreciates a salon experience that is both relaxing and consistent. She’s social, and
                  motivated by services that make her feel polished and confident for both work and social life
              </p>
          </div>
          <div>
              <h1 className="centering">
              Founder and CEO
              </h1>
              <h2 className="centering">
                  Adamary L.
              </h2>
              As the owner and founder of Pure Essence, Adamary brings a passion for beauty and a commitment to
              excellence to every client experience. With a background in cosmetology, dedicated to empowering clients
              through confidence, style, and upholding her reputation for creating a welcoming space. Adamary ensures
              the salon to keep up with beauty trends and professional technique
          </div>

      </>
  )
}

export default App
