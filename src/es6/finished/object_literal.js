export default () => {
  const name = 'Milosz';
  const surname = 'Frejnik';
  const married = 'Married';
  const activity = 'cycle';

  const person = {
    name,
    surname,
    maritalStatus: married,
    kids: ['Jurek', 'Eliza', 'Alicja'],
    run() {
      console.log('🏃🏻‍♂️');
    },
    [activity]() {
      console.log('🚴‍♂️');
    }
  }

  console.log(person);
  person.cycle();
  person.run();
}
