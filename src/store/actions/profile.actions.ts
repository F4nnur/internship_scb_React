import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProfileApi } from "../../api/profile/profile.requests";

export const fetchProfile = createAsyncThunk("profile", fetchProfileApi);
