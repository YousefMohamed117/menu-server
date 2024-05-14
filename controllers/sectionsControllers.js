const AboutDetails = require("../models/aboutModel");
const LandingDetails = require("../models/landingModel");
const ServicesDetail = require("../models/servicesModel");
const GalleryDetail = require("../models/galleryModel");
const OffersDetail = require("../models/offersModel");
const FlavorsDetail = require("../models/flavorsModel");

const addDetails = async (req, res) => {
  const {
    aboutTitle,
    aboutFirstTitle,
    aboutFirstP,
    aboutSecondTitle,
    aboutSecondP,
    aboutFeatures,
  } = req.body;
  try {
    // Create a new AboutDetail document
    const details = new AboutDetails({
      aboutTitle,
      aboutFirstTitle,
      aboutFirstP,
      aboutSecondTitle,
      aboutSecondP,
      aboutFeatures,
      img: req.file.buffer,
    });

    // Save the document to the database
    const savedAboutDetails = await details.save(); // This line saves the document
    res.json(savedAboutDetails);

    return savedAboutDetails;
  } catch (error) {
    console.error("Error saving about page details:", error);
    throw error;
  }
};
const getDetails = async (req, res) => {
  try {
    const savedAboutDetails = await AboutDetails.findOne({});
    res.json(savedAboutDetails);

    return savedAboutDetails;
  } catch (error) {
    console.error("Error saving about page details:", error);
    throw error;
  }
};
const putDetails = async (req, res) => {
  const aboutData = req.body;
  try {
    // Find the existing about details document
    let savedAboutDetails = await AboutDetails.findOne({});

    if (!savedAboutDetails) {
      // If no document exists, return a 404 Not Found response
      return res.status(404).json({ error: "About details not found" });
    }

    // Update each field individually
    if (aboutData.aboutTitle) {
      savedAboutDetails.aboutTitle = aboutData.aboutTitle;
    }
    if (aboutData.aboutFirstTitle) {
      savedAboutDetails.aboutFirstTitle = aboutData.aboutFirstTitle;
    }
    if (aboutData.aboutFirstP) {
      savedAboutDetails.aboutFirstP = aboutData.aboutFirstP;
    }
    if (aboutData.aboutSecondTitle) {
      savedAboutDetails.aboutSecondTitle = aboutData.aboutSecondTitle;
    }
    if (aboutData.aboutSecondP) {
      savedAboutDetails.aboutSecondP = aboutData.aboutSecondP;
    }
    if (aboutData.aboutFeatures) {
      savedAboutDetails.aboutFeatures = aboutData.aboutFeatures;
    }

    // Save the updated document
    const updatedAboutDetails = await savedAboutDetails.save();

    res.json(updatedAboutDetails); // Return the updated document
  } catch (error) {
    console.error("Error updating about page details:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};



const addLandingDetails = async (req, res) => {
  const { title } = req.body;
  try {
    // Create a new AboutDetail document
    const details = new LandingDetails({
      title,
    });

    // Save the document to the database
    const savedLandingDetails = await details.save(); // This line saves the document
    res.json(savedLandingDetails);

    return savedLandingDetails;
  } catch (error) {
    console.error("Error saving about page details:", error);
    throw error;
  }
};
const getLandingDetails = async (req, res) => {
  try {
    const savedLandingDetails = await LandingDetails.findOne({});
    res.json(savedLandingDetails);

    return savedLandingDetails;
  } catch (error) {
    console.error("Error saving about page details:", error);
    throw error;
  }
};
const putLandingDetails = async (req, res) => {
  const { title } = req.body;
  try {
    // Find the existing landing details document
    let savedLandingDetails = await LandingDetails.findOne({});

    if (!savedLandingDetails) {
      // If no document exists, return a 404 Not Found response
      return res.status(404).json({ error: "Landing details not found" });
    }

    // Update the title if provided in the request body
    if (title) {
      savedLandingDetails.title = title;
    }

    // Save the updated document
    const updatedLandingDetails = await savedLandingDetails.save();
    res.json(updatedLandingDetails);

    return updatedLandingDetails;
  } catch (error) {
    console.error("Error updating landing page details:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
const deleteLandingDetails = async (req, res) => {
  const index = req.query.index;
  try {
    // Find the existing landing details document
    let landingDetails = await LandingDetails.findOne({});
    if (!landingDetails) {
      // If no document exists, return a 404 Not Found response
      return res.status(404).json({ error: "Landing details not found" });
    }

    // Check if the index is valid
    if (index < 0 || index >= landingDetails.length) {
      return res.status(400).json({ error: "Invalid index provided" });
    }

    // Remove the element at the specified index
    landingDetails.title.splice(index, 1);

    // Save the updated document
    const updatedLandingDetails = await landingDetails.save();
    res.json(updatedLandingDetails);

    return updatedLandingDetails;
  } catch (error) {
    console.error("Error deleting landing page details:", error);
    res.status(500).json({ error: "Internal server error 1" });
  }
};



const addServicesDetails = async (req, res) => {
  const { servicesTitle, servicesHeaders, servicesP } = req.body;
  try {
    // Create a new AboutDetail document
    const details = new ServicesDetail({
      servicesTitle,
      servicesHeaders,
      servicesP,
    });

    // Save the document to the database
    const savedServicesDetail = await details.save(); // This line saves the document
    res.json(savedServicesDetail);

    return savedServicesDetail;
  } catch (error) {
    console.error("Error saving about page details:", error);
    throw error;
  }
};
const getServicesDetails = async (req, res) => {
  try {
    const savedServicesDetail = await ServicesDetail.findOne({});
    res.json(savedServicesDetail);

    return savedServicesDetail;
  } catch (error) {
    console.error("Error saving about page details:", error);
    throw error;
  }
};
const putServicesDetails = async (req, res) => {
  const { servicesTitle, servicesHeaders, servicesP } = req.body;
  try {
    // Find the existing landing details document
    let savedServicesDetail = await ServicesDetail.findOne({});

    if (!savedServicesDetail) {
      // If no document exists, return a 404 Not Found response
      return res.status(404).json({ error: "Landing details not found" });
    }

    // Update the title if provided in the request body
    if (servicesTitle, servicesHeaders, servicesP) {
      savedServicesDetail.servicesTitle = servicesTitle;
      savedServicesDetail.servicesHeaders = servicesHeaders;
      savedServicesDetail.servicesP = servicesP;
    }

    // Save the updated document
    const updatedServicesDetail = await savedServicesDetail.save();
    res.json(updatedServicesDetail);

    return updatedServicesDetail;
  } catch (error) {
    console.error("Error updating landing page details:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
const deleteServicesDetails = async (req, res) => {
  const index = req.query.index;
  try {
    // Find the existing landing details document
    let ServicesDetail = await ServicesDetail.findOne({});
    if (!ServicesDetail) {
      // If no document exists, return a 404 Not Found response
      return res.status(404).json({ error: "Landing details not found" });
    }

    // Check if the index is valid
    if (index < 0 || index >= ServicesDetail.length) {
      return res.status(400).json({ error: "Invalid index provided" });
    }

    // Remove the element at the specified index
    ServicesDetail.title.splice(index, 1);

    // Save the updated document
    const updatedServicesDetail = await ServicesDetail.save();
    res.json(updatedServicesDetail);

    return updatedServicesDetail;
  } catch (error) {
    console.error("Error deleting landing page details:", error);
    res.status(500).json({ error: "Internal server error 1" });
  }
};




const addGalleryDetails = async (req, res) => {
  const { title } = req.body;
  try {
    // Create a new AboutDetail document
    const details = new GalleryDetail({
      title,
    });

    // Save the document to the database
    const savedGalleryDetail = await details.save(); // This line saves the document
    res.json(savedGalleryDetail);

    return savedGalleryDetail;
  } catch (error) {
    console.error("Error saving about page details:", error);
    throw error;
  }
};
const getGalleryDetails = async (req, res) => {
  try {
    const savedGalleryDetail = await GalleryDetail.findOne({});
    res.json(savedGalleryDetail);

    return savedGalleryDetail;
  } catch (error) {
    console.error("Error saving about page details:", error);
    throw error;
  }
};


const addOffersDetails = async (req, res) => {
  const { offersTitle, offers, num, detail, price, flavors, hours, workers } =
    req.body;
  try {
    // Create a new AboutDetail document
    const details = new OffersDetail({
      offersTitle,
      offers,
      num,
      detail,
      price,
      flavors,
      hours,
      workers,
    });

    // Save the document to the database
    const savedOffersDetail = await details.save(); // This line saves the document
    res.json(savedOffersDetail);

    return savedOffersDetail;
  } catch (error) {
    console.error("Error saving about page details:", error);
    throw error;
  }
};
const getOffersDetails = async (req, res) => {
  try {
    const savedOffersDetail = await OffersDetail.findOne({});
    res.json(savedOffersDetail);

    return savedOffersDetail;
  } catch (error) {
    console.error("Error saving about page details:", error);
    throw error;
  }
};
const putOffersDetails = async (req, res) => {
  const { offersTitle, offers } = req.body; // Destructure only necessary fields
  try {
    // Find the existing offers details document
    let savedOffersDetail = await OffersDetail.findOne({});

    if (!savedOffersDetail) {
      // If no document exists, return a 404 Not Found response
      return res.status(404).json({ error: "Offers details not found" });
    }

    // Update the title and offers if provided in the request body
    if (offersTitle) {
      savedOffersDetail.offersTitle = offersTitle;
    }
    if (offers) {
      savedOffersDetail.offers = offers;
    }

    // Save the updated document
    const updatedOffersDetail = await savedOffersDetail.save();
    res.json(updatedOffersDetail);
  } catch (error) {
    console.error("Error updating offers details:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};


const addFlavorsDetails = async (req, res) => {
  const { title, flavors } = req.body;
  try {
    // Create a new AboutDetail document
    const details = new FlavorsDetail({
      title,
      flavors,
    });

    // Save the document to the database
    const savedFlavorsDetail = await details.save(); // This line saves the document
    res.json(savedFlavorsDetail);

    return savedFlavorsDetail;
  } catch (error) {
    console.error("Error saving about page details:", error);
    throw error;
  }
};
const getFlavorsDetails = async (req, res) => {
  try {
    const savedFlavorsDetail = await FlavorsDetail.findOne({});
    res.json(savedFlavorsDetail);

    return savedFlavorsDetail;
  } catch (error) {
    console.error("Error saving about page details:", error);
    throw error;
  }
};
const putFlavorsDetails = async (req, res) => {
  const { title, flavors } = req.body;
  try {
    // Find the existing offers details document
    let savedFlavorsDetail = await FlavorsDetail.findOne({});

    if (!savedFlavorsDetail) {
      // If no document exists, return a 404 Not Found response
      return res.status(404).json({ error: "Offers details not found" });
    }

    // Update the title and offers if provided in the request body
    if (title) {
      savedFlavorsDetail.title = title;
    }
    if (flavors) {
      savedFlavorsDetail.flavors = flavors;
    }

    // Save the updated document
    const updatedFlavorsDetail = await savedFlavorsDetail.save();
    res.json(updatedFlavorsDetail);
  } catch (error) {
    console.error("Error updating offers details:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
module.exports = {
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
};
