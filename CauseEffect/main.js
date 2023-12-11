const people = [
  { name: "Alice", street: "123 Street", city: "CityA", state: "StateA", country: "CountryA", telephone: "1234567890", birthday: "01/01/1990" },
  { name: "Bob", street: "456 Street", city: "CityB", state: "StateB", country: "CountryB", telephone: "0987654321", birthday: "02/02/1995" },
];

const renderList = (peopleList) => {
  const namesList = document.getElementById('names-list');
  namesList.innerHTML = peopleList.map(person => `<li>${person.name}</li>`).join('');
};

const showDetails = (person) => {
  const detailsPane = document.getElementById('details-pane');
  detailsPane.innerHTML = `
    <h2>${person.name}</h2>
    <p>Address: ${person.street}, ${person.city}, ${person.state}, ${person.country}</p>
    <p>Telephone: ${person.telephone}</p>
    <p>Birthday: ${person.birthday}</p>
  `;
};

const sortPeople = (key) => [...people].sort((a, b) => a[key] > b[key] ? 1 : -1);

const filterPeopleByName = (query) => people.filter(person => person.name.toLowerCase().includes(query.toLowerCase()));

const handleSearch = (event) => {
  const filteredPeople = filterPeopleByName(event.target.value);
  renderList(filteredPeople);
};

const handleSort = (event) => {
  const sortedPeople = sortPeople(event.target.value);
  renderList(sortedPeople);
};

document.getElementById('search').addEventListener('input', handleSearch);
document.getElementById('sort').addEventListener('change', handleSort);

renderList(people);
showDetails(people[0]);
