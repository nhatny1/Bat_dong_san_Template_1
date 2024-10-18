'use client';
import { useState } from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import FollowUs from '../components/followus/followus';

export default function Page() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        { question: "Property Manager", answer: "There are many variations of passages available but Ut elit tellus luctus nec ullamcorper at mattis pulvinar." },
        { question: "Property Consisting of land and", answer: "There are many variations of passages available but Ut elit tellus luctus nec ullamcorper at mattis pulvinar." },
        { question: "Opening Hours", answer: "There are many variations of passages available but Ut elit tellus luctus nec ullamcorper at mattis pulvinar." },
        { question: "What Security Precautions do You Take?", answer: "There are many variations of passages available but Ut elit tellus luctus nec ullamcorper at mattis pulvinar." },
        { question: "Can I Bring a Tripod For My Camera?", answer: "There are many variations of passages available but Ut elit tellus luctus nec ullamcorper at mattis pulvinar." },
        { question: "What Amenities Are Available at The Top?", answer: "There are many variations of passages available but Ut elit tellus luctus nec ullamcorper at mattis pulvinar." },
        { question: "Investment Agreement", answer: "There are many variations of passages available but Ut elit tellus luctus nec ullamcorper at mattis pulvinar." },
        { question: "Is It Sale On-line Ordering?", answer: "There are many variations of passages available but Ut elit tellus luctus nec ullamcorper at mattis pulvinar." },
        { question: "High Fashion Impact Our Brand?", answer: "There are many variations of passages available but Ut elit tellus luctus nec ullamcorper at mattis pulvinar." },
        { question: "Required Documents Support", answer: "There are many variations of passages available but Ut elit tellus luctus nec ullamcorper at mattis pulvinar." },
        { question: "Can I pay with Visa Inspire Card?", answer: "There are many variations of passages available but Ut elit tellus luctus nec ullamcorper at mattis pulvinar." },
        { question: "What Security Precautions do You Take?", answer: "There are many variations of passages available but Ut elit tellus luctus nec ullamcorper at mattis pulvinar." },
    ];

    return (
        <>
        <div className="bg-black-800 text-white font-sans">
            <div className="container mx-auto p-6">
                <div className="text-center mb-10">
                    <h2 className="text-xl text-yellow-400">How can we help you</h2>
                    <h1 className="text-3xl font-bold">Ask Questions To Tell Us</h1>
                    <p className=" text-center mt-4 max-w-[730px] mx-auto">Trage agile frameworks to provide a robust synopsis for high level overviews.Iterative approaches to corporate strategy foster collabo</p>
                </div>

                <div className="faq-list grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="faq-item border p-3 bg-black-700 rounded-lg transition-all duration-300">
                            <h3
                                className="faq-question cursor-pointer flex justify-between items-center"
                                onClick={() => toggleFAQ(index)}
                                aria-expanded={activeIndex === index}
                                aria-controls={`faq-answer-${index}`}
                                role="button"
                            >
                                {faq.question}
                                <span
                                    className={`transform transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}
                                >
                                    &#9660;
                                </span>
                            </h3>
                            <p
                                id={`faq-answer-${index}`}
                                className={`faq-answer mt-2 ${activeIndex === index ? '' : 'hidden'}`}
                                aria-hidden={activeIndex !== index}
                            >
                                {faq.answer}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            </div>
            {/* Follow Us Section */}
                <FollowUs />
        </>
    );
}
