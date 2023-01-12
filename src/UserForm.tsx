import { FormWrapper } from "./FormWrapper";

interface Props {}

export const UserForm = (props: Props) => {
  return (
    <FormWrapper title="User Form">
      <label>First Name</label>
      <input type="text" required autoFocus />
      <label>Last Name</label>
      <input type="text" required />
      <label>Age</label>
      <input type="number" required min={1} />
    </FormWrapper>
  );
};
