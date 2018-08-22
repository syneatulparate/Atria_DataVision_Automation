"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Announcements_EventsPage_1 = require("../../Pages/Announcements&Events/Announcements&EventsPage");
const { Given } = require("cucumber");
const { When, Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
let announcementsAndEvents = new Announcements_EventsPage_1.AnnouncmentsAndEventsTile();
