import React from 'react';
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import RadioButton from './radio-button.jsx';

Enzyme.configure({
  adapter: new Adapter(),
});

const props = {
  type: `radio`,
  groupName: `rating`,
  id: `1`,
  value: `5`,
  checked: true,
  label: `rating 5`
};

describe(`Test e2e RadioButton component`, () => {
  const onRadioChange = jest.fn();

  const radioBtn = shallow(
      <RadioButton
        {...props}
        onRadioChange={onRadioChange}
      />
  );

  const input = radioBtn.find(`.rating__input`);

  it(`Should radio button calls callback on action`, () => {
    input.simulate(`change`);
    expect(onRadioChange).toHaveBeenCalledTimes(1);
  });
});
