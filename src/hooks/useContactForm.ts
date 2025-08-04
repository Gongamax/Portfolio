import { useState } from "react";
import type { FormEvent } from "react";
import emailjs from "@emailjs/browser";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface UseContactFormReturn {
  formData: FormData;
  isLoading: boolean;
  isSuccess: boolean;
  error: string | null;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>;
  resetForm: () => void;
}

export const useContactForm = (): UseContactFormReturn => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (error) setError(null);
    if (isSuccess) setIsSuccess(false);
  };

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      setError("Name is required");
      return false;
    }
    if (!formData.email.trim()) {
      setError("Email is required");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError("Please enter a valid email address");
      return false;
    }
    if (!formData.subject.trim()) {
      setError("Subject is required");
      return false;
    }
    if (!formData.message.trim()) {
      setError("Message is required");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);
    setError(null);

    try {
      // EmailJS configuration - you'll need to replace these with your actual values
      const serviceId =
        import.meta.env.VITE_EMAILJS_SERVICE_ID || "your_service_id";
      const templateId =
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "your_template_id";
      const publicKey =
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "your_public_key";

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: "Gonçalo Frutuoso",
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setIsSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error("EmailJS Error:", err);
      setError(
        "Failed to send message. Please try again or contact me directly."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({ name: "", email: "", subject: "", message: "" });
    setError(null);
    setIsSuccess(false);
    setIsLoading(false);
  };

  return {
    formData,
    isLoading,
    isSuccess,
    error,
    handleChange,
    handleSubmit,
    resetForm,
  };
};
