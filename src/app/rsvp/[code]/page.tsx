"use client";

import { Formik, FormikHelpers, Form, Field, FormikProps } from "formik";
import { useEffect, useState } from "react";
import AttendanceSelection from "./attendance";

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
      .then((data) => setInitialValues(data))
      .catch((error) => console.error("Error:", error));
  }, [params.code]);

  const renderFormStep = (step: number, formikProps: FormikProps<RSVP>) => {
    switch (step) {
      case 0:
        return <AttendanceSelection {...formikProps} />;
      case 1:
        return (
          <>
            <label htmlFor="numGuests">Number of Guests</label>
            <Field id="numGuests" name="numGuests" type="number" />

            <label htmlFor="plusOneName">Plus One Name</label>
            <Field id="plusOneName" name="plusOneName" />
          </>
        );
      case 2:
        return (
          <>
            <label htmlFor="mealSelection1">Meal Selection 1</label>
            <Field id="mealSelection1" name="mealSelection1" />

            <label htmlFor="mealSelection2">Meal Selection 2</label>
            <Field id="mealSelection2" name="mealSelection2" />
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
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            RSVP For {initialValues.rsvpName}
          </h2>
          <div className="max-w-3xl mx-auto mt-8 space-y-3 md:mt-8">
            <Formik
              initialValues={initialValues}
              onSubmit={(
                values: RSVP,
                { setSubmitting }: FormikHelpers<RSVP>
              ) => {
                setTimeout(() => {
                  alert(JSON.stringify(values));
                  setSubmitting(false);
                }, 500);
              }}
            >
              {(formikProps) => (
                <Form>
                  {renderFormStep(activeStep, formikProps)}
                  <button
                    type="button"
                    onClick={() => setActiveStep(activeStep - 1)}
                    disabled={activeStep === 0}
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveStep(activeStep + 1)}
                    disabled={activeStep === 2}
                  >
                    Next
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
}
