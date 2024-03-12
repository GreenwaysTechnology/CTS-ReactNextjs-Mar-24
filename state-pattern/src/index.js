//pure function Rule B

function updateProfile(city, profile) {
    // //return new object
    // return {
    //     name: profile.name,
    //     city: city
    // }
    //Object.assign 
    //return Object.assign({}, profile, { city: city })
    //return { ...profile, city: city }
    return { ...profile, city }
}

let profile = {
    name: 'Subramanian',
    city: 'Coimbatore'
}

console.log('before update', profile)
const result = updateProfile('Chennai', profile)
console.log(profile === result ? "Same Object" : "Different Object")
console.log('after update', result)
