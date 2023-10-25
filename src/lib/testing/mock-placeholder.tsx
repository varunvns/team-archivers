import React from 'react';
import { ComponentFactory } from '@sitecore-jss/sitecore-jss-nextjs';
import clsx from 'clsx';
// import { ContainedBy } from '../component-props';

const SAMPLE_COMPONENT_NAME = 'StorybookPlaceholderContent';

type PlaceholderContent = {
  componentName: string;
};

type SampleRenderingContext = {
  componentName: string;
  displayName: string;
  placeholders: Record<string, PlaceholderContent[]>;
};

/**
 * Generates a sample rendering context for the component
 * using sample placeholder content.
 *
 * @param {string | string[]} placeholderName the placeholder names to render the sample content into
 * @param {number} repeat the number of times to repeat the sample content
 * @returns {object} A rendering context for the placeholders using the sample component
 */
export const getSampleRenderingContext = (
  placeholderNames: string | string[],
  repeat = 1
): SampleRenderingContext => {
  if (!placeholderNames && process.env.NODE_ENV === 'development') {
    console.warn(
      'getSampleRenderingContext requires at least one valid placeholder name as the first parameter'
    );
  }

  const sampleComponent = { componentName: SAMPLE_COMPONENT_NAME };
  const placeholderContent: PlaceholderContent[] = [];
  const validRepeat = repeat < 1 ? 1 : Math.ceil(repeat);
  for (let i = 0; i < validRepeat; i++) {
    placeholderContent.push(sampleComponent);
  }

  const context: SampleRenderingContext = {
    componentName: 'foo',
    displayName: 'Foo',
    placeholders: {},
  };

  const placeholders = Array.isArray(placeholderNames) ? placeholderNames : [placeholderNames];
  placeholders.forEach((placeholder: string) => {
    context.placeholders[placeholder] = placeholderContent;
  });

  return context;
};

/* "any" should be "ContainedBy", however "ContainedBy" is not currently an export of "../component-props". */
/* eslint-disable  @typescript-eslint/no-explicit-any */
const SamplePlaceholderComponent = ({ containedBy }: any): JSX.Element => (
  <div
    className={clsx(
      'theme-inverted',
      'bg-theme-bg',
      'text-theme-text',
      'text-center',
      'p-6',
      'w-full'
    )}
  >
    <p className={'font-bold'}>Placeholder content</p>
    {containedBy && <p className="text-sm">Contained by {containedBy}</p>}
  </div>
);
/**
 * Creates a mock componentFactory for use in a <SitecoreContext> component.
 *
 * @param {React.FC} args additional React components to add to the factory
 * @returns {ComponentFactory} a method that accepts a string and returns a matching component or null
 */
const createComponentFactory =
  (...args: React.FC[]): ComponentFactory =>
  (componentName: string): React.FC | null => {
    const components = new Map<string, React.FC>();

    components.set(SAMPLE_COMPONENT_NAME, SamplePlaceholderComponent as React.FC);

    args.forEach((component) => {
      components.set(component.name, component);
    });

    return components.get(componentName) || null;
  };

export default createComponentFactory;
