import React from 'react'
import iraitchiLogo from '../assets/iraitchi.png'

export default function Home() {
  return (
    <>
        <header>
            <img className="headerLogo" src={iraitchiLogo} alt="Iraitchi Logo" />
        </header>
        <main>
            <section>
            <h1>🙏🏼 Thanks For, You Are Here...!</h1>
            <p>This website is belongs to <b>"IRAITCHI FOODS PRIVATE LIMITED"</b>.
                We are glad to inform you that this website is going to launch soon...! to provide solutions for everyone's buying raw meats( mutton, seafoods, etc...!)
            </p>

            <div id="container">
                <h1 className='goldFont'> Comming Soon </h1>
                <div id="flip">
                    <div><div>Budget Friendly</div></div>
                    <div><div>Premium Quality</div></div>
                    <div><div>On-Time Delivery</div></div>
                </div>
            </div>
            </section>

            <footer>
                <div className="melting-text-container">
                    <h1 className="melting-text">Contact Us: <a href="tel:+919444626409"></a>+91-9444626409</h1>
                </div>
            </footer>
        </main>
    </>
  )
}
