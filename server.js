"use strict";
const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let reservations = [{}];

//routes
