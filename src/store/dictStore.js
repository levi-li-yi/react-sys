// Actions
export const types = {
    CHANGE: 'changeValue',
    ADD: 'addItem',
    REMOVE: 'removeItem'
};
// 状态
const initState = {
    inputTypeValue: '123',
    typeList: ['项目']
}
// Reducer
export function dictReducer(state = initState, action) {
    if (action.type === types.CHANGE) {
        let newState = JSON.parse(JSON.stringify(state));
        newState.inputTypeValue = action.value;
        return newState;
    }
    if (action.type === types.ADD) {
        let newState = JSON.parse(JSON.stringify(state));
        if (newState.inputTypeValue) {
            newState.typeList.push(newState.inputTypeValue)
            newState.inputTypeValue = '';
            return newState
        }
    }
    if (action.type === types.REMOVE) {
        let newState = JSON.parse(JSON.stringify(state));
        newState.typeList.splice(action.index, 1);
        return newState;
    }
    return state
}

// Action Creator
export const dictAction = {
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