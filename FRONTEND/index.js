const BASE_URL = "http://localhost:8000";

const submitData = async () => {
    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const age = document.getElementById("age").value;
    const description = document.getElementById("description").value;

    const genderDOM = document.querySelector('input[name="gender"]:checked');
    const gender = genderDOM ? genderDOM.value : "";

    const interestDOMs = document.querySelectorAll('input[name="interest"]:checked');
    let interests = [];
    interestDOMs.forEach(i => interests.push(i.value));

    const data = {
        firstname,
        lastname,
        age,
        gender,
        interests,
        description
    };

    try {
        await axios.post(`${BASE_URL}/users`, data);
        alert("ส่งข้อมูลสำเร็จ 🔥");
        window.location.href = "user.html";
    } catch (error) {
        console.error(error);
        alert("ส่งข้อมูลไม่สำเร็จ 💀");
    }
};