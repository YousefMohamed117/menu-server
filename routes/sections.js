const express = require("express");
const {
  addDetails,
  getDetails,
  putDetails,
  addLandingDetails,
  getLandingDetails,
  putLandingDetails,
  deleteLandingDetails,
  addServicesDetails,
  getServicesDetails,
  putServicesDetails,
deleteServicesDetails,
  addGalleryDetails,
  getGalleryDetails,
  addOffersDetails,
  getOffersDetails,
  putOffersDetails,
  addFlavorsDetails,
  getFlavorsDetails,
  putFlavorsDetails
} = require("../controllers/sectionsControllers");

const router = express.Router();

router.post("/landing", addLandingDetails);
router.get("/landing", getLandingDetails);
router.put("/landing", putLandingDetails);
router.delete("/landing", deleteLandingDetails);
router.post("/about", addDetails);
router.get("/about", getDetails);
router.put("/about", putDetails);
router.post("/services", addServicesDetails);
router.get("/services", getServicesDetails);
router.put("/services", putServicesDetails);
router.delete("/services", deleteServicesDetails);
router.post("/gallery", addGalleryDetails);
router.get("/gallery", getGalleryDetails);
router.post("/offers", addOffersDetails);
router.get("/offers", getOffersDetails);
router.put("/offers", putOffersDetails);
router.post("/flavors", addFlavorsDetails);
router.get("/flavors", getFlavorsDetails);
router.put("/flavors", putFlavorsDetails);

module.exports = router;
