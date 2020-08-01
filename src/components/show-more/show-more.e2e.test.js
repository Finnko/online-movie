import React from 'react';
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ShowMore from './show-more.tsx';

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`Test e2e ShowMore component`, () => {
  const onButtonClick = jest.fn();

  const showMoreWrapper = shallow(
      <ShowMore
        offset={4}
        onButtonClick={onButtonClick}
      />
  );

  const button = showMoreWrapper.find(`.catalog__button`);

  it(`Should button be pressed correctly`, () => {
    button.simulate(`click`);
    expect(onButtonClick).toHaveBeenCalledTimes(1);
  });

  it(`Should button info passed correctly on click`, () => {
    button.simulate(`click`);
    expect(onButtonClick).toHaveBeenCalledWith(4);
  });
});
