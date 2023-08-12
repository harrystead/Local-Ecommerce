import { ChangeEvent, ReactElement, InputHTMLAttributes } from 'react';

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  ariaLabel?: string;
}

export default function SearchInput({
  value,
  onChange,
  placeholder = 'Search',
  ariaLabel = 'Search',
  ...props
}: SearchInputProps): ReactElement {
  return (
    <input
      type="search"
      placeholder={placeholder}
      className="search-input"
      value={value}
      onChange={onChange}
      aria-label={ariaLabel}
      {...props}
    />
  );
}
