const Snack = require('../models/Snack')

async function index (req, res) {
    try {
        const snacks = await Snack.find({});
        res.status(200).json(snacks);
    } catch (err) {
        res.status(500).json({"error": err.message})
    }
}

async function show (req, res) {
    try {
        const id = req.params.id;
        const snack = await Snack.findById(id);
        res.status(200).json(snack);
    } catch (err) {
        res.status(404).json({"error": err.message})
    }
}

async function getTop (req, res) {
    try {
        const snack = await Snack.find({}).sort({ votes: -1 }).limit(1);
        res.status(200).json(snack);
    } catch (err) {
        res.status(404).json({"error": err.message})
    }
}

async function create (req, res) {
    try {
        const snack = await Snack.create(req.body);
        res.status(201).json(snack);
    } catch (err) {
        res.status(404).json({"error": err.message})
    }
}


async function update (req, res) {
    try {
        const { id } = req.params
        const result = await Snack.findOneAndUpdate({ _id: id }, {
            ...req.body
        })
        const snack = await Snack.findById(id);
        res.status(200).json(snack);
    } catch (err) {
        res.status(404).json({"error": err.message})
    }
}

async function destroy (req, res) {
    try {
        const {id} = req.params
        const snack = await Snack.findOneAndDelete({ _id: id })
        res.status(204);
    } catch (err) {
        res.status(404).json({"error": err.message})
    }
}

module.exports = {
    index, show, update, getTop, create, destroy
}
