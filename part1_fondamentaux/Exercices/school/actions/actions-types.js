import { 
    DECREMENT_ATTENDANCE, 
    INCREMENT_ATTENDANCE,
    LOAD_SCHOOL_DATA,
    GET_STUDENT,
    TOGGLE_ORDER_NOTES
} from '../constants/actions';



export const toggle_order_notes = () => {

    return { type: TOGGLE_ORDER_NOTES };
}

export const decrement_attendance = payload => {

    return { type: 'DECREMENT_ATTENDANCE', payload };
}

export const increment_attendance = payload => {

    return { type: 'INCREMENT_ATTENDANCE', payload };
}

export const get_student = payload => {

    return { type: 'GET_STUDENT', payload };
}

export const load_school_data = payload => {

    return { type : 'LOAD_SCHOOL_DATA', students, lessons} ;
}

// code trop geek ...
// const average = notes => notes.length  === 0 ? null : Math.floor( notes.reduce( (curr, acc) => curr + acc ) / notes.length ) ;

// Il est préférable de faire un code plus lisible pour tous ... 
const average = (notes, decimal = 100)  => {

    // on lève une exception si on a une valeur aberrante 
    if(decimal <= 0) throw new Error('Bad value decimal average function ...');

    if( notes.length === 0  )  return null;

    return Math.floor( (notes.reduce( (curr, acc) => curr + acc ) / notes.length ) * decimal) / decimal;
}


const copyStudents = state => state.students.map(s => ({ ...s }));

export { average, copyStudents };