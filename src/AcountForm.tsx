import { FormWrapper } from "./FormWrapper";

interface Props {}

export const AccountForm = (props: Props) => {
  return (
    <FormWrapper title="Account Form">
      <label>Email</label>
      <input type="email" required autoFocus />
      <label>Password</label>
      <input type="password" required />
    </FormWrapper>
  );
};
