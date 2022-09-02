import logo from "./unitronlogo.jpg"
import HI from "./HI.jpg"
import ME from "./ME.jpg"
import team from "./team.jpg"

export default function Sonova() {
    return (
        <div className="portfolio-items">
            <div className="company">Unitron Sonova</div>
            <div className="date">Software Quality Assurance Analyst</div>
            <div className="date"><i>Sept - Dec 2021</i></div>
            <div className="jobphoto">
                <img src={logo} alt="Maffle"/>            
            </div>
            <div className="description">Unitron is located in Kitchener, Ontario and provides hearing care solutions to a variety of customers. They ensure a complete user experience for both the customer and the audiologist configuring hearing instruments for their patients. Unitron has won 7 “Red Dot Awards” for their products and has over 2.5 billion dollars in sales.</div>
            <div className="portfolio-header">Job Description</div>
            <div className="jobphoto">
                <img src={HI} alt="Sonova"/>            
            </div>
            <div className="description">At Sonova, I was a Software Quality Assurance Analyst. My job was to execute and maintain various tests using the software that configures hearing instruments. There is such a vast network of information related to specific hearing instruments, their softwares, their accessories and their configuration that had to be referenced and used everyday. It was a steep learning curve, but slowly I gained confidence and competency in the world of personal hearing instruments. Working in the Agile methodology alongside the software development team, I would report potential bugs and find as much information as possible about their occurrences. The job required patience and accuracy to ensure bugs are found by our team, not by the customer.</div>
            <div className="portfolio-header">Learning Goals</div>
            <div className="jobphoto">
                <img src={ME} alt="Sonova"/>            
            </div>
            <div className="description">Working at a larger company was a fantastic learning experience due to the amount of teams that had to work in harmony. I set up my learning goals to get more of an insight into my coworkers, how they worked and what technology they worked with.
My first learning goal was to learn more about the Agile development cycle.
As a computer science student, I hadn’t been exposed to this working format in school, so I thought this job would be a great place to start. I did some reading on Agile and paid attention in our sprint planning and stand up meetings. By following progress on specific tasks and features (especially the ones implemented due to my bug reports) I gained a deeper understanding of how Agile works in practice.
My next learning goal was to learn more about the automation done at the company.
Unfortunately, this learning goal had to be set aside due to how busy our team was. Instead, I inquired into the codebase that ran our software. I went into the Kitchener office and spent a day shadowing a fitting domain developer on our team, Mario. I got a firsthand tour of the languages and organization of the millions of lines that make up the fitting software. Mario and I first fixed a bug, then pair-programmed a new feature. It was a great experience not only to program and learn the behind-the-scenes of the software, but also to track how the new feature was picked up by the team, tested and eventually put into a final build.
My final goal was simply to get to know my co-workers better, in and out of work.
In a remote position, it is easy to forget that there are people working alongside you in similar positions. In my case, there were a lot of other Guelph Co-op students in their final years of school who were happy to give me advice and recommendations for the rest of my terms. Luckily, our team manager Kevin valued the importance of our team really knowing each other, scheduling two team lunches which I attended. It was great to finally see my coworkers in person, and try to learn from their careers and enjoy their company. A sense of friendship can come along way, especially when tackling difficult problems under a time crunch.</div>
        <div className="portfolio-header">Meaning and impact</div>
        <div className="jobphoto">
                <img src={team} alt="Sonova"/>                
        </div>
        <div className="description">Working for Sonova was a special experience because of what we were working for. The goal was always to improve the lives of those with hearing loss, not to just make a profit. This change in perspective seemed to change the way I worked. Every problem we investigated didn’t just include finding the quick fix, it meant stepping into the shoes of our user and trying to make their lives easier. How can we fix not only this problem, but problems of a similar type? What causes this problem? Where else could this problem occur? My coworkers showed me that it’s possible to be thorough in all aspects of work. When I would ask them a question, they wouldn’t just shoot me a one sentence answer. They would make sure that I understood the solution, so that if it came up again, I could fix it myself. This experience has inspired me to be more thorough in my working and student life.</div>
        <div className="portfolio-header">Conclusion</div>
        <div className="description">Sonova taught me so much about what it means to be an effective employee, coworker, student and teacher. Having strong meaning associated with your work is something I certainly undervalued until this job. It seems to bind everyone together, instilling patience, focus and respect for our work along the way. I would like to thank Chris and Mishel for hiring me, training me, answering my questions and being some of the kindest and most patient people I have ever met in my life. I'd also like to thank Mario for giving me the oppourtunity to shadow his development for a day and even let me program some things myself. Lastly, thank you to my coworkers on the QA team Roba, Teran, Emily, Kevin and Jacob for giving me advice, being encouraging and even giving me rides to the office. I hope we cross paths again someday!</div>
        </div>

    )
}