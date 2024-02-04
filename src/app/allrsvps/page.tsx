"use client";

import { FormEvent, useEffect, useState } from "react";

export type RSVP = {
  rsvpId: string;
  rsvpName: string;
  numGuests: number;
  plusOneName: string;
  mealSelection1: string;
  mealSelection2: string;
  extraText: string;
  attending: boolean;
  added: string;
};

export default function AllRsvps() {
  const [initialValues, setInitialValues] = useState<RSVP[] | null>(null);
  const [totalNumGuests, setTotalNumGuests] = useState(0);
  const [numAttendingGuests, setNumAttendingGuests] = useState(0);
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/rsvps`)
      .then((response) => response.json())
      .then((data) => {
        // Sort the data by 'added' field in descending order
        const sortedData = data.sort(
          (a: RSVP, b: RSVP) =>
            new Date(b.added).getTime() - new Date(a.added).getTime()
        );

        // Remove duplicates based on 'rsvpId'
        const uniqueData: RSVP[] = [];
        const map = new Map();
        for (let item of sortedData) {
          if (!map.has(item.rsvpId)) {
            map.set(item.rsvpId, true); // set any value to Map
            uniqueData.push(item);
          }
        }

        let totalCounter = 0;
        let attendingCounter = 0;
        for (const rsvp of uniqueData) {
          totalCounter += rsvp.numGuests;

          if (rsvp.attending) {
            attendingCounter += rsvp.numGuests;
          }
        }

        setNumAttendingGuests(attendingCounter);
        setTotalNumGuests(totalCounter);
        setInitialValues(uniqueData);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div className="flex items-center min-h-screen flex-col">
      <table className="table-auto  mt-4">
        <thead>
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Attending</th>
            <th className="px-4 py-2">Number of Guests</th>
            <th className="px-4 py-2">Plus One Name</th>
            <th className="px-4 py-2">Guest 1 Meal</th>
            <th className="px-4 py-2">Guest 2 Meal</th>
            <th className="px-4 py-2">Extra Notes</th>

            {/* Add more headers as needed */}
          </tr>
        </thead>
        <tbody>
          {initialValues &&
            initialValues.map((rsvp, index) => (
              <tr
                key={index}
                className={
                  rsvp.attending === true
                    ? "bg-green-100"
                    : rsvp.attending === false
                    ? "bg-red-100"
                    : ""
                }
              >
                <td className="border px-4 py-2">{rsvp.rsvpId}</td>
                <td className="border px-4 py-2">{rsvp.rsvpName}</td>
                <td className="border px-4 py-2">
                  {rsvp.attending ? "Yes" : "No"}
                </td>
                <td className="border px-4 py-2">{rsvp.numGuests}</td>
                <td className="border px-4 py-2">{rsvp.plusOneName}</td>
                <td className="border px-4 py-2">{rsvp.mealSelection1}</td>
                <td className="border px-4 py-2">{rsvp.mealSelection2}</td>
                <td className="border px-4 py-2">{rsvp.extraText}</td>
              </tr>
            ))}
          <tr>
            <td colSpan={2}>
              <strong>Total # Invited:</strong> {totalNumGuests}
            </td>
            <td colSpan={3}>Total Attending: {numAttendingGuests}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
