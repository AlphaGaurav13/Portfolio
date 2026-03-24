const Contact = require('../models/Contact');

// Get all contact messages
exports.getAllMessages = async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json({ messages });
  } catch (err) {
    res.status(500).json({ error: 'Server error: ' + err.message });
  }
};

// Get single message
exports.getMessageById = async (req, res) => {
  try {
    const message = await Contact.findById(req.params.id);
    if (!message) {
      return res.status(404).json({ error: 'Message not found' });
    }
    res.status(200).json({ message });
  } catch (err) {
    res.status(500).json({ error: 'Server error: ' + err.message });
  }
};

// Submit contact form
exports.submitContact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const contact = new Contact({
      name,
      email,
      subject,
      message
    });

    await contact.save();
    res.status(201).json({ message: 'Message sent successfully', contact });
  } catch (err) {
    res.status(500).json({ error: 'Server error: ' + err.message });
  }
};

// Delete message
exports.deleteMessage = async (req, res) => {
  try {
    const message = await Contact.findByIdAndDelete(req.params.id);
    if (!message) {
      return res.status(404).json({ error: 'Message not found' });
    }
    res.status(200).json({ message: 'Message deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Server error: ' + err.message });
  }
};