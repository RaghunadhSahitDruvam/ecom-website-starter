import mongoose from "mongoose";
const swiperSchema = new mongoose.Schema({
  images: [
    {
      url: String,
      public_url: String,
    },
  ],
});
const SwiperImage =
  mongoose.models.SwiperImage || mongoose.model("Swiper", swiperSchema);
export default SwiperImage;
