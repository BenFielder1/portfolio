import ContactForm from "@/components/ContactForm";
import Link from "next/link";

export default function ContactPage() {
    return (
        <div className="relative">
            {/* Hero section */}
            <section className="py-16 relative">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <span className="font-mono text-sm text-[var(--accent-cyan)] mb-4 block">
                            GET IN TOUCH
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            Let&apos;s <span className="text-gradient">Connect</span>
                        </h1>
                        <p className="text-xl text-[var(--text-secondary)] leading-relaxed">
                            Have a project in mind or just want to chat? I&apos;m always excited 
                            to discuss new opportunities and ideas.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact content */}
            <section className="py-12 relative">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 max-w-5xl">
                        {/* Left side - Info */}
                        <div className="space-y-8">
                            {/* Intro text */}
                            <div className="glass-card p-6">
                                <p className="text-[var(--text-secondary)] leading-relaxed">
                                    I&apos;m currently working as a Graduate Software Developer at 
                                    Content Guru. Feel free to reach out if you&apos;d like to discuss 
                                    interesting projects, collaborate on something, or just have a chat 
                                    about technology!
                                </p>
                            </div>

                            {/* Contact methods */}
                            <div className="space-y-4">
                                <h2 className="text-lg font-bold mb-4">Reach out directly</h2>
                                
                                {/* Email */}
                                <a
                                    href="mailto:bencfielder@outlook.com"
                                    className="glass-card p-4 flex items-center gap-4 group"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--accent-cyan)] to-[var(--accent-purple)] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                        <svg className="w-6 h-6 text-[var(--bg-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-xs uppercase tracking-wider text-[var(--text-muted)] mb-1 font-mono">Email</p>
                                        <p className="font-medium group-hover:text-[var(--accent-cyan)] transition-colors">
                                            bencfielder@outlook.com
                                        </p>
                                    </div>
                                </a>
                            </div>

                            {/* Social links */}
                            <div>
                                <h2 className="text-lg font-bold mb-4">Find me online</h2>
                                
                                <div className="flex gap-4">
                                    <Link
                                        href="https://github.com/BenFielder1"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="glass-card p-4 flex items-center gap-3 flex-1 group"
                                    >
                                        <svg className="w-6 h-6 text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                        </svg>
                                        <span className="font-medium">GitHub</span>
                                    </Link>
                                    
                                    <Link
                                        href="https://www.linkedin.com/in/ben-fielder-38a9ba276/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="glass-card p-4 flex items-center gap-3 flex-1 group"
                                    >
                                        <svg className="w-6 h-6 text-[var(--text-secondary)] group-hover:text-[#0A66C2] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                        <span className="font-medium">LinkedIn</span>
                                    </Link>
                                </div>
                            </div>

                            {/* Response time info */}
                            <div className="glass-card p-6 border-[var(--accent-cyan)]/30 border">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="relative flex h-3 w-3">
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-[var(--accent-cyan)]"></span>
                                    </span>
                                    <span className="font-semibold text-[var(--accent-cyan)]">Response Time</span>
                                </div>
                                <p className="text-sm text-[var(--text-secondary)]">
                                    I typically respond within 24-48 hours. Feel free to reach out 
                                    if you&apos;d like to connect or collaborate on something interesting!
                                </p>
                            </div>
                        </div>

                        {/* Right side - Form */}
                        <div>
                            <div className="glass-card p-6 md:p-8">
                                <h2 className="text-2xl font-bold mb-6">
                                    Send a Message
                                </h2>
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
