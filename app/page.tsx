"use client";

import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [note, setNote] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (note.trim()) {
      // Add your note submission logic here
      setNote("");
    }
  };

  return (
    <main>
      <div className="min-h-screen w-full bg-primary relative">
        {/* Diagonal Fade Center Grid Background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, #d1d5db 1px, transparent 1px),
              linear-gradient(to bottom, #d1d5db 1px, transparent 1px)
            `,
            backgroundSize: "32px 32px",
            WebkitMaskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)",
            maskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)",
          }}
        />

        {/* Centered glassmorphism note input */}
        <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
          <form
            onSubmit={handleSubmit}
            className="relative w-full max-w-2xl"
          >
            <div
              className="relative flex min-h-[72px] items-end rounded-2xl px-5 pb-3 pt-4 transition-shadow focus-within:shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
              style={{
                background: "rgba(255, 255, 255, 0.25)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.5)",
                border: "1px solid rgba(255, 255, 255, 0.4)",
              }}
            >
              <Textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Make a note"
                rows={7}
                className="min-h-[10.5em] border-0 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 flex-1 resize-none bg-transparent pr-14 py-0 text-base md:text-sm text-white placeholder:text-white/70 [text-shadow:0_0_12px_rgba(0,0,0,0.45)] [field-sizing:fixed]"
              />
              <Button
                type="submit"
                aria-label="Send note"
                size="icon-lg"
                className="h-10 w-10 shrink-0 rounded-full bg-orange-500 text-white shadow-md hover:bg-orange-600 focus-visible:ring-orange-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                  aria-hidden
                >
                  <path d="M12 4l-8 8h5v8h6v-8h5L12 4z" />
                </svg>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
