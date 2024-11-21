import { asyncHandler } from "../utils/asyncHandlers.js";
import{ApiError} from "../utils/ApiError.js"

const registerUser = asyncHandler(async (req, res) => {
  const { fullName, email, username, password } = req.body;
 
  if (!fullName || !email || !username || !password) {
    throw new ApiError(400, "Please fill all fields");
  }

  const existedUser = user.findOne({
    $or: [{ email: email }, { username: username }],
  
  })
  if (existedUser) {
    throw new ApiError(400, "User with this username or email already exists");
  }
  const avtarLocalpath = req.files?.avatar[0]?.path;                      

const coverImageLocalpath = req.files?.coverImage[0]?.path;
});

export { registerUser };