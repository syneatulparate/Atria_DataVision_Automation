import { browser, protractor } from "protractor";
import { AnnouncmentsAndEventsTile } from "../../Pages/Announcements&Events/Announcements&EventsPage";

const { Given } = require("cucumber");
const { When, Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

let announcementsAndEvents: AnnouncmentsAndEventsTile = new AnnouncmentsAndEventsTile();
