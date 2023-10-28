// Lib
import { snapshot, hasDataComponent, renderComponent } from 'lib/testing/utils';

// Local
import Tabs from './Tabs';
import defaultData, { noData } from './Tabs.mock-data';

it('renders correctly', () => {
  const component = snapshot(Tabs, { componentProps: defaultData });
  hasDataComponent(component, 'authorable/general/Tabs');
});

it('does not render without data', () => {
  const component = renderComponent(Tabs, { componentProps: noData });
  const text = component.queryByTestId('Tabs');
  expect(text).toBe(null);
});
