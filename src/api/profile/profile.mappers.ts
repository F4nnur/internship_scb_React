import { ProfileResponseDto } from "./profile.types";
import { Profile } from "../../store/reducers/profile/profile.types";

export const profileResponseMapper = (
  profile: ProfileResponseDto
): Profile => ({
  id: profile.user_id,
});
