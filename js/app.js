
const loadPhones = async (searchText) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    const res = await fetch(url);
    const data = await res.json();
    displayPhones(data.data);
};

const displayPhones = phones => {
    const phoneContainer = document.getElementById('phones-container');
    phoneContainer.innerText = "";
    phones.forEach(phone => {
        const phoneDiv = document.createElement('div');
        phoneDiv.classList.add('col');
        phoneDiv.innerHTML = `
        <div class="card p-4 rounded">
            <img src="${phone.image}" class="card-img-top carousel" alt="...">
            <div class="card-body">
                <h5 class="card-title">${phone.phone_name}</h5>
                <p class="card-text">${phone.brand}</p>
                <button type="button" class="btn btn-dark">More Info...</button>
        </div>
    `;
        phoneContainer.appendChild(phoneDiv);
    });
};

document.getElementById("button-addon2").addEventListener('click', ()=>{
    const searchField = document.getElementById("search-text");
    const searchText = searchField.value;
    loadPhones(searchText);
});

loadPhones();