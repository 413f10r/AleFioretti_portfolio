function ProjectCard({ project }) {
    return (
        <div className="card glass-effect hover-lift transition-all" style={{ height: '12rem', width: '100%' }}>
            <img
                src={project.image}
                className="card-img-top"
                alt={project.title}
                style={{ height: '8rem', objectFit: 'cover' }}
            />
            <div className="card-body py-2">
                <a href={project.github} className="text-white text-decoration-none">
                    <h6 className="card-title mb-0 fw-bold">{project.title}</h6>
                    <p className="text-white small mb-0 mt-1">{project.tech}</p>
                </a>
            </div>
        </div>
    )
}

export default ProjectCard
