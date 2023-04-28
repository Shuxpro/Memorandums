import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {MemorandumStateType} from '../../../shared/types/Memorandumslice/MemorandumSlice';

const memorandumSlice = createSlice({
  name: 'memorandum',
  initialState: {
    memorandums: [
      {GUID: '1', title: 'memo 1', body: 'text1'},
    ] as MemorandumStateType[],
    selectedMemorandum: {} as MemorandumStateType,
  },
  reducers: {
    addMemorandum(state, action: PayloadAction<string>) {
      return {
        ...state,
        memorandums: [
          ...state.memorandums,
          {GUID: Date.now().toString(), title: action.payload},
        ],
      };
    },
    removeMemorandum(state, action: PayloadAction<string>) {
      return {
        ...state,
        memorandums: state.memorandums.filter(
          memorandum => memorandum.GUID !== action.payload,
        ),
      };
    },
    editMemorandum: (state, action: PayloadAction<MemorandumStateType>) => {
      const {title, body, GUID} = action.payload;

      if (!GUID) {
        return;
      }

      if (!title && !body) {
        return;
      }

      return {
        ...state,
        memorandums: state.memorandums.map(memorandum =>
          memorandum.GUID === GUID
            ? ({
                GUID: memorandum.GUID,
                title: title,
                body: body,
              } as MemorandumStateType)
            : memorandum,
        ),
      };
    },

    setMemorandum(state, action: PayloadAction<MemorandumStateType>) {
      return {
        ...state,
        selectedMemorandum: action.payload,
      };
    },
  },
});

export default memorandumSlice.reducer;
export const {addMemorandum, removeMemorandum, editMemorandum, setMemorandum} =
  memorandumSlice.actions;
