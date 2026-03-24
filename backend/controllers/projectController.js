const Project = require('../models/Project');

// Get all projects
exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.status(200).json({ projects });
  } catch (err) {
    res.status(500).json({ error: 'Server error: ' + err.message });
  }
};

// Get single project
exports.getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }
    res.status(200).json({ project });
  } catch (err) {
    res.status(500).json({ error: 'Server error: ' + err.message });
  }
};

// Create project
exports.createProject = async (req, res) => {
  try {
    const { title, description, image, technologies, liveLink, githubLink } = req.body;

    if (!title || !description) {
      return res.status(400).json({ error: 'Title and description are required' });
    }

    const project = new Project({
      title,
      description,
      image,
      technologies,
      liveLink,
      githubLink,
      userId: '000000000000000000000000' // Dummy user ID for simple portfolio
    });

    await project.save();
    res.status(201).json({ message: 'Project created', project });
  } catch (err) {
    res.status(500).json({ error: 'Server error: ' + err.message });
  }
};

// Update project
exports.updateProject = async (req, res) => {
  try {
    const { title, description, image, technologies, liveLink, githubLink } = req.body;

    const project = await Project.findByIdAndUpdate(
      req.params.id,
      { title, description, image, technologies, liveLink, githubLink },
      { new: true }
    );

    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }

    res.status(200).json({ message: 'Project updated', project });
  } catch (err) {
    res.status(500).json({ error: 'Server error: ' + err.message });
  }
};

// Delete project
exports.deleteProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }
    res.status(200).json({ message: 'Project deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Server error: ' + err.message });
  }
};