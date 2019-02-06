import { SET_TEXTS } from '../../utils/CONST';

const intialState = {}

export default (state = intialState, action = {}) => {
    switch (action.type) {
        case SET_TEXTS:
            return action.texts;
            
        default: return state;
    }
}
