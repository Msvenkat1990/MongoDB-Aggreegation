const express = require('express');
const { createEmpData, viewReport, leavedata, createLeave } = require('../controller/controller');

const router = express.Router();
router.post('/create',createEmpData);
router.post('/createLeave',createLeave);
router.get("/view/report",viewReport);
router.get("/view/emp",leavedata)

module.exports = router;