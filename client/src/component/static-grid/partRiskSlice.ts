import {
    combineReducers,
    createAsyncThunk,
    createSlice,
    PayloadAction,
} from "@reduxjs/toolkit";
import axios from "axios";

interface PartRiskSlice {
    loading: boolean;
    partRisk: any | null;
    errors: any;
    partRiskColumnDefinition: any | null;
    causeType: any | null;
    severity: any | null;
    occurrence: any | null;
    fmecaHeader: any | null;
    fmecaNotes: any | null;
}



const initialState: PartRiskSlice = {
    loading: false,
    partRisk: null,
    errors: null,
    partRiskColumnDefinition: null,
    causeType: null,
    severity: null,
    occurrence: null,
    fmecaHeader: null,
    fmecaNotes: null,

};

export const getPartRisk = createAsyncThunk<any, number>(
    "@@systemFmeca/getPartRisk",
    async (id, thunkAPI) => {
        try {
            const response = await axios.get(`http://localhost:8080/PartRisk`);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);
export const getPartRiskColumnDefinition = createAsyncThunk<any, number>(
    "@@systemFmeca/getPartRiskColumnDefinition",
    async (id, thunkAPI) => {
        try {
            const response = await axios.get(`http://localhost:8080/PartRiskColumnDefinition`);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);
export const getCauseType = createAsyncThunk<any, number>(
    "@@systemFmeca/getCauseType",
    async (id, thunkAPI) => {
        try {
            const response = await axios.get(`http://localhost:8080/CauseType`);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);
export const getSeverity = createAsyncThunk<any, number>(
    "@@systemFmeca/getSeverity",
    async (id, thunkAPI) => {
        try {
            const response = await axios.get(`http://localhost:8080/Severity`);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);
export const getOccurrence = createAsyncThunk<any, number>(
    "@@systemFmeca/getOccurrence",
    async (id, thunkAPI) => {
        try {
            const response = await axios.get(`http://localhost:8080/Occurrence`);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);
const partRiskSlice = createSlice({
    name: "partRisk",
    initialState,
    reducers: {
        // setCauseType: (state, action: PayloadAction<any[]>) => {
        //     state.causeType = action.payload
        // },
    },
    extraReducers: (builder) => {
        builder.addCase(getPartRisk.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getPartRisk.fulfilled, (state, action) => {
            state.partRisk = action.payload;
            state.loading = false;
        });
        builder.addCase(getPartRisk.rejected, (state, action) => {
            state.loading = false;
            state.errors = action.payload;
        });
        builder.addCase(getPartRiskColumnDefinition.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getPartRiskColumnDefinition.fulfilled, (state, action) => {
            state.partRiskColumnDefinition = action.payload;
            state.loading = false;
        });
        builder.addCase(getPartRiskColumnDefinition.rejected, (state, action) => {
            state.loading = false;
            state.errors = action.payload;
        });
        builder.addCase(getCauseType.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getCauseType.fulfilled, (state, action) => {
            state.causeType = action.payload;
            state.loading = false;
        });
        builder.addCase(getCauseType.rejected, (state, action) => {
            state.loading = false;
            state.errors = action.payload;
        });
        builder.addCase(getSeverity.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getSeverity.fulfilled, (state, action) => {
            state.severity = action.payload;
            state.loading = false;
        });
        builder.addCase(getSeverity.rejected, (state, action) => {
            state.loading = false;
            state.errors = action.payload;
        });
        builder.addCase(getOccurrence.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getOccurrence.fulfilled, (state, action) => {
            state.occurrence = action.payload;
            state.loading = false;
        });
        builder.addCase(getOccurrence.rejected, (state, action) => {
            state.loading = false;
            state.errors = action.payload;
        });
    },
});



export default partRiskSlice.reducer;