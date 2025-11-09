"use client";

import * as React from "react";

const ContactSection = () => {
    // This is a presentational component.
    // Form submission logic can be added here using state management.
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission
        console.log("Form submitted");
    };

    return (
        <section
            id="contact"
            className="relative w-full overflow-hidden bg-background py-20 md:py-32"
        >
            <div
                aria-hidden="true"
                className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-[1000px] h-[1000px] bg-primary/15 rounded-full blur-[200px] -z-0"
            />

            <div className="container relative z-10 mx-auto px-6 md:px-8">
                <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
                    <div className="mb-6 inline-flex items-center justify-center rounded-lg border border-primary bg-accent px-4 py-2 text-sm font-medium text-primary">
                        Contact
                    </div>

                    <h2 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
                        Get in touch!
                    </h2>

                    <p className="max-w-3xl text-base text-text-secondary mb-4">
                        We'd love to talk about how we can integrate AI into your business. Leave us a message and we'll get back to you within 24 hours to schedule a call!
                    </p>

                    <div className="mb-8 flex flex-col sm:flex-row gap-4 items-center justify-center text-base text-muted-foreground">
                        <a href="mailto:contact@matriqz.com" className="flex items-center gap-2 text-primary hover:underline">
                            📧 contact@matriqz.com
                        </a>
                        <span className="hidden sm:inline">•</span>
                        <a href="tel:+917483417996" className="flex items-center gap-2 text-primary hover:underline">
                            📞 +91 7483417996
                        </a>
                    </div>

                    <form className="w-full text-left" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            <input
                                type="text"
                                placeholder="First Name"
                                className="h-14 w-full rounded-[12px] border border-input-border bg-input px-4 text-base text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                aria-label="First Name"
                            />
                            <input
                                type="text"
                                placeholder="Last Name"
                                className="h-14 w-full rounded-[12px] border border-input-border bg-input px-4 text-base text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                aria-label="Last Name"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="h-14 w-full rounded-[12px] border border-input-border bg-input px-4 text-base text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                aria-label="Email"
                             />
                            <input
                                type="tel"
                                placeholder="Phone"
                                className="h-14 w-full rounded-[12px] border border-input-border bg-input px-4 text-base text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                aria-label="Phone"
                            />
                            <textarea
                                placeholder="Message"
                                className="min-h-[160px] w-full resize-none rounded-[12px] border border-input-border bg-input px-4 py-4 text-base text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:col-span-2"
                                aria-label="Message"
                            />
                        </div>
                        <div className="mt-8">
                            <button
                                type="submit"
                                className="inline-flex items-center justify-center whitespace-nowrap rounded-[12px] text-base font-medium transition-colors border border-primary text-white hover:bg-primary/10 py-4 px-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;