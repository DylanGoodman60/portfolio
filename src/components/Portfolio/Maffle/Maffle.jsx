import me from "./me.jpeg"

export default function Maffle() {
    return (
        <div className="portfolio-items">
            <div className="company">MAFFLE</div>
            <div className="date">(My Ad FFree LifE) May - August 2021</div>
            <div className="description">Maffle is the quintessential tool for digital human connections. Here is a short description that was given to me to explain Maffle to others: 
                    “Maffle is a software platform that seamlessly integrates 2D with 3D worlds and spaces, and a place to enjoy all-things-digital in complete personal privacy. 
                    Maffle is a lifelong digital assistant to help you every day. Maffle makes you (the individual) the recipient of the value of the digital things you create, 
                    data about you, and the value of your attention. If you wish, Maffle gives you a marketplace to sell them under your own terms and conditions. In the future after 
                    your death, Maffle automatically preserves the knowledge and wisdom you taught to your digital assistant, and shares all of your favorite digital things created 
                    during your lifetime with your children, your family and the world, in accordance with your wishes.” If you would like to learn more, please visit www.Maffle.com
            </div>
            <div className="jobphoto">
                <img src={me} alt="Maffle"/>            
            </div>
        </div>
    )
}