import { FormWrapper } from "./FormWrapper";

type AccountData = {
  email: string;
  password: string;
};

type AccountFormProps = AccountData & {
  updateFields: (fields: Partial<AccountData>) => void;
};

export const AccountForm = ({
  email,
  password,
  updateFields,
}: AccountFormProps) => {
  return (
    <FormWrapper title="Account Form">
      <label>Email</label>
      <input
        type="email"
        required
        autoFocus
        value={email}
        onChange={(event) => updateFields({ email: event.target.value })}
      />
      <label>Password</label>
      <input
        type="password"
        required
        value={password}
        onChange={(event) => updateFields({ password: event.target.value })}
      />
    </FormWrapper>
  );
};
