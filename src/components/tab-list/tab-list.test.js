import React from 'react';
import renderer from 'react-test-renderer';
import TabList from './tab-list.tsx';

const props = {
  activeTab: `Overview`,
  onTabClick: jest.fn(),
  tabNames: [`Something`, `Something Else`],
};

describe(`TabList component render correctly`, () => {
  it(`Should TabList component render correctly`, () => {
    const tree = renderer
      .create(
          <TabList
            {...props}
          />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
