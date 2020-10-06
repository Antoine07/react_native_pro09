const st = [
    { id: 1, name: "Alice", lessons: [1, 2], attendance: 0, notes: [11, 12, 18] },
    { id: 2, name: "Alan", lessons: [3], attendance: 0, notes: [10, 14.5, 11] },
    { id: 3, name: "Phil", lessons: [1, 2, 3], attendance: 0, notes: [11, 9, 9] },
    { id: 4, name: "Naoudi", lessons: [1], attendance: 0, notes: [14.5, 19, 18] },
    { id: 5, name: "Fenley", lessons: [3], attendance: 0, notes: [9, 7, 11] },
];

const st2 = [ ...st ];

st2[0].name = "ALICE"; // Fait mutter l'objet st la copie n'est pas profonde avec l'opérateur spread
console.log(st[0].name);

// Par contre si on crée un nouveau tableau et que l'on spread chaque sous objet la copie sera alors
// profonde de l'objet st copie distincte
const st3 = st.map( s => ( { ...s } ) );

st3[1].name = "ALAN"; // ne fait pas mutter st
console.log(st[1].name);