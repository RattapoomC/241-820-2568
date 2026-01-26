function handleSubmit() {
    let firstNameDOM = document.querySelector('#firstname');
    let lastNameDOM = document.querySelector('#lastname');
    let genderDOM = document.querySelector('input[name="gender"]:checked');
    let hobbyDOMs = document.querySelectorAll('input[name="hobby"]:checked');

    let hobbies = [];
    hobbyDOMs.forEach(h => hobbies.push(h.value));

    let userData = {
        firstName: firstNameDOM.value,
        lastName: lastNameDOM.value,
        gender: genderDOM.value,
        hobbies: hobbies
    };

    console.log('submit data:', userData);
}
