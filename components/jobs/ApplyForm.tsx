"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, CheckCircle } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  coverNote: z.string().max(1000, "Please keep your cover note under 1000 characters").optional(),
});

type FormValues = z.infer<typeof schema>;

interface ApplyFormProps {
  jobTitle: string;
  jobSlug: string;
}

export function ApplyForm({ jobTitle, jobSlug }: ApplyFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormValues) => {
    setError(null);
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, type: "application", jobTitle, jobSlug }),
      });
      if (!res.ok) throw new Error("Failed to send application");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or email us directly.");
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 py-8 text-center">
        <CheckCircle size={40} className="text-green-500" />
        <h3 className="font-semibold text-dark text-lg">Application sent!</h3>
        <p className="text-gray-600 text-sm">We&apos;ll review your application and be in touch soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-dark mb-1">Full Name *</label>
        <input
          {...register("name")}
          className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
          placeholder="Jane Smith"
        />
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-dark mb-1">Email Address *</label>
        <input
          {...register("email")}
          type="email"
          className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
          placeholder="jane@example.com"
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-dark mb-1">Phone Number</label>
        <input
          {...register("phone")}
          type="tel"
          className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
          placeholder="+44 7700 000000"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-dark mb-1">Cover Note</label>
        <textarea
          {...register("coverNote")}
          rows={4}
          className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
          placeholder="Tell us why you're a great fit for this role..."
        />
        {errors.coverNote && <p className="text-red-500 text-xs mt-1">{errors.coverNote.message}</p>}
      </div>

      {error && (
        <p className="text-red-500 text-sm bg-red-50 px-4 py-3 rounded-lg">{error}</p>
      )}

      <button type="submit" disabled={isSubmitting} className="btn-primary w-full py-3 disabled:opacity-60">
        {isSubmitting ? <><Loader2 size={16} className="animate-spin" /> Sending...</> : "Apply for this role"}
      </button>
    </form>
  );
}
