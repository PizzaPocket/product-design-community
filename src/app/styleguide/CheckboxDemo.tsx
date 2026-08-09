"use client";

import { useState } from "react";
import { CheckboxField } from "@/components/molecules/CheckboxField";

export function CheckboxDemo() {
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("a");

  return (
    <div className="flex flex-col gap-6 max-w-sm">
      <CheckboxField
        id="demo-checkbox"
        name="demo-checkbox"
        checked={checked}
        onChange={setChecked}
        label="Events"
        description="Logistics, emceeing/hosting, checking in attendees."
      />
      <div className="flex flex-col gap-3">
        <CheckboxField
          id="demo-radio-a"
          name="demo-radio"
          type="radio"
          checked={radioValue === "a"}
          onChange={(c) => c && setRadioValue("a")}
          label="Short-term"
          description="Up to 3 months"
        />
        <CheckboxField
          id="demo-radio-b"
          name="demo-radio"
          type="radio"
          checked={radioValue === "b"}
          onChange={(c) => c && setRadioValue("b")}
          label="Long-term"
          description="9+ months, or ongoing"
        />
      </div>
    </div>
  );
}
