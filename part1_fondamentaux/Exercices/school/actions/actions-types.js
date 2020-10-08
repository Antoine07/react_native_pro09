import {
    DECREMENT_ATTENDANCE,
    INCREMENT_ATTENDANCE,
    LOAD_SCHOOL_DATA,
    GET_STUDENT,
    TOGGLE_ORDER_NOTES, 
    LOADING, 
    SET_MENTION
} from '../constants/actions';

import { students, lessons } from '../school_data';

export const toggle_order_notes = () => {

    return { type: TOGGLE_ORDER_NOTES };
}

export const decrement_attendance = payload => {

    return { type: DECREMENT_ATTENDANCE, payload };
}

export const increment_attendance = payload => {

    return { type: INCREMENT_ATTENDANCE, payload };
}

export const get_student = payload => {

    return { type: GET_STUDENT, payload };
}

export const set_mention = payload => {

    return { type : SET_MENTION, payload} ;
}

// On consomme une API
export const load_school_data = payload => {

    console.log(payload)

    return { type: LOAD_SCHOOL_DATA, payload };
}

const error = false;
const getDataApiStudents = time => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ students });
    }, time);

    if (error) reject('error')
});

const getDataApiLessons = time => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ lessons });
    }, time);

    if (error) reject('error')
})

export const load_school_data_api = () => {

    return dispatch => {

        const load = async () => {
            dispatch(isloading(true));
            const { students } = await getDataApiStudents(500);
            const { lessons } = await getDataApiLessons(500);
            dispatch(load_school_data({ students, lessons }));
            dispatch(isloading(false));
        }

        // exécuter la fonction 
        load();

    }

}

export const isloading = payload => {

    return { type: LOADING, payload };
}

// code trop geek ...
// const average = notes => notes.length  === 0 ? null : Math.floor( notes.reduce( (curr, acc) => curr + acc ) / notes.length ) ;

// Il est préférable de faire un code plus lisible pour tous ... 
const average = (notes, decimal = 100) => {

    // on lève une exception si on a une valeur aberrante 
    if (decimal <= 0) throw new Error('Bad value decimal average function ...');

    if (notes.length === 0) return null;

    return Math.floor((notes.reduce((curr, acc) => curr + acc) / notes.length) * decimal) / decimal;
}


const copyStudents = state => state.students.map(s => ({ ...s }));

export { average, copyStudents };