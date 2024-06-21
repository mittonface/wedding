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

  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-xl font-bold leading-tight text-black sm:text-xl lg:text-xl"></h3>

          <div>
            <h1>
              We've heard from all of you! If you need to change anything about
              your RSVP feel free to reach out to us and let us know.
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
