const Skill = require('../models/Skill');

// Get all skills
exports.getAllSkills = async (req, res) => {
  try {
    const skills = await Skill.find().sort({ createdAt: -1 });
    res.status(200).json({ skills });
  } catch (err) {
    res.status(500).json({ error: 'Server error: ' + err.message });
  }
};

// Get single skill
exports.getSkillById = async (req, res) => {
  try {
    const skill = await Skill.findById(req.params.id);
    if (!skill) {
      return res.status(404).json({ error: 'Skill not found' });
    }
    res.status(200).json({ skill });
  } catch (err) {
    res.status(500).json({ error: 'Server error: ' + err.message });
  }
};

// Create skill
exports.createSkill = async (req, res) => {
  try {
    const { name, category, proficiency } = req.body;

    if (!name) {
      return res.status(400).json({ error: 'Skill name is required' });
    }

    const skill = new Skill({
      name,
      category,
      proficiency,
      userId: '000000000000000000000000' // Dummy user ID for simple portfolio
    });

    await skill.save();
    res.status(201).json({ message: 'Skill created', skill });
  } catch (err) {
    res.status(500).json({ error: 'Server error: ' + err.message });
  }
};

// Update skill
exports.updateSkill = async (req, res) => {
  try {
    const { name, category, proficiency } = req.body;

    const skill = await Skill.findByIdAndUpdate(
      req.params.id,
      { name, category, proficiency },
      { new: true }
    );

    if (!skill) {
      return res.status(404).json({ error: 'Skill not found' });
    }

    res.status(200).json({ message: 'Skill updated', skill });
  } catch (err) {
    res.status(500).json({ error: 'Server error: ' + err.message });
  }
};

// Delete skill
exports.deleteSkill = async (req, res) => {
  try {
    const skill = await Skill.findByIdAndDelete(req.params.id);
    if (!skill) {
      return res.status(404).json({ error: 'Skill not found' });
    }
    res.status(200).json({ message: 'Skill deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Server error: ' + err.message });
  }
};