// Global
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import clsx from 'clsx';
import React, { MouseEventHandler, ReactElement, Ref, useEffect, useState } from 'react';
import { tv } from 'tailwind-variants';

// Local
import FontAwesomeIcon from 'components/helpers/FontAwesomeIcon/FontAwesomeIcon';
import useFeatureFlags from 'components/hooks/useFeatureFlags';

export const BUTTON_TYPES = [
  'default',
  'secondary',
  'abort',
  'error',
  'success',
  'warning',
  undefined,
];

interface Props {
  auto?: boolean;
  disabled?: boolean;
  iconLeft?: string;
  iconRight?: string;
  id?: string;
  label?: string;
  loading?: boolean;
  onClick?: MouseEventHandler;
  ref?: Ref<HTMLButtonElement | null>;
  tag?: string;
  title?: string;
  type: string;
}

type NativeAttrs = Omit<React.ButtonHTMLAttributes<undefined>, keyof Props>;

type Variants = 'default' | 'secondary' | 'error' | 'success' | 'warning' | undefined;

export type ButtonProps = Props & NativeAttrs;

const buttonSlots = tv({
  slots: {
    text: clsx(
      'gap-4',
      'h-10',
      'inline-flex',
      'items-center',
      'justify-center',
      'leading-10',
      'relative',
      '-top-px'
    ),
  },
});

const buttonVariants = tv({
  base: clsx(
    'disabled:bg-gray-light',
    'disabled:cursor-not-allowed',
    'disabled:text-gray',
    'enabled:duration-150',
    'enabled:transition',
    'hover:ease-in',
    'h-10',
    'inline-block',
    'leading-10',
    'py-0',
    'px-4',
    'rounded-md',
    'text-center',
    'whitespace-nowrap'
  ),
  defaultVariants: {
    type: 'default',
  },
  variants: {
    type: {
      default: clsx('bg-brand-primary', 'hover:text-white/50', 'text-white'),
      secondary: clsx('bg-brand-secondary', 'hover:text-white/50', 'text-white'),
      abort: clsx('bg-pink-200'),
      error: clsx('bg-red-500', 'hover:text-white/50', 'text-white'),
      success: clsx('bg-green-700', 'hover:text-black/50', 'text-black'),
      warning: clsx('bg-orange-500', 'hover:text-white/50', 'text-white'),
    },
    minWidth: {
      true: clsx('min-w-[10rem]'),
    },
  },
});

const Button = ({
  auto = false,
  disabled = false,
  iconLeft,
  iconRight,
  id,
  label,
  loading = false,
  onClick = (): void => undefined,
  ref,
  tag = 'button',
  title,
  type = 'default',
}: ButtonProps): ReactElement => {
  const [showIcons, setShowIcons] = useState<boolean | undefined>(true);

  const { getFeatureFlag } = useFeatureFlags();

  const { text } = buttonSlots();
  const className = buttonVariants({ minWidth: !auto, type: type as Variants });

  const children = (
    <>
      <div className={text()}>
        {showIcons && iconLeft && <FontAwesomeIcon icon={iconLeft as IconProp} />}
        {showIcons && loading && <FontAwesomeIcon icon={'spinner'} spinPulse />}
        {label && !loading && label}
        {showIcons && iconRight && <FontAwesomeIcon icon={iconRight as IconProp} />}
      </div>
    </>
  );

  useEffect(() => {
    setShowIcons(getFeatureFlag('buttonIcons'));
  }, [getFeatureFlag]);

  return React.createElement(
    tag,
    {
      className,
      disabled,
      id,
      onClick: (evt: React.MouseEvent<Element, MouseEvent>) => onClick(evt),
      ref,
      title,
    },
    children
  );
};

export default Button;
