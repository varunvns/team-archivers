// Lib
import { snapshot, hasDataComponent, renderComponent } from 'lib/testing/utils';

// Local
import Breadcrumb from './Breadcrumb';
import defaultData, { noData } from './Breadcrumb.mock-data';

it('renders correctly', () => {
  const component = snapshot(Breadcrumb, { componentProps: defaultData });
  hasDataComponent(component, 'authorable/general/Breadcrumb');
});

it('does not render without data', () => {
  const component = renderComponent(Breadcrumb, { componentProps: noData });
  const text = component.queryByTestId('Breadcrumb');
  expect(text).toBe(null);
});
