import Card from '../card/Card'
import { LuBrain } from "react-icons/lu";
import { IoFlashOutline } from "react-icons/io5";
import { MdOutlinePalette } from "react-icons/md";
import { MdOutlineFileDownload } from "react-icons/md";
import { AiOutlineTeam } from "react-icons/ai";
import { GrSecure } from "react-icons/gr";
import './Features.css';

// features data
const features = [
    {
        id: 1,
        title: 'AI-Powered Analysis',
        description: 'Advanced natural language processing understands your app concept and translates it into visual components.',
        icon: <LuBrain className='icon'/>,
        iconBgColor: 'linear-gradient(to top, var(--icon-bg-violet), #56ccf2)'
    },
    {
        id: 2,
        title: 'Instant Generation',
        description: 'Get professional-looking mockups in under 30 seconds. No design skills required.',
        icon: <IoFlashOutline className='icon'/>,
        iconBgColor: 'linear-gradient(to top, var(--icon-bg-blue), #56ccf2)'
    },
    {
        id: 3,
        title: 'Multiple Styles',
        description: 'Choose from various design styles - minimalist, modern, playful, or enterprise-grade interfaces.',
        icon: <MdOutlinePalette className='icon'/>,
        iconBgColor: 'linear-gradient(var(--icon-bg-teal), #56ccf2)'
    },
    {
        id: 4,
        title: 'Export Options',
        description: 'Download your mockups in multiple formats: PNG, PDF, or Figma-compatible files.',
        icon: <MdOutlineFileDownload className='icon'/>,
        iconBgColor: 'linear-gradient(to top, var(--icon-bg-green), #f2994a)'
    },
    {
        id: 5,
        title: 'Team Collaboration',
        description: 'Share mockups with your team, collect feedback, and iterate on designs collaboratively.',
        icon: <AiOutlineTeam className='icon'/>,
        iconBgColor: 'linear-gradient(to top, var(--icon-bg-lime), #f2994a)'
    },
    {
        id: 6,
        title: 'Secure & Private',
        description: 'Your app ideas are encrypted and never shared. We respect your intellectual property.',
        icon: <GrSecure className='icon'/>,
        iconBgColor: 'linear-gradient(to top, var(--icon-bg-orange), #f2994a)'
    },
]

const Features = () => {
  return (
    <section id="features" className="features-section">
        <div className="container">
            <div className="section-header">
                <h2>Powerful Features for Every Creator</h2>
                <p>Everything you need to transform your app ideas into stunning visaul prototypes</p>
            </div>

            <div className="features-grid">
                {features.map(feature => (
                    <Card feature={feature} key={feature.id}/>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Features