import * as React from 'react';
import * as renderer from 'react-test-renderer';
import TabList from './tab-list';

const props = {
  activeTab: `Overview`,
  onTabClick: () => null,
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
