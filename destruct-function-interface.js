// example

function des({
    age = 0,
    fullName: { aname, asurname } = {
         aname: "none", 
         asurname: "ovich" 
        },
  }) {
    return `
      age ${age}
      name ${fullName.aname}
      surname ${asurname} `;
  }

des({age: 1, fullName: {
    aname: "art",
    asurname: "sog"
}})
