import { FormWrapper } from "./FormWrapper";

type UserData = {
  firstName: string;
  lastName: string;
  age: string;
};
type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

export const UserForm = ({
  firstName,
  lastName,
  age,
  updateFields,
}: UserFormProps) => {
  return (
    <FormWrapper title="User Form">
      <label>First Name</label>
      <input
        type="text"
        required
        autoFocus
        value={firstName}
        onChange={(event) => updateFields({ firstName: event.target.value })}
      />
      <label>Last Name</label>
      <input
        type="text"
        required
        value={lastName}
        onChange={(event) => updateFields({ lastName: event.target.value })}
      />
      <label>Age</label>
      <input
        type="number"
        required
        min={1}
        value={age}
        onChange={(event) => updateFields({ age: event.target.value })}
      />
    </FormWrapper>
  );
};
