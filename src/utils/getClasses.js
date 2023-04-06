export const getclasses =(classes)=>{
    return classes.filter((item) => item !=='  ').join('').trim();
}