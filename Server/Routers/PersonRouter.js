const express = require("express");
const router = express.Router();

const bl = require("../model/PersonBLL");

router.get("/", async (req, res) => {
  try {
    const persons = await bl.getAllPersons();
    res.status(200).json(persons);
  } catch (e) {
    res.status(500).json(e);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const person = await bl.getPerson(id);
    res.status(200).json(person);
  } catch (e) {
    res.status(500).json(e);
  }
});

router.post("/", async (req, res) => {
  try {
    const per = req.body;
    const status = await bl.addPerson(per);
    res.status(201).json(status);
  } catch (e) {
    res.status(500).json(e);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const per = req.body;
    const status = await bl.updatePerson(id, per);
    res.status(200).json(status);
  } catch (e) {
    res.status(500).json(e);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const status = await bl.deletePerson(id);
    res.status(200).json(status);
  } catch (e) {
    res.status(500).json(e);
  }
});

module.exports = router;
