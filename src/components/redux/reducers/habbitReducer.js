import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  habbits: [],
  isLoading: false,
  error: null,
  success: null,
};

// const api_base_url = "http://localhost:8000/api";
const api_base_url = "https://habbit-tracker-nodejs.onrender.com/api";

export const getHabbits = createAsyncThunk(
  "habbit/getReport",
  async (_, thunkAPI) => {
    thunkAPI.dispatch(actions.loading());
    try {
      let api_url = api_base_url + "/get-habbits";
      let res = await fetch(api_url);
      if(res.status===200){
        res = await res.json();
        console.log(res);
        thunkAPI.dispatch(actions.setHabbits(res));
        }else{
          res = await res.json();
          console.log(res);
          thunkAPI.dispatch(actions.error(res.message));
        }
    } catch (error) {
      // console.log(error.responseJSON.message);
      thunkAPI.dispatch(actions.error(error.responseJSON.message));
    }
  }
);

export const createHabbit = createAsyncThunk(
  "habbit/createhabbit",
  async (payload, thunkAPI) => {
    thunkAPI.dispatch(actions.loading());
    try {
      let api_url = api_base_url + "/create-habbit";
      let res = await fetch(api_url, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      if(res.status===200){
      res = await res.json();
      console.log(res);
      thunkAPI.dispatch(actions.addHabbit(res));
      }else{
        res = await res.json();
        console.log(res);
        thunkAPI.dispatch(actions.error(res.message));
      }
    } catch (error) {
      // console.log(error.responseJSON.message);
      thunkAPI.dispatch(actions.error(error.responseJSON.message));
    }
  }
);

export const updateHabbitStatus = createAsyncThunk(
  "habbit/updateHabbitStatus",
  async (payload, thunkAPI) => {
    thunkAPI.dispatch(actions.loading());
    try {
      let api_url = api_base_url + "/update-habbit-status";
      let res = await fetch(api_url, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      if(res.status===200){
        res = await res.json();
        console.log(res);
        thunkAPI.dispatch(actions.updateHabbit(res));
        }else{
          res = await res.json();
          console.log(res);
          thunkAPI.dispatch(actions.error(res.message));
        }
    } catch (error) {
      // console.log(error.responseJSON.message);
      thunkAPI.dispatch(actions.error(error.responseJSON.message));
    }
  }
);

export const checkStatusOfDate = (habbit, checkDate) => {
  let check = habbit.tracks.filter((track) => track.date === checkDate);
  if (check.length) return check[0].status;
  return "None";
};

const habbitSlice = createSlice({
  name: "habbit",
  initialState,
  reducers: {
    loading: (state, action) => {
      state.isLoading = true;
      state.error = null;
      state.success = null;
    },
    setHabbits: (state, action) => {
      state.habbits = action.payload.data;
      state.isLoading = false;
      state.error = null;
      // state.success = action.payload.message;
    },
    addHabbit: (state, action) => {
      console.log(action.payload);
      state.habbits = [action.payload.data, ...state.habbits];
      state.isLoading = false;
      state.error = null;
      state.success = action.payload.message;
    },
    updateHabbit: (state, action) => {
      state.habbits = state.habbits.map((habbit) => {
        if (habbit._id === action.payload.data._id) {
          habbit = { ...action.payload.data };
        }
        return habbit;
      });
      state.isLoading = false;
      state.error = null;
      state.success = action.payload.message;
    },
    error: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.success = null;
    },
  },
});

export const habbitReducer = habbitSlice.reducer;

export const actions = habbitSlice.actions;

export const habbitSelector = (state) => state.habbitReducer;
