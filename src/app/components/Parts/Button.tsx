import Link from 'next/link';

// Define proper TypeScript interface for button props
interface ButtonProps {
  title: string;
  url: string;
  target?: '_self' | '_blank' | '_parent' | '_top';
}

// Input validation function
const validateButtonProps = (props: ButtonProps): void => {
  if (!props.title || props.title.trim() === '') {
    console.warn('Button: title prop is required and cannot be empty');
  }

  if (!props.url || props.url.trim() === '') {
    console.warn('Button: url prop is required and cannot be empty');
  }
};

export default function Button(props: ButtonProps) {
  // Validate inputs
  validateButtonProps(props);

  // Provide defaults for optional props
  const { title, url, target = '_self' } = props;

  return (
    <button type="button" className="relative group">
      <div className="bg-gradient-to-r from-primary to-secondary baseTransition opacity-0 group-hover:opacity-100 absolute bottom-0 left-0 rounded-full w-full h-[40.5px]"></div>
      <Link
        className="buttonGradientTransparent !text-[16px]"
        href={url}
        target={target}
        aria-label={`Page - ${title}`}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      >
        {title}
      </Link>
      <span className="absolute top-1/2 left-1/2 whitespace-nowrap -translate-x-1/2 -translate-y-1/2 group-hover:text-white baseTransition !font-[500] !text-[16px] pointer-events-none">
        {title}
      </span>
    </button>
  );
}

// Export the interface for use in other components
export type { ButtonProps };
