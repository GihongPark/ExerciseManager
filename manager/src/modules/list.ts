const ADD_LIST = 'list/ADD_LIST' as const;
const REMOVE_LIST = 'list/REMOVE_LIST' as const;
const UPDATE_TITLE = 'list/UPDATE_TITLE' as const;

const ADD_RECORD = 'record/ADD_RECORD' as const;
const REMOVE_RECORD = 'record/REMOVE_RECORD' as const;
const UPDATE_RECORD = 'record/UPDATE_RECORD' as const;

let id = () => `${Math.floor(Math.random() * 9999)}_${Math.floor(Math.random() * 9999)}_${Math.floor(Math.random() * 9999)}`;
export const addList = () => ({
    type: ADD_LIST,
    payload: {
        id: id(),
        title: '',
        date: new Date(),
        records: []
    }
});
export const removeList = (id: string) => ({
    type: REMOVE_LIST,
    payload: id
});
export const updateTitle = (
    id: string,
    title: string
    ) => ({
    type: UPDATE_TITLE,
    payload: {
        id,
        title,
    }
});

export const addRecord = (
    id: string,
    record: Record
    ) => ({
    type: ADD_RECORD,
    payload: {
        id: id,
        record: {
            id: `${id}_${new Date().getTime()}`,
            exercise: record.exercise,
            weight: record.weight,
            reps: record.reps
        }
    }
});
export const removeRecord = (
    id: string,
    recordId: string
    ) => ({
    type: REMOVE_RECORD,
    payload: {
        id: id,
        record: {
            id: recordId
        }
    }
});
export const updateRecord = (
    id: string,
    record: Record
    ) => ({
    type: UPDATE_RECORD,
    payload: {
        id: id,
        record: {
            id: record.id,
            exercise: record.exercise,
            weight: record.weight,
            reps: record.reps
        }
    }
});

type ListAction = 
    | ReturnType<typeof addList>
    | ReturnType<typeof removeList>
    | ReturnType<typeof updateTitle>
    | ReturnType<typeof addRecord>
    | ReturnType<typeof removeRecord>
    | ReturnType<typeof updateRecord>;

export type List = {
    id: string;
    title: string;
    date: Date;
    records: Record[]
}
export type Record = {
    id: string;
    exercise: string;
    weight: number;
    reps: number;
}
export type ListState = List[];

const initialState: ListState = localStorage.exerciseManager? JSON.parse(localStorage.exerciseManager) : [];

function Reducer (
    state: ListState = initialState,
    action: ListAction
): ListState {
    let temp;
    switch (action.type) {
        case ADD_LIST: 
            temp = state.concat({
                id: action.payload.id,
                title: action.payload.title,
                date: action.payload.date,
                records: action.payload.records
            });
            break;
        case REMOVE_LIST: 
            temp = state.filter(list => list.id !== action.payload); 
            break;
        case UPDATE_TITLE:
            temp = state.map(list => {
                if(list.id === action.payload.id) {
                    list = {
                        ...list,
                        title: action.payload.title
                    }
                }
                return list;
            });
            break;
        // TODO: list에서 record분리해서 관리하는 방법 고민
        case ADD_RECORD:
            temp = state.map(list => {
                if(list.id === action.payload.id) {
                    list = {
                        ...list,
                        records: [...list.records, action.payload.record]
                    }
                }
                return list;
            });
            break;
        case REMOVE_RECORD:
            temp = state.map(list => {
                if(list.id === action.payload.id) {
                    list = {
                        ...list,
                        records: list.records.filter(record => record.id !== action.payload.record.id)
                    }
                }
                return list;
            });
            break;
        case UPDATE_RECORD:
            temp = state.map(list => {
                if(list.id === action.payload.id) {
                    list = {
                        ...list,
                        records: list.records.map(record => {
                            if(record.id === action.payload.record.id) {
                                return action.payload.record
                            }
                            return record;
                        })
                    }
                }
                return list;
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