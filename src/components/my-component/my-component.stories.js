import readme from './readme.md';
import {text, withKnobs} from '@storybook/addon-knobs';
export default {
  title: 'Button',
  argTypes: {
    firstName: {control: {type: 'text'}},
    middleName: {control: {type: 'text'}},
    lastName: {control: {type: 'text'}}
  }
  
};

export const Simple = ({firstName, middleName, lastName}) => {
  return `<my-component first="${firstName}" middle="${middleName}" last="${lastName}"></my-component>`;
}

Simple.args = {
  firstName: 'Hello',
  middleName: 'There',
  lastName: 'Nice to meet you'
}
// storiesOf('Button', module)
//   .add('Simple', () => `
//     <my-component first='Sidharth' last='Ramesh'></my-component>
//   `)
