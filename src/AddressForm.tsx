import { FormWrapper } from "./FormWrapper";

type AddressData = {
  street: string;
  city: string;
  state: string;
  zip: string;
};

type AddressFormProps = AddressData & {
  updateFields: (fields: Partial<AddressData>) => void;
};

export const AddressForm = ({
  street,
  city,
  state,
  zip,
  updateFields,
}: AddressFormProps) => {
  return (
    <FormWrapper title="Address Form">
      <label>Street</label>
      <input
        type="text"
        required
        autoFocus
        value={street}
        onChange={(event) => updateFields({ street: event.target.value })}
      />
      <label>City</label>
      <input
        type="text"
        required
        value={city}
        onChange={(event) => updateFields({ city: event.target.value })}
      />
      <label>State</label>
      <input
        type="text"
        required
        value={state}
        onChange={(event) => updateFields({ state: event.target.value })}
      />
      <label>Zip</label>
      <input
        type="text"
        required
        value={zip}
        onChange={(event) => updateFields({ zip: event.target.value })}
      />
    </FormWrapper>
  );
};
