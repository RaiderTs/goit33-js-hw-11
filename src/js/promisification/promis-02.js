const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: false },
];

const toggleUserState = (allUsers, username) => {
  return new Promise((onResolve, onReject) => {
    const success = true;
      if (success) {
          onResolve(
              allUsers.map(user => (user.name === username ? { ...user, active: !user.active } : user)),
          );
      } else {
        onReject(console.log("Error"))  
      }
  });
};

// Currently the function works like this
toggleUserState(users, 'Mango', console.table);
toggleUserState(users, 'Ajax', console.table);

// The function should work like this
toggleUserState(users, 'Mango').then(console.table);
toggleUserState(users, 'Ajax').then(console.table);


// body
const refs = {
  body: document.querySelector('body'),
};

refs.body.style.cssText = `background-color: ${getRandomHexColor()}`;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}