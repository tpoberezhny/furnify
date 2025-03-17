"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useTranslations } from "next-intl";

interface ContactModalProps {
  onClose: () => void;
}

export default function ContactModal({ onClose }: ContactModalProps) {
  const t = useTranslations("contactModal");
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });
  const [notification, setNotification] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = "hidden";
      console.log(`The mounted value is ${mounted}`);

      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [mounted]);

  if (!mounted) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setNotification({
          message: "Your message has been sent successfully!",
          type: "success",
        });

        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          message: "",
        });
        setTimeout(() => {
          onClose();
        }, 2000);
      } else {
        setNotification({
          message: "Error submitting the form. Please try again.",
          type: "error",
        });
      }
    } catch (error) {
      console.error("Error submiting the form", error);
      setNotification({
        message: "Error submitting the form. Please try again.",
        type: "error",
      });
    }
  };

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-lg">
      <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg w-full max-w-md p-6">
        {/* Exit Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 dark:text-gray-700"
          aria-label="Close Contact Form"
        >
          <X className="w-5 h-5" />
        </button>
        <h2 className="text-2xl font-semibold mb-3">{t("title")}</h2>
        <h1 className="text-lg mb-4">{t("description")}</h1>
        {notification && (
          <div
            className={`p-2 mb-4 border rounded ${
              notification.type === "success"
                ? "text-green-600 bg-green-100 border-green-400"
                : "text-red-600 bg-red-100 border-red-400"
            }`}
          >
            {notification.message}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Input for Name */}
          <div className="relative">
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder=" "
              className="peer contactInput"
            />
            <label htmlFor="name" className="contactLabel">
              {t("name")}
              <span className="text-red-500 ml-1">*</span>
            </label>
          </div>

          {/* Input for Company (Optional) */}
          <div className="relative">
            <input
              type="text"
              name="company"
              id="company"
              value={formData.company}
              onChange={handleChange}
              placeholder=" "
              className="peer contactInput"
            />
            <label htmlFor="company" className="contactLabel">
              {t("companyName")}
            </label>
          </div>

          {/* Input for Email (Required) */}
          <div className="relative">
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder=" "
              className="peer contactInput"
            />
            <label htmlFor="email" className="contactLabel">
              {t("email")}
              <span className="text-red-500 ml-1">*</span>
            </label>
          </div>

          {/* Input for Phone (Required) */}
          <div className="relative">
            <input
              type="tel"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder=" "
              className="peer contactInput"
            />
            <label htmlFor="phone" className="contactLabel">
              {t("phone")}
              <span className="text-red-500 ml-1">*</span>
            </label>
          </div>

          {/* Textarea for Message (Required) */}
          <div className="relative">
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              placeholder=" "
              className="peer contactInput resize-none h-24"
            />
            <label htmlFor="message" className="contactLabel">
              {t("message")}
              <span className="text-red-500 ml-1">*</span>
            </label>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 mt-6">
            <Button variant="outline" type="button" onClick={onClose}>
              {t("close")}
            </Button>
            <Button variant="default" type="submit">
              {t("send")}
            </Button>
          </div>
        </form>
      </div>
    </div>,
    document.body
  );
}
