import mongoose, { mongo } from "mongoose";
const topBarScheme = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  button: {
    title: String,
    color: String,
    link: String,
  },
  color: String,
});
const TopBar = mongoose.models.TopBar || mongoose.model("TopBar", topBarScheme);
export default TopBar;
