import { useMultistepForm } from "./useMultistepForm";
import { UserForm } from "./UserForm";
import { AddressForm } from "./AddressForm";
import { AccountForm } from "./AcountForm";
import { FormEvent } from "react";
function App() {
  const [state, setstate] = useState(initialState)
  const {
    step,
    steps,
    totalSteps,
    currentStepIndex,
    isFirstStep,
    isLastStep,
    next,
    back,
  } = useMultistepForm([<UserForm />, <AddressForm />, <AccountForm />]);

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    next();
  };

  return (
    <div
      style={{
        position: "relative",
        background: "white",
        border: "1px solid black",
        padding: "2rem",
        margin: "1rem",
        borderRadius: ".5rem",
        fontFamily: "Arial",
      }}
    >
      <form onSubmit={onSubmit}>
        <div style={{ position: "absolute", top: ".5rem", right: ".5rem" }}>
          {currentStepIndex + 1} / {totalSteps}
        </div>
        {step}

        <div
          style={{
            marginTop: "1rem",
            display: "flex",
            gap: "0.5rem",
            justifyContent: "flex-end",
          }}
        >
          <button type="button" onClick={back} disabled={isFirstStep}>
            Back
          </button>
          <button type="submit">
            {isLastStep ? "Finish" : "Next"}
          </button>
        </div>
  