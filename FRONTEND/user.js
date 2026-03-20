const BASE_URL = "http://localhost:8000";

window.onload = async () => {
    await loadData();
};

const loadData = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/users`);

        const userDOM = document.getElementById("user");
        let htmlData = "<div>";

        for (let i = 0; i < response.data.length; i++) {
            let user = response.data[i];

            htmlData += `
            <div>
                ${user.id} ${user.firstname} ${user.lastname}
                <button class="delete" data-id="${user.id}">Delete</button>
            </div>
            `;
        }

        htmlData += <div class="record">
    <div class="record-main">
        <div class="record-text">
            <b>${user.firstname}</b> ${user.lastname}
        </div>

        <div class="actions">
            <button class="delete-btn" data-id="${user.id}">ลบ</button>
        </div>
    </div>
</div>;
        userDOM.innerHTML = htmlData;

        const deleteDOMs = document.getElementsByClassName("delete");

        for (let i = 0; i < deleteDOMs.length; i++) {
            deleteDOMs[i].addEventListener("click", async (event) => {
                const id = event.target.dataset.id;

                try {
                    await axios.delete(`${BASE_URL}/users/${id}`);
                    loadData();
                } catch (error) {
                    console.error(error);
                }
            });
        }

    } catch (error) {
        console.error(error);
    }
};