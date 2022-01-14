const { v4 } = require('uuid');

let contacts = [
  {
    id: v4(),
    name: 'Diego',
    email: 'diego@email.com',
    phone: '123123456',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Jose',
    email: 'jose@email.com',
    phone: '1231asdfasfas23456',
    category_id: v4(),
  },
];

class ContactsRepository {
  findAll() {
    // eslint-disable-next-line no-promise-executor-return
    return new Promise((resolve) => resolve(contacts));
  }

  findById(id) {
    // eslint-disable-next-line no-promise-executor-return
    return new Promise((resolve) => resolve(
      contacts.find((contact) => contact.id === id),
    ));
  }

  findByEmail(email) {
    // eslint-disable-next-line no-promise-executor-return
    return new Promise((resolve) => resolve(
      contacts.find((contact) => contact.email === email),
    ));
  }

  delete(id) {
    // eslint-disable-next-line no-promise-executor-return
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }

  create({
    name, email, phone, category_id,
  }) {
    // eslint-disable-next-line no-promise-executor-return
    return new Promise((resolve) => {
      const newContact = {
        id: v4(),
        name,
        email,
        phone,
        category_id,
      };

      contacts.push(newContact);
      resolve(newContact);
    });
  }

  update(id, {
    name, email, phone, category_id,
  }) {
    // eslint-disable-next-line no-promise-executor-return
    return new Promise((resolve) => {
      const updatedContact = {
        id,
        name,
        email,
        phone,
        category_id,
      };

      contacts = contacts.map((contact) => (
        contact.id === id ? updatedContact : contact
      ));

      resolve(updatedContact);
    });
  }
}

module.exports = new ContactsRepository();
