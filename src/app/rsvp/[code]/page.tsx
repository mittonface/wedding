"use client";

import { Formik, FormikHelpers, Form, Field, FormikProps } from "formik";
import { useEffect, useState } from "react";
import AttendanceSelection from "./attendance";
import { GuestDetails } from "./guest-details";
import { MealSelect } from "./meal-selection";

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

  useEffect(() => {
    fetch(`https://wedding-backend.brent.click/rsvp/${params.code}`)
      .then((response) => response.json())
      .then((data) => {
        data = { ...data, added: null }; // just letting the DB set this
        setInitialValues(data);
      })
      .catch((error) => console.error("Error:", error));
  }, [params.code]);

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
    return <div>Loading...</div>;
  }

  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-xl font-bold leading-tight text-black sm:text-xl lg:text-xl">
            RSVP For {initialValues.rsvpName}
          </h3>
          <div>
            You can come back to this page at any time to change any details if
            needed.
          </div>
          <div className="max-w-3xl mx-auto mt-8 space-y-3 md:mt-8">
            <Formik
              initialValues={initialValues}
              onSubmit={(
                values: RSVP,
                { setSubmitting }: FormikHelpers<RSVP>
              ) => {
                fetch(`https://wedding-backend.brent.click/rsvp`, {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(values),
                })
                  .then((response) => response.json())
                  .then((data) => {
                    // Handle response here
                    console.log(data);
                    setSubmitting(false);
                  })
                  .catch((error) => {
                    console.error("Error:", error);
                    setSubmitting(false);
                  });
              }}
            >
              {(formikProps) => (
                <Form>
                  <div className="mb-5">
                    {renderFormStep(activeStep, formikProps)}
                  </div>
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
