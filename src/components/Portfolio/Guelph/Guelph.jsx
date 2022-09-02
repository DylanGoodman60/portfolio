import logo from "./logo.png"
import model from "./SystemModel2.png"
import alignment from "./alignment-plots.png"
import board from "./kv260.jpg"

export default function Guelph() {
    return (
        <div className="portfolio-items">
            <div className="company">University of Guelph</div>
            <div className="date">Research Assistant</div>
            <div className="date"><i>May - August 2022</i></div>
            <img className="guelph-logo" src={logo} alt="University of Guelph"/>            
            <div className="description">A USRA is an Undergraduate Student Research Award program, provided to develop potential for a research career in university students. They are ultimately provided to encourage students to pursue graduate studies. The engineering faculty at the University of Guelph provided a USRA position under Dr. Ahmed Refaey Hussein, my supervising professor.</div>
            <div className="portfolio-header">Job Description</div>
            <img className="system-model" src={model} alt="System Model"/>            
            <div className="description">As a student researcher, my task was to lead the research and writing for an academic paper. The goal was to innovate the Internet of Things space in Agriculture, through the use of FPGA's, machine vision and machine learning. Our specific use case was built upon an already occuring research project at the university; the classification of trees in a field. Our implementation was to attach a Kria Vision AI starter kit System on Module to a UAV drone, and have this detection occur in real time. To increase the accuracy of classification, we used multiple camera streams attached to the same board, as it was built for this kind of multi-angular machine vision.<br /><br />
            My work was split into Python programming and paper writing. I wrote a large number of Python scripts combining multiple libraries (OpenCV, matplotlib, Numpy, Hypertools etc.) to create applications that could run on-board. Paper writing was done in LaTeX, and I generated diagrams using a variety of software (Blender, Visio, Photoshop, pyplot etc.).</div>
            <div className="portfolio-header">Application Development</div>
            <img className="alignment" src={alignment} alt="Alignment Example"/>            
            <div className="description">Multiple camera streams being sent over the network at once caused an influx of bandwidth between the drone and the server. Due to this, we worked on pre-processing the camera inputs on board, making use of the advantages of FPGA's. Using an algorithm called Manifold Alignment, originally developed for FMRI analysis, we "aligned" the data from multiple camera streams and exported a shared model (which significantly reduced bandwidth requirements). The low-compute cost and unsupervised version of this algorithm was called "Hyperalignment", and was developed by ContextLabs for public use. In coordination with custom Python scripts and application development tools from Xilinx, we created a custom overlay that could be run on the module to align incoming footage from USB cameras.</div>
            <div className="portfolio-header">Learning Goals</div>
            <img className="alignment" src={board} alt="KV260 Board"/>   
            <div className="description">My first learning goal was to improve my competency with hardware concepts and learn about FPGA's. After working with them all summer, I can say that I have improved my comfort with how they work and what they do significantly. While I wish I spent more time diving into actually making programmable logic functions on-board, I do feel that if I ever run into a similar device, I will be confident in diving straight in. I have developed a high-level understanding of these devices, and hope to use that knowledge in my career.<br /><br />
                                        My second learning goal was to improve my time management independently, as this was mostly an individual role. Once I realized I couldn't keep all my objectives in my head, I started writing down lists of objectives where I could break down big picture goals into small tasks. I made sure to update them daily, as well as after meetings. This strategy worked really well for taking the stress off of feeling forgetful, but didn't work amazing when I was really busy, as I would rather spend the time working. I definitely improved my productivity, but I would like to keep exploring methods for keeping track of things, even when I am swamped with work.<br /><br />
                                        My third learning goal was to improve my ability to read academic papers. After getting advice from professors and PhD students, as well as reading and summarizing a large quanity of academic papers, I can definitely say this learning goal was completed. There are a few strategies to help speed up the paper reading process, but the number one most important aspect was understanding the space. When I first started, I knew very little about the Internet of Things and machine learning algorithms. By the end, I didn't have to look up every other word, and could understand an abstract and take in diagrams at face value right away. Beyond that, it helps to start with diagrams, and skim through a paper all the way, even if you don't understand every detail. An iterave approach is much better than going very slowly and understanding everything. While this was stressed to me early on, I didn't take advantage of it until I had struggled through a few particularly long papers.</div>
            <div className="portfolio-header">Conclusion</div>
            <div className="description">I can say with confidence that the goal of the USRA was successful. I am interested in graduate studies after finishing my undergraduate degree. Innovation in a new parts of a field using new technology is as exciting as it is challenging. I found a place where my love for writing and graphics can combine with a love for programming, and I get to work alongside like-minded people.<br /><br />
                                        I'd like to thank my supervising professor, Dr. Ahmed Refaey Hussein for giving me this oppourtunity, and always prioritizing my learning and future. I'd also like to thank those who helped me out in the lab, David, Yahuza and Emmanual. Lastly, I'd like to thank the friends I made in the lab, Sean, Dane and Charlotte.</div>

        </div>
    )
}