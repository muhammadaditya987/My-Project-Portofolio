import { useState } from "react";
import { motion } from "motion/react";
import emailjs from "@emailjs/browser";

import Container from "../components/common/Container";

import { FaArrowRight } from "react-icons/fa6";


const Contact = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });


    const handleSubmit = async (e) => {

        e.preventDefault();

        if (!formData.name ||!formData.email ||!formData.message) {
            alert("Please fill in all fields.");
            return;
        }

        try {
            await emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            {
                name: formData.name,
                email: formData.email,
                message: formData.message,
            },
            
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );

            alert("Message sent successfully!");

            //KOSONGKAN FORM SETELAH PESAN TERKIRIM
            setFormData({
                name: "",
                email: "",
                message: "",
            })

        } catch (error) {
            alert("Failed to send message. Please try again later.", error);
        }
    };

    return (

        <section
            id="contact"
            className="relative min-h-[calc(100vh-5rem)] scroll-mt-20 overflow-hidden py-20"
        >

            {/* GRADIENT */}

            <div
                className="
                    absolute
                    left-1/2
                    top-1/3
                    h-96
                    w-96
                    -translate-x-1/2
                    rounded-full
                    bg-cyan-500/10
                    blur-[140px]
                "
            />


            <Container>
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 30,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.3,
                    }}
                    transition={{
                        duration: 0.7,
                    }}
                >
                    {/* HEADING */}

                    <div>

                        <p className="text-sm font-semibold uppercase tracking-[6px] text-cyan-400">
                            CONTACT
                        </p>

                        <h2 className="mt-4 text-4xl font-black md:text-5xl">
                            Let's work together.
                        </h2>

                        <p className="mt-5 max-w-xl leading-7 text-gray-400">
                            Punya project atau ingin berdiskusi? Silakan kirim pesan melalui form di bawah.
                        </p>

                    </div>


                    {/* FORM */}

                    <div
                        className="
                            mt-12
                            max-w-3xl
                            rounded-4xl
                            border
                            border-white/10
                            bg-white/5
                            p-6
                            backdrop-blur-xl
                            md:p-10
                        "
                    >

                        <form onSubmit={handleSubmit}>

                            {/* NAME */}

                            <div>

                                <label
                                    htmlFor="name"
                                    className="text-sm text-gray-400"
                                >
                                    Name
                                </label>

                                <input
                                    id="name"
                                    type="text"
                                    placeholder="Your name"
                                    value={formData.name}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            name: e.target.value,
                                        })
                                    }
                                    className="
                                        mt-2
                                        w-full
                                        rounded-xl
                                        border
                                        border-white/10
                                        bg-black/20
                                        px-5
                                        py-4
                                        outline-none
                                        transition
                                        focus:border-cyan-400/50
                                    "
                                />

                            </div>


                            {/* EMAIL */}

                            <div className="mt-6">

                                <label
                                    htmlFor="email"
                                    className="text-sm text-gray-400"
                                >
                                    Email
                                </label>

                                <input
                                    id="email"
                                    type="email"
                                    placeholder="you@example.com"
                                    value={formData.email}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            email: e.target.value,
                                        })
                                    }
                                    className="
                                        mt-2
                                        w-full
                                        rounded-xl
                                        border
                                        border-white/10
                                        bg-black/20
                                        px-5
                                        py-4
                                        outline-none
                                        transition
                                        focus:border-cyan-400/50
                                    "
                                />

                            </div>


                            {/* MESSAGE */}

                            <div className="mt-6">

                                <label
                                    htmlFor="message"
                                    className="text-sm text-gray-400"
                                >
                                    Message
                                </label>

                                <textarea
                                    id="message"
                                    rows="6"
                                    placeholder="Tell me about your project..."
                                    value={formData.message}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            message: e.target.value,
                                        })
                                    }
                                    className="
                                        mt-2
                                        w-full
                                        resize-none
                                        rounded-xl
                                        border
                                        border-white/10
                                        bg-black/20
                                        px-5
                                        py-4
                                        outline-none
                                        transition
                                        focus:border-cyan-400/50
                                    "
                                />

                            </div>


                            {/* SUBMIT */}

                            <button
                                type="submit"
                                className="
                                    mt-8
                                    flex
                                    items-center
                                    gap-3
                                    rounded-full
                                    bg-cyan-500
                                    px-8
                                    py-4
                                    font-semibold
                                    text-black
                                    transition-all
                                    duration-300
                                    hover:gap-5
                                    hover:bg-cyan-400
                                "
                            >
                                Send Message

                                <FaArrowRight />

                            </button>

                        </form>

                    </div>
                </motion.div>

            </Container>

        </section>

    );
};

export default Contact;