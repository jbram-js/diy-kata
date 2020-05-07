const joinNames = namesObj => {
   let allNames;
   const getNames = namesObj.map(a => a.name); 

   if (getNames.length === 1) {
       allNames = getNames[0]
   }

   if (getNames.length === 2) {
    allNames = `${getNames[0]} & ${getNames[1]}`
}

if (getNames.length > 2) {
    allNames = `${getNames.slice(0, -1).join(", ")} & ${getNames.slice(-1)}`
}

return allNames;
};

module.exports = joinNames;
