import './button.css';
import { ButtonProps, buttonList } from './type';

/**
 * Primary UI component for user interaction
 */
export function Button({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  theme,
  ...props
}: ButtonProps) {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  const buttonClass = `${['storybook-button', `storybook-button--${size}`, mode].join(' ')}`;
  return (
    <button type="button" className={buttonClass} style={{ backgroundColor }} {...props}>
      {label}
    </button>
  );
}
