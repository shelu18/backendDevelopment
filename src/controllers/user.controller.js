import { asyncHandler } from "../utils/asyncHandlers.js";

// Steps of user registration:
// 1. Get details from frontend
// 2. Validate all fields
// 3. Check if user already exists
// 4. Upload files to Cloudinary
// 5. Save the data to MongoDB and return the response

const registerUser = asyncHandler(async (req, res) => {
  const { fullName, email, username, password } = req.body;
  console.log("email", email);
  // Add the rest of the registration logic here
});

export { registerUser };