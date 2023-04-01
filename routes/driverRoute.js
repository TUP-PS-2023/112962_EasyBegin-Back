const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

/* router.get("/", async function(req, res) {
  try {
    const drivers = await prisma.driver.findMany({
      include: {team: true}
    });
    res.status(200).json({
      message: "success",
      data: drivers,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: error,
    });
  }
});

router.post("/", async function(req, res) {
  try {
    const { teamId, firstName, lastName, carNumber } = req.body;
    const result = await prisma.driver.create({
      data: {
        teamId,
        firstName,
        lastName,
        carNumber,
      },
    });
    res.status(200).json({
      message: "success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
});

router.get("/:id", async function(req, res) {
  try {
    const driver = await prisma.driver.findUnique({
      where: { id: +req.params.id },
      include: {team: true}
    });
    res.status(200).json({
      message: "success",
      data: driver,
    });
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
});

router.put("/:id", async function(req, res) {
  try {
    const { teamId, firstName, lastName, carNumber } = req.body;
    const result = await prisma.driver.update({
      where: { id: +req.params.id },
      data: { teamId, firstName, lastName, carNumber },
    });
    res.status(200).json({
      message: "success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
});

router.delete("/:id", async function(req, res) {
  try {
    const result = await prisma.driver.delete({
      where: { id: +req.params.id },
    });
    res.status(200).json({
      message: "success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
}); */


module.exports = router;