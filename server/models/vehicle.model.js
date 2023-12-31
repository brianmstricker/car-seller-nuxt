import { defineMongooseModel } from "#nuxt/mongoose";

export const Vehicle = defineMongooseModel("Vehicle", {
 user: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "User",
  required: true,
 },
 name: {
  type: String,
  required: true,
 },
 model: {
  type: String,
  required: true,
 },
 year: {
  type: Number,
  required: true,
 },
 manufacturer: {
  type: String,
  required: true,
 },
 mileage: {
  type: Number,
  required: true,
 },
 mpg: {
  type: Number,
 },
 exteriorColor: {
  type: String,
  required: true,
 },
 interiorColor: {
  type: String,
  required: true,
 },
 bodyStyle: {
  type: String,
  required: true,
 },
 doors: {
  type: Number,
  required: true,
  default: 4,
 },
 engine: {
  type: String,
  default: "4 Cylinder",
 },
 transmission: {
  type: String,
  default: "Automatic",
 },
 driveType: {
  type: String,
  enum: ["FWD", "RWD", "AWD"],
  default: "FWD",
 },
 fuelType: {
  type: String,
  enum: ["Gasoline", "Diesel", "Electric", "Hybrid"],
  default: "Gasoline",
  required: true,
 },
});
