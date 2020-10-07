import { average, copyStudents } from '../actions/actions-types';

const initialState = {
    students: [],
    lessons: [],
    behaviours: [],
    order: false,
    lastId: null,
    student: null
};

// Copie l'objet initialState dans copyInitialState copie profonde
// elle permettra d'avoir un objet copyInitialState distinct d'initialState
const copyInitialState = JSON.parse(JSON.stringify(initialState));

export default (state = initialState, action = {}) => {

    switch (action.type) {

        case 'LOAD_SCHOOL_DATA':
            const { students, lessons } = action;
            // décomposition pour assignation de clé tableau de littéraux
            const [{ id: lastId }] = students.slice(-1);

            return {
                ...state,
                students,
                lessons,
                lastId
            }

        case 'DECREMENT_ATTENDANCE':
        case 'INCREMENT_ATTENDANCE':
            const { id, sens } = action;

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

        case 'GET_STUDENT':
            const { id: studentId } = action;
            const student = state.students.find(student => student.id === studentId);

            return {
                ...state,
                student
            }

        case 'TOGGLE_ORDER_NOTES':

            console.log(action )

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
                order : !state.order
            }

        default:
            return state;
    }
}