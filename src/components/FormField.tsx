import type { ReactNode } from "react";
import { AlertCircle } from "lucide-react";

interface FormFieldProps {
  label: string;
  htmlFor: string;
  required?: boolean;
  error?: string;
  hint?: string;
  className?: string;
  children: ReactNode;
}

export default function FormField({
  label,
  htmlFor,
  required = false,
  error,
  hint,
  className = "",
  children,
}: FormFieldProps) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="field-label">
        {label}
        {required && (
          <span className="ml-0.5 text-red-500" aria-hidden="true">
            *
          </span>
        )}
      </label>
      {children}
      {hint && !error && (
        <p className="mt-1.5 text-[10.5px] leading-snug text-ink/45">{hint}</p>
      )}
      {error && (
        <p id={`${htmlFor}-error`} className="field-error" role="alert">
          <AlertCircle className="mt-px h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          {error}
        </p>
      )}
    </div>
  );
}
