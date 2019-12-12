// Actions
export const types = {
    CHANGE: 'changeValue',
    ADD: 'addItem',
    REMOVE: 'removeItem'
};
// 状态
const initState = {
    inputValue: '',
    list: ['初始项目']
}
// Reducer
export default function reducer(state = initState, action) {
    let newState = {}
    switch (action.type) {
        case types.CHANGE:
            newState = JSON.parse(JSON.stringify(state));
            newState.inputValue = state.value;
            return newState;
        case types.ADD:
            newState = JSON.parse(JSON.stringify(state));
            if (newState.inputValue) {
                newState.list.push(newState.inputValue)
                newState.inputValue = '';
                return newState
            }
        case types.REMOVE:
            newState = JSON.parse(JSON.stringify(state));
            newState.list.splice(action.index, 1);
            return newState;
        default: return state
    }
}

// Action Creator
export const actions = {
    changeInputAction: function(value) {
        return {
            type: types.CHANGE,
            value
        }
    },
    addInputAction: function(value) {
        return {
            type: types.ADD,
            value
        }
    },
    deleteInputAction: function(value) {
        return {
            type: types.REMOVE,
            value
        }
    }
}