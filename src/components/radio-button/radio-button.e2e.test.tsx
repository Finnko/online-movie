import * as React from 'react';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import RadioButton from './radio-button';

Enzyme.configure({
  adapter: new Adapter(),
});

const props = {
  type: `radio`,
  groupName: `rating`,
  id: `1`,
  value: `5`,
  checked: true,
  disabled: false,
  label: `rating 5`
};

describe(`Test e2e RadioButton component`, () => {
  const onRadioChange = jest.fn();

  const radioBtn = Enzyme.shallow(
      <RadioButton
        {...props}
        onRadioChange={onRadioChange}
      />
  );

  const mockEvent = {target: {value: `5`}};
  const input = radioBtn.find(`.rating__input`);

  it(`Should radio button calls callback on action`, () => {
    input.simulate(`change`, mockEvent);
    expect(onRadioChange).toHaveBeenCalledTimes(1);
    expect(onRadioChange).toHaveBeenCalledWith(mockEvent);
  });
});
