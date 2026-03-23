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
  sector: z.string().optional(),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

const sectors = ["Built Environment", "Property", "Engineering", "Logistics", "Other"];

export function CVForm() {
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
        body: JSON.stringify({ ...data, type: "cv_registration" }),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or email us directly.");
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 py-10 text-center">
        <CheckCircle size={48} className="text-green-500" />
        <h3 className="text-xl font-bold text-dark">CV registered!</h3>
        <p className="text-gray-600 max-w-sm">A consultant will be in touch when a suitable opportunity arises.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-dark mb-1">Full Name *</label>
          <input {...register("name")} placeholder="Jane Smith"
            className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-dark mb-1">Email Address *</label>
          <input {...register("email")} type="email" placeholder="jane@example.com"
            className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-dark mb-1">Phone Number</label>
          <input {...register("phone")} type="tel" placeholder="+44 7700 000000"
            className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
        </div>
        <div>
          <label className="block text-sm font-medium text-dark mb-1">Sector</label>
          <select {...register("sector")}
            className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white">
            <option value="">Select your sector...</option>
            {sectors.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-dark mb-1">Anything else? (optional)</label>
        <textarea {...register("message")} rows={3}
          placeholder="Tell us about your experience, the types of roles you're open to, or your availability..."
          className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none" />
      </div>

      {error && <p className="text-red-500 text-sm bg-red-50 px-4 py-3 rounded-lg">{error}</p>}

      <button type="submit" disabled={isSubmitting} className="btn-primary w-full py-3.5 text-base disabled:opacity-60">
        {isSubmitting ? <><Loader2 size={16} className="animate-spin" /> Submitting...</> : "Register with us"}
      </button>
    </form>
  );
}
