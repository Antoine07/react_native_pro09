
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