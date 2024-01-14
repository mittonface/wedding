import { FormikProps } from "formik";
import { RSVP } from "./page";

export function GuestDetails(formikProps: FormikProps<RSVP>) {
  return (
    <>
      <div className="mb-5">
        <label
          htmlFor="number-input"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          How many people are you RSVP'ing for?
        </label>
        <input
          type="number"
          id="number-input"
          aria-describedby="helper-text-explanation"
          className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          value={formikProps.values.numGuests}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            const newValue = parseInt(event.target.value, 10);

            if (newValue == 1 || newValue == 2)
              formikProps.setValues({
                ...formikProps.values,
                numGuests: parseInt(event.target.value),
              });
          }}
          required
        />
      </div>

      <div className="mb-5">
        <label
          htmlFor="base-input"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Guest #1 Name
        </label>
        <input
          type="text"
          id="base-input"
          value={formikProps.values.rsvpName}
          className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            formikProps.setValues({
              ...formikProps.values,
              rsvpName: event.target.value,
            });
          }}
        />
      </div>

      {formikProps.values.numGuests == 2 && (
        <div className="mb-5">
          <label
            htmlFor="base-input"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Guest #2 Name
          </label>
          <input
            type="text"
            id="base-input"
            value={formikProps.values.plusOneName}
            className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              formikProps.setValues({
                ...formikProps.values,
                plusOneName: event.target.value,
              });
            }}
          />
        </div>
      )}
    </>
  );
}
