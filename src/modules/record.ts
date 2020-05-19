const ADD_RECORD = 'record/ADD_RECORD' as const;
const REMOVE_RECORD = 'record/REMOVE_RECORD' as const;
const UPDATE_RECORD = 'record/UPDATE_RECORD' as const;

export const addRecord = (listId: string, record: Record) => ({
    type: ADD_RECORD,
    payload: {
        listId,
        id: new Date().getTime(),
        exercise: record.exercise,
        weight: record.weight,
        reps: record.reps
    }
});
export const removeRecord = (listId: string, id: number) => ({
    type: REMOVE_RECORD,
    payload: {
        listId,
        id
    }
});
export const updateRecord = (listId: string, record: Record) => ({
    type: UPDATE_RECORD,
    payload: {
        listId,
        id: record.id,
        exercise: record.exercise,
        weight: record.weight,
        reps: record.reps
    }
});

type RecordAction = 
    | ReturnType<typeof addRecord>
    | ReturnType<typeof removeRecord>
    | ReturnType<typeof updateRecord>;

export type Record = {
    listId: string;
    id: number;
    exercise: string;
    weight: number;
    reps: number;
}
export type RecordState = Record[];

// 로컬스토리지에 데이터 없으면 []
const initialState: RecordState = localStorage.exerciseRecord? JSON.parse(localStorage.exerciseRecord) : [];

// 리듀서
function Reducer (
    state: RecordState = initialState,
    action: RecordAction
): RecordState {
    let temp;
    switch (action.type) {
        case ADD_RECORD: 
            temp = state.concat({
                listId: action.payload.listId,
                id: action.payload.id,
                exercise: action.payload.exercise,
                weight: action.payload.weight,
                reps: action.payload.reps
            });
            break;
        case REMOVE_RECORD: 
            temp = state.filter(record => record.id !== action.payload.id); 
            break;
        case UPDATE_RECORD:
            temp = state.map(record => {
                if(record.id === action.payload.id) {
                    record.exercise = action.payload.exercise;
                    record.weight = action.payload.weight;
                    record.reps = action.payload.reps;
                }

                return record;
            });
            break;
        default:
            temp = state;
            break;
    }

    // 로컬스토리지 저장
    localStorage.exerciseRecord = JSON.stringify(temp);
    return temp;
}
export default Reducer;