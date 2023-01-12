import { FormWrapper } from "./FormWrapper";

interface Props {}

export const AddressForm = (props: Props) => {
  return (
    <FormWrapper title="Address Form">
      <label>Street</label>
      <input type="text" required autoFocus />
      <label>City</label>
      <input type="text" required />
      <label>State</label>
      <input type="text" required />
      <label>Zip</label>
      <input type="text" required />
    </FormWrapper>
  );
};
