// Global
import React, { useEffect, useState } from 'react';
import { Field, RichText } from '@sitecore-jss/sitecore-jss-nextjs';
import { RichTextProps } from '@sitecore-jss/sitecore-jss-nextjs/types/components/RichText';

//Local
import useExperienceEditor from 'lib/use-experience-editor';

const srOnlySpan = '<span class="sr-only"> (Opens in a new tab)</span>';

const RichTextA11yWrapper = ({ field, editable = true, ...props }: RichTextProps): JSX.Element => {
  /**
   * Hook for experience editor
   */
  const isExperienceEditor = useExperienceEditor();

  const [content, setContent] = useState(field?.value);

  const updatedField: Field<string> = {
    value: content || '',
  };

  // Run this client-side because we don't have access to the document server-side
  useEffect(() => {
    const template = document.createElement('template');
    template.innerHTML = field?.value || '';

    // Find all links either either have target="_blank" or appear to be external due to starting with "http"
    const externalLinks = [...template.content.querySelectorAll('a')].filter(
      (a) =>
        a.attributes.getNamedItem('href')?.value.startsWith('http') ||
        a.attributes.getNamedItem('target')?.value === '_blank'
    );
    // Update each external link
    externalLinks.forEach((a) => {
      // Set to open in new tab
      a.setAttribute('target', '_blank');
      // Add Screen Reader text and new tab icon
      // eslint-disable-next-line no-param-reassign
      a.innerHTML = `${a.innerHTML}${srOnlySpan}`;
    });

    // Update the content
    setContent(template.innerHTML);
  }, [field?.value]);

  // If there's no text, the only render it if it is editable and we are editing.
  // Otherwise don't render anything
  if (!field?.value) {
    if (isExperienceEditor && editable) {
      return <RichText field={field} {...props} editable={editable} className="rte" />;
    }
    return <></>;
  }

  // Just a pass through if it's EE.
  if (isExperienceEditor) {
    return <RichText field={field} {...props} editable={editable} className="rte" />;
  }
  /**
   * If not EE, use the updated field value
   */
  return <RichText field={updatedField} {...props} editable={editable} className="rte" />;
};

export default RichTextA11yWrapper;
