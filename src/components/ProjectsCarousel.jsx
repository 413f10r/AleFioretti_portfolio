import { useEffect, useState } from 'react'
import { FaChevronUp, FaChevronDown } from 'react-icons/fa'
import ProjectCard from './ProjectCard'

const VISIBLE_COUNT = 3

function ProjectsCarousel({ projects, intervalMs = 4000 }) {
    const maxIndex = Math.max(projects.length - VISIBLE_COUNT, 0)
    const [index, setIndex] = useState(0)

    const goNext = () => setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
    const goPrev = () => setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))

    useEffect(() => {
        const timer = setInterval(goNext, intervalMs)
        return () => clearInterval(timer)
    }, [maxIndex, intervalMs])

    return (
        <div className="projects-carousel-wrapper">
            <button
                type="button"
                className="carousel-arrow"
                onClick={goPrev}
                aria-label="Progetto precedente"
            >
                <FaChevronUp size={12} />
            </button>

            <div className="projects-carousel">
                <div
                    className="projects-carousel-track"
                    style={{ transform: `translateY(calc(-${index} * (12rem + 0.75rem)))` }}
                >
                    {projects.map((project) => (
                        <div className="projects-carousel-slide" key={project.id}>
                            <ProjectCard project={project} />
                        </div>
                    ))}
                </div>
            </div>

            <button
                type="button"
                className="carousel-arrow"
                onClick={goNext}
                aria-label="Progetto successivo"
            >
                <FaChevronDown size={12} />
            </button>
        </div>
    )
}

export default ProjectsCarousel
