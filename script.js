let boton = document.getElementById('boton');
let table = document.getElementById('tableFetch');

boton.addEventListener('click', mostrarTabla);

async function mostrarTabla() {
    const infoPerson = table.querySelector('tbody');
    const response = await fetch("https://reqres.in/api/users?delay=3");
    const data = await response.json();

    infoPerson.innerHTML = null;
    for (const person of data['data'] ){
        let row = `
        <tr>
            <th scope="row">${person.id}</th>
                <td>${person.first_name}</td>
                <td>${person.last_name}</td>
                <td>${person.email}</td>
                <td><img src="${person.avatar}" class="avatar"></img></td>
        </tr>`
        infoPerson.innerHTML+=row;
    }
}
