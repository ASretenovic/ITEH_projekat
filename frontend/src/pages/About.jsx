import React from "react"
import image1 from "../assets/images/image1.png"
import image2 from "../assets/images/image2.png"
import "../styles/about.css"

export const About = () => {
    return(
    <div className="all-about">
        
        <section className="about">
            <div className="row1">
                <div className="about-col">
                <h1>O nama</h1>
                <br />

                <p>Naša turistička agencija <b>"Odisej"</b> osnovana je 2015. godine u Valjevu. <br /> U prethodnih 
                8 godina uspešno smo realizovali preko 2 hiljada putovanja <br /> i brojimo preko hiljadu zadovoljnih korisnika.
                Već 8 godina smo inspirisani <br /> vašim zadovoljstvom i osmehom svakog zadovoljnog korisnika. <br /> 
                Zahvaljujući marljivom i posvećenom radu danas, osim u Valjevu, <br /> poslujemo u još 4 grada: 
                Novom Sadu, Beogradu, Kragujevcu i Nišu. <br /> Odlučni smo u želji da svoje dalje poslovanje nastavimo <br /> 
                da širimo na teritoriji Srbije. Svakodnevno smišljamo nove destinacije <br /> i omogućimo vam najbolju ponudu.
                </p>
                </div>
                
                <div className="about-img">
                <img src={image1} alt="aboutImage1"></img>
                </div>
               
            </div>
        </section>

        <hr />

        <section className="about1">
            <div className="row2">
                <div className="about-img1">
                    <img src={image2} alt="aboutImage2"></img>
                </div>

                <div className="about-col1">
                <h3>Misija i vizija</h3>
                <p>Misija nam je da naša putovanja postanu sinonim za uživanje i zadovoljstvo. <br />
                Putujemo širom sveta: Tajland, Japan, Pariz, London... Obiđite sa nama Koloseum, <br />
                Partenon, Tadž Mahal, Kineski zid i druge svetske znamenitosti. Želja nam je <br />
                da naša agencija bude nezaobilazni izbor pri svakom putovanju. <br />
                <b>„Proputujte svet sa nama“</b>  je naša vizija i obećavamo da ćemo svakodnevno <br />
                raditi na tome i pomerati sopstvene granice. Pozivamo vas da postanete deo <br /> našeg  sveta  i 
                pridružite nam se na putovanju ka sreći!
            
                </p>
                </div>
            </div>
        </section>
    </div>
   )
}

export default About
