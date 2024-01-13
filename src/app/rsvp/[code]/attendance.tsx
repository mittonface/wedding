import { Field, FormikProps } from "formik";
import { RSVP } from "./page";

export default function AttendanceSelection(formikProps: FormikProps<RSVP>) {
  const selectedClasses = "border-blue-600 text-blue-600";

  return (
    <>
      <label htmlFor="attending">
        <Field id="attending" name="attending" type="hidden" />
        First of all, do you plan on attending our big day?
      </label>

      <>
        <ul className="grid w-full gap-6 md:grid-cols-2">
          <li>
            <input
              type="radio"
              id="attendence-yes"
              name="attendence-yes"
              value="yes"
              className="hidden"
              onClick={() => {
                formikProps.setValues({
                  ...formikProps.values,
                  attending: true,
                });
              }}
            />
            <label
              htmlFor="attendence-yes"
              className={`inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer hover:text-gray-600 hover:bg-gray-100 ${
                formikProps.values.attending ? selectedClasses : ""
              }`}
            >
              <div className="block">Yes</div>
            </label>
          </li>
          <li>
            <input
              type="radio"
              id="attendence-no"
              name="attending"
              value="no"
              className="hidden"
              onClick={() => {
                formikProps.setValues({
                  ...formikProps.values,
                  attending: false,
                });
              }}
            />
            <label
              htmlFor="attendence-no"
              className={`inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer hover:text-gray-600 hover:bg-gray-100 ${
                formikProps.values.attending ? "" : selectedClasses
              }`}
            >
              <div className="block">
                <p>No</p>
              </div>
            </label>
          </li>
        </ul>
      </>
    </>
  );
}
