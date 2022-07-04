import { ActionTypes } from '~/redux/contants/action-types';

const initialState = {
    product: [],
};

export const productReducer = (state = initialState, { payload, type }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCT:
            return { ...state, product: payload };
        default:
            return state;
    }
};

export const selectedProductReducer = (state = {}, { payload, type }) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return { ...state, ...payload };
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {};
        default:
            return state;
    }
};
