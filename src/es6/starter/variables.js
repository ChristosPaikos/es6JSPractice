export default function() {
  console.log(me);

  var me = { name: 'Milosz' };

  for (var index = 0; index < 10; index++) {
    setTimeout(function() {
      console.log('=====================');
      console.log('The index is: ', index);
    }, 500);
  }

}
