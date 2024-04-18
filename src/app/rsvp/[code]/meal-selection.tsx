import { FormikProps } from "formik";
import { RSVP } from "./page";
import { ChangeEvent } from "react";

export function MealSelect(formikProps: FormikProps<RSVP>) {
  return (
    <>
      <div className="mb-5">
        <div className="mb-5">
          Dinner will consist of a salad, followed by the entrée of your
          choosing, then a warm carrot cake for dessert.{" "}
        </div>
        <span className="underline">Beef Short Rib</span>
        <div>
          Braised, off-the-bone short rib, with a balsamic demi glace. Served
          with Irish mashed potatoes and seasonal vegetables.{" "}
        </div>
      </div>

      <div className="mb-5">
        <span className="underline">Roasted Chicken Supreme</span>
        <div>
          Roasted chicken breast served in a Sage pan jus. Served with Irish
          mashed potatoes and seasonal vegetables.
        </div>
      </div>

      <div className="mb-5">
        <span className="underline">Vegetarian Option</span>
        <div>
          The vegetarian option will be a Chana Masala Curry. A tomato and onion curry stewed in chickpeas and aromatics.
        </div>
      </div>

      <div className="mb-5">
        <label
          htmlFor="guest1Meal"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Select a meal for {formikProps.values.rsvpName}
        </label>
        <select
          id="guest1Meal"
          className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          value={formikProps.values.mealSelection1}
          onChange={(event: ChangeEvent<HTMLSelectElement>) => {
            formikProps.setValues({
              ...formikProps.values,
              mealSelection1: event.target.value,
            });
          }}
        >
          <option selected>Choose a meal</option>
          <option value="beef">Beef Short Rib</option>
          <option value="chicken">Chicken Supreme</option>
          <option value="vegetarian">
            Vegetarian (please specify your preference)
          </option>
        </select>
      </div>

      {formikProps.values.numGuests == 2 && (
        <div className="mb-5">
          <label
            htmlFor="guest2Meal"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Select a meal for {formikProps.values.plusOneName}
          </label>
          <select
            id="guest2Meal"
            className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            value={formikProps.values.mealSelection2}
            onChange={(event: ChangeEvent<HTMLSelectElement>) => {
              formikProps.setValues({
                ...formikProps.values,
                mealSelection2: event.target.value,
              });
            }}
          >
            <option selected>Choose a meal</option>
            <option value="beef">Beef Short Rib</option>
            <option value="chicken">Chicken Supreme</option>
            <option value="vegetarian">
              Vegetarian (please specify your preference)
            </option>
          </select>
        </div>
      )}
      <div className="mb-5">
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Anything else you want us to know? (diet restrictions, etc)
        </label>
        <textarea
          id="message"
          rows={4}
          className="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Write your thoughts here..."
          value={formikProps.values.extraText}
          onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
            formikProps.setValues({
              ...formikProps.values,
              extraText: event.target.value,
            });
          }}
        ></textarea>
      </div>
    </>
  );
}
