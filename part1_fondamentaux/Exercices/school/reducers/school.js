const initialState = {
    students: [],
    lessons: [],
    behaviours: [],
    order: false,
    lastId: null
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

        default:
            return state;
    }
}