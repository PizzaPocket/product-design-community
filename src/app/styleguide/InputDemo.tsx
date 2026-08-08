"use client";

import { useState } from "react";
import { Input } from "@/components/atoms/Input";

export function InputDemo() {
  const [text, setText] = useState("");
  const [multiline, setMultiline] = useState("");

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-xl">
      <Input id="demo-text" name="demo-text" placeholder="Jane Doe" value={text} onChange={setText} />
      <Input id="demo-multiline" name="demo-multiline" multiline rows={3} placeholder="Say hello…" value={multiline} onChange={setMultiline} />
    </div>
  );
}
