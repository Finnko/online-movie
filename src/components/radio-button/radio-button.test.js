import React from 'react';
import renderer from 'react-test-renderer';
import RadioButton from './radio-button.jsx';

const props = {
  type: `radio`,
  groupName: `rating`,
  id: `1`,
  value: `5`,
  checked: true,
  label: `rating 5`,
  onRadioChange: () => {},
};

describe(`RadioButton component render correctly`, () => {
  it(`Should RadioButton component render correctly`, () => {
    const tree = renderer
      .create(
          <RadioButton {...props}/>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
