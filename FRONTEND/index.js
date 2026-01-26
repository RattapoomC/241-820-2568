function submitData() {

    // ดึง input ข้อมูลพื้นฐาน
    let firstnameDOM = document.querySelector('input[name="firstname"]');
    let lastnameDOM = document.querySelector('input[name="lastname"]');
    let ageDOM = document.querySelector('input[name="age"]');

    // ดึงเพศ (radio ที่ถูกเลือก)
    let genderDOM = document.querySelector('input[name="gender"]:checked');

    // ดึงงานอดิเรก (checkbox ที่ถูกติ๊กทั้งหมด)
    let interestDOMs = document.querySelectorAll('input[name="interest"]:checked');

    // ดึง textarea คำอธิบาย
    let descriptionDOM = document.querySelector('textarea[name="description"]');

    // แปลง checkbox เป็น array
    let interests = [];
    interestDOMs.forEach(item => {
        interests.push(item.value);
    });

    // รวมข้อมูลทั้งหมดเป็น object
    let usersData = {
        firstname: firstnameDOM.value,
        lastname: lastnameDOM.value,
        age: ageDOM.value,
        gender: genderDOM ? genderDOM.value : null, // กันกรณีไม่เลือก
        description: descriptionDOM.value,
        interests: interests
    };

    // แสดงผล
    console.log('submitData:', usersData);
}
