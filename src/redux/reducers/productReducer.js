import { ActionTypes } from '~/redux/contants/action-types';

const initialState = {
    product: [
        {
            id: 1,
            title: 'Dipesh',
            category: 'programmer',
        },
    ],
};

export const productReducer = (state, { payload, type }) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return state;
        default:
            return state;
    }
};
