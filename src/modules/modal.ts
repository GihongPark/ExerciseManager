import { Record } from './list';

const OPEN_ADD_RECORD = 'modal/OPEN_ADD_RECORD' as const;
const OPEN_UPDATE_RECORD = 'modal/OPEN_UPDATE_RECORD' as const;
const CLOSE_MODAL = 'modal/CLOSE_MODAL' as const;

export const openAddInput = (
    id: string,
) => ({
    type: OPEN_ADD_RECORD,
    payload: {
        state: 'ADD_RECORD',
        data: {
            id
        }
    }
});

export const openUpdateInput = (
    id: string,
    record: Record
) => ({
    type: OPEN_UPDATE_RECORD,
    payload: {
        state: 'UPDATE_RECORD',
        data: {
            id,
            record
        }
    }
})
export const closeModal = () => ({
    type: CLOSE_MODAL,
    payload: {
        state: 'CLOSE_MODAL'
    }
});

type ModalAction = 
    | ReturnType<typeof openAddInput>
    | ReturnType<typeof openUpdateInput>
    | ReturnType<typeof closeModal>;

// TODO: 타입선언
type ModalState = {
    state: string;
    data?: {
        id: string;
        record?: Record
    };
};

const initialState: ModalState = {
    state: 'CLOSE_MODAL'
}


function Reducer (
    state: ModalState = initialState,
    action: ModalAction
): ModalState {
    switch (action.type) {
        // TODO: 리턴값
        case OPEN_ADD_RECORD:
            return {
                state: action.payload.state,
                data: action.payload.data
            };
        case OPEN_UPDATE_RECORD:
            return {
                state: action.payload.state,
                data: action.payload.data
            };
        case CLOSE_MODAL:
            return {
                state: action.payload.state
            };
        default:
            return state;
    }
}
export default Reducer;