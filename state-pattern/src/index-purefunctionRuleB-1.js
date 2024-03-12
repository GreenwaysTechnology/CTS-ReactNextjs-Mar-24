//pure function Rule B

//impure function
function updateProfile(city, profile) {
    //update profile city 
    profile.city = city
 
    return profile
}

let profile = {
    name: 'Subramanian',
    city: 'Coimbatore'
}

console.log('before update', profile)
const result = updateProfile('Chennai', profile)
console.log(profile === result ? "Same Object" : "Different Object")
console.log('after update', result)
