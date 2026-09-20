function ProjectCard({ project }) {
    return (
        <a
            href={project.github}
            className="card glass-effect hover-lift transition-all text-decoration-none d-block"
            style={{ height: '12rem', width: '100%' }}
        >
            <img
                src={project.image}
                className="card-img-top"
                alt={project.title}
                style={{ height: '8rem', objectFit: 'cover' }}
            />
            <div className="card-body py-2">
                <h6 className="card-title mb-0 fw-bold">{project.title}</h6>
                <p className="text-white small mb-0 mt-1">{project.tech}</p>
            </div>
        </a>
    )
}

export default ProjectCard
