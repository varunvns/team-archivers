// Lib
import { snapshot, hasDataComponent, renderComponent } from 'lib/testing/utils';

// Local
import Card from './Card';
import defaultData, { noData } from './Card.mock-data';

it('renders correctly', () => {
  const component = snapshot(Card, { componentProps: defaultData });
  hasDataComponent(component, 'authorable/general/Card');
});

it('does not render without data', () => {
  const component = renderComponent(Card, { componentProps: noData });
  const text = component.queryByTestId('Card');
  expect(text).toBe(null);
});
