import { average, copyStudents } from '../actions/actions-types';
import {
    DECREMENT_ATTENDANCE,
    INCREMENT_ATTENDANCE,
    LOAD_SCHOOL_DATA,
    GET_STUDENT,
    TOGGLE_ORDER_NOTES,
    SET_MENTION
} from '../constants/actions';

const initialState = {
    students: [],
    lessons: [],
    behaviours: [],
    order: false,
    lastId: null,
    student: null,
    mention: 'Aucune'
};

export default (state = initialState, action = {}) => {

    switch (action.type) {

        case LOAD_SCHOOL_DATA:
            const { students, lessons } = action.payload;

            console.log(action, students, lessons, 'reducer');
            // décomposition pour assignation de clé tableau de littéraux
            const [{ id: lastId }] = students.slice(-1);

            return {
                ...state,
                students,
                lessons,
                lastId
            }

        case DECREMENT_ATTENDANCE:
        case INCREMENT_ATTENDANCE:
            const { id, sens } = action.payload;

            const st = state.students
                .map(s => ({ ...s })) // on copie 
                .map(s => {
                    // Diviser pour mieux reigner => plus simple pour trouver un algo 
                    // que l'on comprend
                    // if (s.id === id && parseInt(sens) > 0)
                    //     s.attendance += sens;

                    // if (s.id === id && parseInt(sens) < 0)
                    //     s.attendance = s.attendance === 0 ? 0 : s.attendance += sens;

                    // Puis on passe à la phase de refactoring ...
                    if (s.id === id) {
                        s.attendance = parseInt(sens) > 0 ? s.attendance += sens : (
                            s.attendance === 0 ? 0 : s.attendance += sens
                        )
                    }

                    return s;
                });

            return {
                ...state,
                students: st,
                student: st.find(student => student.id === id)
            }

        case SET_MENTION:

            const { mention, id: mentionId } = action.payload;

            const behaviours = state.behaviours.map(b => ({ ...b }));

            const studentMention = behaviours.find(b => b.id === mentionId);

            if (studentMention) studentMention.mention = mention;
            else behaviours.push({ id : mentionId, mention });   

            return {
                ...state,
                mention,
                behaviours
            }

        case GET_STUDENT:

            const { id: studentId } = action.payload;
            const student = state.students.find(student => student.id === studentId);

            return {
                ...state,
                student
            }

        case TOGGLE_ORDER_NOTES:

            const studentsOrder = copyStudents(state);

            const orderAsc = (a, b) => average(a.notes) - average(b.notes);
            const orderDesc = (a, b) => average(b.notes) - average(a.notes);

            if (state.order === true)
                studentsOrder.sort(orderAsc);
            else
                studentsOrder.sort(orderDesc);

            return {
                ...state,
                students: studentsOrder,
                order: !state.order
            }

        default:
            return state;
    }
}