import maffleLogo from "./companylogo.png"
import loginScreen from "./keyboard.jpg"
export default function Maffle() {
    return (
        <div className="portfolio-items">
            <div className="company">MAFFLE</div>
            <div className="date">(My Ad FFree LifE)</div>
            <div className="date">Software Developer</div>
            <div className="date"><i>May - August 2021</i></div>
            <div className="description">Maffle is the quintessential tool for digital human connections. Here is a short description that was given to me to explain Maffle to others: 
                    “Maffle is a software platform that seamlessly integrates 2D with 3D worlds and spaces, and a place to enjoy all-things-digital in complete personal privacy. 
                    Maffle is a lifelong digital assistant to help you every day. Maffle makes you (the individual) the recipient of the value of the digital things you create, 
                    data about you, and the value of your attention. If you wish, Maffle gives you a marketplace to sell them under your own terms and conditions. In the future after 
                    your death, Maffle automatically preserves the knowledge and wisdom you taught to your digital assistant, and shares all of your favorite digital things created 
                    during your lifetime with your children, your family and the world, in accordance with your wishes.” If you would like to learn more, please visit www.Maffle.com
            </div>
            {/* <div className="jobphoto"> */}
                <img src={maffleLogo} alt="Maffle"/>            
            {/* </div> */}
            <div className="portfolio-header">Job Description</div>
            <div className="jobphoto">
                <img src={loginScreen} alt="Maffle"/>                        
            </div>
            <div className="description">As a software developer at Maffle, I was responsible for writing, testing and implementing many features included in the Maffle desktop application. 
            I worked closely with my boss and CEO Tim to introduce new features, improve old ones, investigate technology or simply change the interface to be more user-friendly.
            At first, I focused on learning how to develop in a new environment and language while adhering to the company style guide. Once I felt up to speed, Tim started giving me 
            features to implement. This included things like working with custom network protocols, integrating C libraries of audio and video codecs, designing interfaces, working with 
            cryptography and security or simply adding new features. My background in computer science was the core of everything I did at Maffle and I was constantly trying to improve my 
            skills. Maffle’s architecture already had high standards in efficiency, style and readability so I had to learn as much as possible to match those standards.
            </div>
            <div className="portfolio-header">The ethics of Maffle</div>
            <div className="description">Developing and using Maffle was a refreshing experience, given how the majority of social media I use operates. Where social media tries to make money by maximizing time spent on addicting software to facilitate ad-clicks, Maffle works with your time and attention to give real value. It is up to the user to decide what they want to do with Maffle, and they can do it without distraction. As my boss would often remind me, we want to utilize productive technology without the parts that waste our lives. For every feature we considered implementing, the first question we would ask ourselves is: “Is this necessary?”. Maffle is an engaging way to connect to others, not a time wasting vortex.</div>
            <div className="portfolio-header">Learning Goals</div>
            <div className="description">While working at Maffle, I identified three goals I wanted to complete before my placement finished. 
            The first learning goal was to improve my understanding of networking in-game Engines. When I told my boss about this goal, he 
            immediately assigned me to research the networking we currently used and compare it to other options to see if there were possible 
            improvements to be made. I learned a lot about different types of game networking as well as networking in general. While I did not 
            write any code to improve our networking system, I was still glad that I got to learn about what major companies use to create 
            player-to-player connections and what options are out there. My next learning goal was to improve communication with my employer 
            both verbally and in the code I was writing. I quickly found that the single biggest factor when it came to effective 
            communication was being competent in what is trying to be communicated. The more I understood a topic before communicating it, 
            the better I was at making it something they could understand. I found that if I was able to spend a few minutes writing a quick 
            description of the main points I wanted to get across, my competence was enough. If I really struggled to explain it, I went back 
            to the drawing board, as I probably didn’t understand the topic well enough. My final goal was to improve the amount of time I can 
            deeply focus on a single topic. This was probably the most difficult learning goal to track and improve. I quickly realized I could 
            not just “will” myself to focus more, so I started implementing strategies that made things easier. This included minimizing distractions, 
            keeping a clean workspace, blocking my time to work on specific tasks, including non-intrusive rewards after focusing for long periods of 
            time and not looking at my phone or email while I was working on a single problem. I found that the amount of time I could focus deeply 
            on a single topic improved slowly, and I could drop into “full focus mode” quicker and quicker. This is such a valuable skill I will 
            hopefully continue to improve and use throughout school and work. </div>
            <div className="portfolio-header">Conclusion</div>
            <div className="description">Maffle is a do-all digital tool, so I got to expose myself to so many areas of computer science in one job. Working closely with my boss, I got to learn about new things and immediately tried to apply them by putting them into the Maffle desktop application. It was such an interesting and rewarding experience, and I hope to continue to work for Maffle in the future. I want to thank my boss Tim for giving me this opportunity and facilitating my growth for the last few months. Tim was extremely welcoming and open-minded, my well-being and learning was his first priority. I can’t imagine a better experience for my first Co-op term. Thank you Tim!</div>
            </div>
            
    )
}