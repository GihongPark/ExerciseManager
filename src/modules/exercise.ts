import { initExercise } from './exercise.json';

const ADD_EXERCISE = 'kind/ADD_EXERCISE' as const;
const REMOVE_EXERCISE = 'kind/REMOVE_EXERCISE' as const;
const UPDATE_EXERCISE = 'kind/UPDATE_EXERCISE' as const;


export const addExercise = (
    name: string,
    section: string
) => ({
    type: ADD_EXERCISE,
    payload: {
        id: `${section}_${new Date().getTime()}`,
        name,
        section,
        lately: {
            weight: 0,
            reps: 0
        }
    }
});
export const removeExercise = ( id: string ) => ({
    type: REMOVE_EXERCISE,
    payload: id
});
export const updateExercise = (
    id: string,
    name: string,
    section: string
) => ({
    type: UPDATE_EXERCISE,
    payload: {
        id,
        name,
        section
    }
})

type ExerciseAction = 
    | ReturnType<typeof addExercise>
    | ReturnType<typeof removeExercise>
    | ReturnType<typeof updateExercise>;

export type Exercise = {
    id: string,
    name: string;
    section: string;
    lately: {
        weight: number;
        reps: number;
    }
}
type ExerciseState = Exercise[];

const initialState: ExerciseState = localStorage.exerciseKind? JSON.parse(localStorage.exerciseKind) : initExercise;

// 리듀서
function Reducer (
    state: ExerciseState = initialState,
    action: ExerciseAction
):ExerciseState {
    let temp;
    switch (action.type) {
        case ADD_EXERCISE:
            temp = state.concat({
                id: action.payload.id,
                name: action.payload.name,
                section: action.payload.section,
                lately: action.payload.lately
            });
            break;
        case REMOVE_EXERCISE:
            temp = state.filter(exercise => exercise.id !== action.payload);
            break;
        case UPDATE_EXERCISE:
            temp = state.map(exercise => {
                if(exercise.id === action.payload.id) {
                    exercise = {
                        ...exercise,
                        name: action.payload.name,
                        section: action.payload.section
                    }
                }
                return exercise;
            })
            break;
        default:
            temp = state;
            break;
    }

    // 로컬스토리지 저장
    localStorage.exerciseKind = JSON.stringify(temp);
    return temp;
}
export default Reducer;