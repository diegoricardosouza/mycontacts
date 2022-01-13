const { uuid } = require('uuidv4');

const contacts = [
  {
    id: uuid(),
    name: 'Diego',
    email: 'diego@email.com',
    phone: '123123456',
    category_id: uuid(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => resolve(contacts));
  }
}

module.exports = new ContactsRepository();
