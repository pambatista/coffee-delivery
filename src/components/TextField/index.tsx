import { TextFieldContainer, TextFieldInput } from "./styles";

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  className?: string;
}

export function TextField({ error, className, ...rest }: TextFieldProps) {
  return (
    <TextFieldContainer className={className}>
      <TextFieldInput type="text" {...rest} />
      <span>{error}</span>
    </TextFieldContainer>
  );
}
