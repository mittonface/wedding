"use client";

import { Formik, FormikHelpers, Form, FormikProps, FormikErrors } from "formik";
import { useEffect, useState } from "react";
import AttendanceSelection from "./attendance";
import { GuestDetails } from "./guest-details";
import { MealSelect } from "./meal-selection";

import { useRouter } from "next/navigation";
import "./spinner.css";

export type RSVP = {
  rsvpId: string;
  rsvpName: string;
  numGuests: number;
  plusOneName: string;
  mealSelection1: string;
  mealSelection2: string;
  extraText: string;
  attending: boolean;
};

export default function RSVPCode({ params }: { params: { code: string } }) {
  const [initialValues, setInitialValues] = useState<RSVP | null>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [formError, setError] = useState<string | null>(null);
  const navigate = useRouter(); // if you are using React Router v6

  useEffect(() => {
    console.log(`${process.env.NEXT_PUBLIC_BACKEND_URL}/rsvp/${params.code}`);
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/rsvp/${params.code}`)
      .then((response) => response.json())
      .then((data) => {
        data = { ...data, added: null }; // just letting the DB set this
        setInitialValues(data);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  // Define a validation function with typed values
  const validateMealSelections = (values: RSVP) => {
    let errors: FormikErrors<RSVP> = {};

    if (values.attending === true) {
      if (values.mealSelection1 === "Choose a meal") {
        setError("Please select a meal for each of your guests.");

        errors.mealSelection1 = "Please select a meal for guest 1";
      }

      if (values.numGuests === 2 && values.mealSelection2 === "Choose a meal") {
        setError("Please select a meal for each of your guests.");

        errors.mealSelection2 = "Please select a meal for guest 2";
      }
    }

    return errors;
  };

  const renderFormStep = (step: number, formikProps: FormikProps<RSVP>) => {
    switch (step) {
      case 0:
        return <AttendanceSelection {...formikProps} />;
      case 1:
        return (
          <>
            <GuestDetails {...formikProps} />
          </>
        );
      case 2:
        return (
          <>
            <MealSelect {...formikProps} />
          </>
        );
    }
    return <></>;
  };

  if (!initialValues) {
    return (
      <div className="flex justify-center h-screen">
        <div id="loading-bar-spinner" className="spinner">
          <div className="spinner-icon"></div>
        </div>
      </div>
    );
  }

  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-xl font-bold leading-tight text-black sm:text-xl lg:text-xl">
            {initialValues.numGuests === 2
              ? "RSVP For {initialValues.rsvpName} and Guest"
              : params.code === "BYJL" || params.code === "WWCJ"
              ? "RSVP For {initialValues.rsvpName} and Guest"
              : "RSVP For {initialValues.rsvpName}"}
          </h3>
          <div>
            You can come back to this page at any time to change any details if
            needed.
          </div>
          <div className="max-w-3xl mx-auto mt-8 space-y-3 md:mt-8">
            <Formik
              initialValues={initialValues}
              validate={validateMealSelections}
              validateOnChange={false}
              validateOnBlur={false}
              onSubmit={(values, { setSubmitting, setErrors }) => {
                // Manual validation before submitting
                const validationErrors = validateMealSelections(values);
                console.log(validationErrors);
                if (Object.keys(validationErrors).length > 0) {
                  setSubmitting(false);
                } else {
                  // handle form submission
                  fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/rsvp`, {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(values),
                  })
                    .then((response) => {
                      if (response.ok) {
                        if (values.attending) {
                          navigate.push("/rsvpyes");
                        } else {
                          navigate.push("/rsvpno");
                        }
                      }
                      return response.json();
                    })
                    .then((data) => {
                      // Handle response here
                      console.log(data);
                      setSubmitting(false);
                    })
                    .catch((error) => {
                      console.error("Error:", error);
                      setSubmitting(false);
                    });
                }
              }}
            >
              {(formikProps) => (
                <Form>
                  <div className="mb-5">
                    {renderFormStep(activeStep, formikProps)}
                  </div>
                  {formError && (
                    <div className="mb-5 text-red-500">{formError}</div>
                  )}

                  {activeStep !== 0 && (
                    <button
                      type="button"
                      onClick={() => setActiveStep(activeStep - 1)}
                      className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                      disabled={activeStep === 0}
                    >
                      Back
                    </button>
                  )}

                  {activeStep !== 2 && formikProps.values.attending && (
                    <button
                      type="button"
                      className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                      onClick={() => setActiveStep(activeStep + 1)}
                      disabled={activeStep === 2}
                    >
                      Next
                    </button>
                  )}

                  {((activeStep === 2 && formikProps.values.attending) ||
                    !formikProps.values.attending) && (
                    <>
                      <button
                        type="submit"
                        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                      >
                        Submit RSVP
                      </button>
                    </>
                  )}
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
}
