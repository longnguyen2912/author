const Author = require("../models/author.model")

module.exports.apiTest =(req, res) =>{
    res.json({message: "Connected"})
}

module.exports.allAuthor = (req, res) =>{
    Author.find()
    .then(auList => res.json(auList))
    .catch(err=>res.status(400).json(err))
}

module.exports.oneAuthor = (req, res) =>{
    Author.findOne({_id: req.params.id})
    .then(oneAu => res.json(oneAu))
    .catch(err=>res.status(400).json(err))
}

module.exports.createAuthor = (req,res) =>{
    const newAuthor = req.body
    Author.create(newAuthor)
    .then(addedAu => res.json(addedAu))
    .catch(err=>res.status(400).json(err))
}

module.exports.updateAuthor = (req,res) =>{
    Author.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true, runValidators: true}
    )
    .then(updatedAu => res.json(updatedAu))
    .catch(err=>res.status(400).json(err))
}

module.exports.deleteAuthor = (req,res) =>{
    Author.deleteOne({_id: req.params.id})
    .then(message => res.json(message))
    .catch(err=>res.status(400).json(err))
}