export { default as Title } from './Title';
export { default as Content } from './Content';
export { default as PublishButton } from './PublishButton';

const array = ["a"];
console.log(array);

array.push("b");

console.clear();
console.log(Object.is(array, array))