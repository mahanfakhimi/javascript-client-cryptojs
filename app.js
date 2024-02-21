const user = {
  firstname: "john",
  lastname: "smith",
  car: "bmw",
  job: "web developer",
  email: "john@gmail.com",
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "12345",
  },
  phone: "555-1234",
  hobbies: ["reading", "coding"],
};

const key = CryptoJS.enc.Hex.parse("253D3FB468A0E24677C28A624BE0F939");
const iv = CryptoJS.enc.Hex.parse("00000000000000000000000000000000");

const encrypted = CryptoJS.AES.encrypt(JSON.stringify(user), key, {
  iv: iv,
});

console.log(encrypted.toString());

const decryptedBytes = CryptoJS.AES.decrypt(encrypted, key, { iv: iv });
const decryptedText = decryptedBytes.toString(CryptoJS.enc.Utf8);

console.log(decryptedText);
