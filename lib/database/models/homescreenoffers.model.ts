const mongoose = require("mongoose");

const homeScreenOfferSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  images: [
    {
      url: String,
      public_id: String,
    },
  ],
  offerType: {
    type: String,
    enum: ["specialCombo", "crazyDeal"], // Categorizes the type of offer
    required: true,
  },
});

const HomeScreenOffer =
  mongoose.models.HomeScreenOffer ||
  mongoose.model("HomeScreenOffer", homeScreenOfferSchema);

export default HomeScreenOffer;
