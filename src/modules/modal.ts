const OPEN_MODAL = 'modal/OPEN_MODAL' as const;
const CLOSE_MODAL = 'modal/CLOSE_MODAL' as const;

export const openModal = () => ({
    type: OPEN_MODAL,
    payload: true
});
export const closeModal = () => ({
    type: CLOSE_MODAL,
    payload: false
});

type ModalAction = 
    | ReturnType<typeof openModal>
    | ReturnType<typeof closeModal>;
type ModalState = boolean;

function Reducer (
    state: ModalState = false,
    action: ModalAction
): ModalState {
    if([OPEN_MODAL, CLOSE_MODAL].includes(action.type)) {
        state = action.payload;
    }
    return state;
}
export default Reducer;