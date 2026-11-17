const getAge = function (birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
};


const findTheOldest = function(people) {

   const oldest = people.reduce((a,b) => {
        return getAge(a.yearOfBirth,a.yearOfDeath) > getAge(b.yearOfBirth,b.yearOfDeath) ? a : b;
    });

   return oldest;

};

// Do not edit below this line
module.exports = findTheOldest;
