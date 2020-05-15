// 액션 이름
const ADD_RECORD = 'list/ADD_RECORD' as const;
const REMOVE_RECORD = 'list/REMOVE_RECORD' as const;
const UPDATE_RECORD = 'list/UPDATE_RECORD' as const;

// 액션 생성 함수
let nextId = 1;
export const addRecord = (record: Record) => ({
    type: ADD_RECORD,
    payload: {
        id: nextId++,
        exercise: record.exercise,
        weight: record.weight,
        reps: record.reps
    }
});
export const removeRecord = (id: number) => ({
    type: REMOVE_RECORD,
    payload: id
});
export const updateRecord = (record: Record) => ({
    type: UPDATE_RECORD,
    payload: {
        id: record.id,
        exercise: record.exercise,
        weight: record.weight,
        reps: record.reps
    }
})

// 타입
type ListAction = 
    | ReturnType<typeof addRecord>
    | ReturnType<typeof removeRecord>
    | ReturnType<typeof updateRecord>;

export type Record = {
    id: number;
    exercise: string;
    weight: number;
    reps: number;
}
export type ListState = Record[];

// 로컬스토리지에 데이터 없으면 []
const initialState: ListState = JSON.parse(localStorage.exerciseManager) || [];

// 리듀서
function Reducer (
    state: ListState = initialState,
    action: ListAction
): ListState {
    let temp;
    switch (action.type) {
        case ADD_RECORD: 
            temp = state.concat({
                id: action.payload.id,
                exercise: action.payload.exercise,
                weight: action.payload.weight,
                reps: action.payload.reps
            });
            break;
        case REMOVE_RECORD: 
            temp = state.filter(record => record.id !== action.payload); 
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
    localStorage.exerciseManager = JSON.stringify(temp);
    return temp;
}
export default Reducer;