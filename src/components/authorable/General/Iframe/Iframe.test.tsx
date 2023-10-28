// Lib
import { snapshot, hasDataComponent, renderComponent } from 'lib/testing/utils';

// Local
import Iframe from './Iframe';
import defaultData, { noData } from './Iframe.mock-data';

it('renders correctly', () => {
  const component = snapshot(Iframe, { componentProps: defaultData });
  hasDataComponent(component, 'authorable/general/Iframe');
});

it('does not render without data', () => {
  const component = renderComponent(Iframe, { componentProps: noData });
  const text = component.queryByTestId('Iframe');
  expect(text).toBe(null);
});
