import React from 'react';
import Enzyme, {shallow, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Input from './input.jsx';

Enzyme.configure({
  adapter: new Adapter(),
});

const props = {
  type: `radio`,
  groupName: `rating`,
  id: `1`,
  name: `email`,
  placeholder: `Email`,
  valid: true,
  value: `a@a.ru`,
  label: `Email`,
  touched: true,
  shouldValidate: true,
};

// wrapper.find('input').simulate('change', {target: {value: 'My new value'}});

describe(`Test e2e Input component`, () => {
  const onInputChange = jest.fn();

  it(`Should input calls callback on action`, () => {
    const inputComponent = shallow(
        <Input
          {...props}
          onInputChange={onInputChange}
        />
    );

    const input = inputComponent.find(`input`);

    input.simulate(`change`);
    expect(onInputChange).toHaveBeenCalledTimes(1);
  });

  it(`Should input calls callback with right value`, () => {
    const inputComponent = mount(
        <Input
          {...props}
          onInputChange={onInputChange}
        />
    );

    const input = inputComponent.find(`input`);

    input.simulate(`change`, {target: `ally@a.ru`});
    expect(inputComponent.find(`input`).props().value).toEqual(`ally@a.ru`);
  });
});
