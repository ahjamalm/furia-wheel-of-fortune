import { createAction } from 'redux-action';
const moment = require('moment-timezone');
moment.tz.setDefault('Asia/Riyadh')

export const SET_LOG = 'SET_LOG';
export const RESET_LOG = 'RESET_LOG';

export const SetLogRecord = createAction(SET_LOG, (data) => {
    return data
});
export const ResetLog = createAction(RESET_LOG, (data) => {
    return data
});
const initial = {
    records: {}
};

let ex = (state = initial, action) => {
    switch (action.type) {
        case SET_LOG:
            console.log("state?.records",state?.records);
            let date = moment().format('DD/MM/yyyy')
            console.log("datedate", date);
            let dateRecord = state?.records?.[date] || []
            return { ...state, records: { ...state.records, [date]: [...dateRecord, action.payload] } }
        case RESET_LOG:
            return { ...state, records: {} }
        default:
            return state;
    }
};
export default ex