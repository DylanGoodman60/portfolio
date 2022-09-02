import logo from "./logo.png"
import model from "./SystemModel2.png"
import alignment from "./alignment-plots.png"

export default function Guelph() {
    return (
        <div className="portfolio-items">
            <div className="company">University of Guelph</div>
            <div className="date">Research Assistant</div>
            <div className="date"><i>May - August 2022</i></div>
            <img className="guelph-logo" src={logo} alt="Guelph University Logo"/>            
            <div className="description">A USRA is an Undergraduate Student Research Award program, provided to develop potential for a research career in university students. They are ultimately provided to encourage students to pursue graduate studies. The engineering faculty at the University of Guelph provided a USRA position under Dr. Ahmed Refaey Hussein, my supervising professor.</div>
            <div className="portfolio-header">Job Description</div>
            <img className="system-model" src={model} alt="System Model"/>            
            <div className="description">As a student researcher, my task was to lead the research and writing for an academic paper. The goal was to innovate the Internet of Things space in Agriculture, through the use of FPGA's, machine vision and machine learning. Our specific use case was built upon an already occuring research project at the university; the classification of trees in a field. Our implementation was to attach a Kria Vision AI starter kit System on Module to a UAV drone, and have this detection occur in real time. To increase the accuracy of classification, we used multiple camera streams attached to the same board, as it was built for this kind of multi-angular machine vision.</div>
            <div className="portfolio-header">Application Development</div>
            <img className="alignment" src={alignment} alt="Hyperalignment example image"/>            
            <div className="description">Multiple camera streams being sent over the network at once caused an influx of bandwidth between the drone and the server. Due to this, we worked on pre-processing the camera inputs on board, making use of the advantages of FPGA's. Using an algorithm called Manifold Alignment, originally developed for FMRI analysis, we "aligned" the data from multiple camera streams and exported a shared model (which significantly reduced bandwidth requirements). The low-compute cost and unsupervised version of this algorithm was called "Hyperalignment", and was developed by ContextLabs for public use. In coordination with custom Python scripts and application development tools from Xilinx, we created a custom overlay that could be run on the module to align incoming footage from USB cameras.</div>
            <div className="portfolio-header">Learning Goals</div>
        </div>
    )
}