const profilePerson = {
  name: 'taufik',
  age: 19,
  coords: {
    lat: 12,
    lng: 20,
  },
  setAge(newAge: number): void {
    this.age = newAge;
  },
};

const { age }: { age: number } = profilePerson;
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profilePerson;

console.log(age);
console.log(lat);
console.log(lng);
