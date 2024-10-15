import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

export const EducationConsultancyPage = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Array of consultancy sections
    const consultancySections = [
        {
            image: "https://img.freepik.com/premium-photo/businesswoman-businessman-working-tablet-pc-office_1313853-113560.jpg?ga=GA1.1.830621292.1707550020&semt=ais_hybrid",
            title: "Career Counseling and Guidance",
            content: [
                {
                    subtitle: "Introduction:",
                    text: "Career counseling is aimed at helping students and professionals make informed decisions about their career paths."
                },
                {
                    subtitle: "Services Provided:",
                    list: [
                        "One-on-one career assessment sessions.",
                        "Personality and aptitude tests to identify strengths.",
                        "Guidance on choosing suitable courses and institutions.",
                        "Assistance in creating a roadmap for career growth."
                    ]
                },
                {
                    subtitle: "Benefits:",
                    list: [
                        "Helps in identifying the right career based on individual strengths and interests.",
                        "Reduces confusion and indecision among students and professionals."
                    ]
                },
                {
                    subtitle: "Conclusion:",
                    text: "Career counseling empowers individuals to take confident steps toward a fulfilling career."
                }
            ]
        },
        {
            title: "Higher Education Consultancy",
            content: [
                {
                    subtitle: "Introduction:",
                    text: "Focuses on providing guidance to students seeking admission into universities for undergraduate, postgraduate, and research programs."
                },
                {
                    subtitle: "Services Provided:",
                    list: [
                        "Counseling on selecting suitable courses and universities.",
                        "Guidance on admission processes, including form filling and documentation.",
                        "Support for entrance exam preparation (GRE, GMAT, SAT, etc.).",
                        "Assistance in obtaining scholarships and financial aid."
                    ]
                },
                {
                    subtitle: "Benefits:",
                    list: [
                        "Simplifies the admission process for students and parents.",
                        "Enhances students' chances of securing admission to their preferred institutions."
                    ]
                },
                {
                    subtitle: "Conclusion:",
                    text: "This consultancy ensures students make well-informed choices regarding their higher education journey."
                }
            ]
        },
        {

            title: "Study Abroad Consultancy",
            content: [
                {
                    subtitle: "Introduction:",
                    text: "Specializes in providing support to students who wish to pursue education in foreign countries."
                },
                {
                    subtitle: "Services Provided:",
                    list: [
                        "Information about international universities and courses.",
                        "Assistance with visa application processes and documentation.",
                        "Guidance on financial planning, including managing tuition fees and living expenses.",
                        "Pre-departure orientation about cultural, academic, and lifestyle aspects."
                    ]
                },
                {
                    subtitle: "Benefits:",
                    list: [
                        "Provides a clear pathway for students seeking global education opportunities.",
                        "Ensures students are well-prepared for life abroad."
                    ]
                },
                {
                    subtitle: "Conclusion:",
                    text: "Study abroad consultancy opens doors to global education, equipping students with international exposure."
                }
            ]
        },

        {
            image: "https://img.freepik.com/free-photo/high-angle-people-correcting-grammar-mistakes_23-2150171050.jpg?ga=GA1.1.830621292.1707550020&semt=ais_hybrid",

            title: "Admission Consultancy for Schools and Colleges",
            content: [
                {
                    subtitle: "Introduction:",
                    text: " Assists parents and students in navigating the admission processes for schools and colleges."
                },
                {
                    subtitle: "Services Provided:",
                    list: [
                        "Information on various schools and colleges, including facilities, fees, and curricula.",
                        " Guidance on admission criteria, deadlines, and required documentation.",
                        "Support in preparing for entrance exams and interviews."
                    ]
                },
                {
                    subtitle: "Benefits:",
                    list: [
                        " Simplifies the search and admission process for parents and students.",
                        " Increases chances of securing seats in preferred institutions."
                    ]
                },
                {
                    subtitle: "Conclusion:",
                    text: " This consultancy ensures a smooth transition into the desired educational institution."
                }
            ]
        },

        {
            title: " Educational Loan and Scholarship Consultancy",
            content: [
                {
                    subtitle: "Introduction:",
                    text: "Provides students and parents with information on securing financial support for education."
                },
                {
                    subtitle: "Services Provided:",
                    list: [
                        " Guidance on different types of educational loans available.",
                        " Assistance with the loan application process.",
                        " Information on scholarships and eligibility criteria.",
                        "  Support in preparing necessary financial documents."
                    ]
                },
                {
                    subtitle: "Benefits:",
                    list: [
                        "Helps families manage education expenses effectively.",
                        "Opens up opportunities for students to study without financial constraints."
                    ]
                },
                {
                    subtitle: "Conclusion:",
                    text: " This consultancy is essential for making education affordable and accessible."
                }
            ]
        },

        {
            title: " Institutional Consultancy for Schools and Colleges",
            content: [
                {
                    subtitle: "Introduction:",
                    text: " Offers consultancy to educational institutions on improving their academic standards and infrastructure."
                },
                {
                    subtitle: "Services Provided:",
                    list: [
                        " Guidance on curriculum design and implementation.",
                        " Teacher training and professional development programs.",
                        " Support for establishing modern learning environments (e.g., digital classrooms).",
                        "  Assistance with marketing and student recruitment strategies."
                    ]
                },
                {
                    subtitle: "Benefits:",
                    list: [
                        " Enhances the institution's educational quality and competitiveness.",
                        " Attracts more students through improved facilities and teaching standards."
                    ]
                },
                {
                    subtitle: "Conclusion:",
                    text: " Institutional consultancy helps schools and colleges achieve excellence in education."
                }
            ]
        },

        {
            title: "Online Education and E-Learning Consultancy",
            content: [
                {
                    subtitle: "Introduction:",
                    text: " Provides guidance on implementing and enhancing online education systems."
                },
                {
                    subtitle: "Services Provided:",
                    list: [
                        "Advice on selecting suitable e-learning platforms and tools.",
                        " Curriculum development for online learning.",
                        " Training for teachers to effectively deliver online courses.",
                        "Support in creating engaging and interactive online content."
                    ]
                },
                {
                    subtitle: "Benefits:",
                    list: [
                        "  Enables institutions to provide flexible learning options.",
                        " Enhances students' learning experience through modern teaching methods."
                    ]
                },
                {
                    subtitle: "Conclusion:",
                    text: " Online education consultancy equips institutions to meet the evolving needs of modern education."
                }
            ]
        },

        {
            image: "https://img.freepik.com/free-photo/business-executives-discussing-with-their-colleagues-whiteboa_1170-1832.jpg?ga=GA1.1.830621292.1707550020&semt=ais_hybrid",
            title: " Educational Event and Workshop Planning",
            color: "bg-red-300",
            content: [
                {
                    subtitle: "Introduction:",
                    text: " Assists in organizing educational events like workshops, seminars, and career fairs."
                },
                {
                    subtitle: "Services Provided:",
                    list: [
                        " Planning and organizing educational events and activities.",
                        " Collaboration with experts to conduct seminars and workshops.",
                        " Marketing and promotion of educational events.",
                    ]
                },
                {
                    subtitle: "Benefits:",
                    list: [
                        " Creates learning opportunities beyond traditional classrooms.",
                        "  Helps institutions engage with students and parents effectively."
                    ]
                },
                {
                    subtitle: "Conclusion:",
                    text: " These events enhance students' educational experience by providing practical insights and networking opportunities."
                },
            

            ]
        },
    ];

    return (
        <>
            <div className=" text-gray-800 p-6 sm:p-8 md:p-10 lg:p-12 font-serif min-h-screen">
                <div className="relative">
                    <div
                        onClick={handleBack}
                        className="fixed  left-1 bg-green-800 h-10 w-10 text-gray-100 p-2 rounded-full cursor-pointer flex items-center justify-center"
                    >
                        <FaArrowLeft className="text-2xl" />
                    </div>
                    <div className={`max-w-4xl mx-auto`}>
                        <h1 className="text-2xl ml-9 sm:text-2xl md:text-3xl font-bold mb-10 text-green-800 text-center ">Education Consultancy</h1>
                        <ul className="list-decimal space-y-14">
                            {consultancySections.map((section, index) => (
                                <div className={``}>
                                <li key={index} className={` flex flex-col md:flex-row md:space-x-4 `}>
                                    <div className="flex-1">
                                        <strong className="block mb-2 text-xl font-semibold">{section.title}</strong>
                                        <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg">
                                            {section.content.map((item, idx) => (
                                                <li key={idx}>
                                                    {item.subtitle ? (
                                                        <>
                                                            <strong>{item.subtitle}</strong>
                                                            {item.text && <span> {item.text}</span>}
                                                            {item.list && (
                                                                <ul className="list-decimal pl-5 space-y-2">
                                                                    {item.list.map((listItem, listIdx) => (
                                                                        <li key={listIdx}>{listItem}</li>
                                                                    ))}
                                                                </ul>
                                                            )}
                                                        </>
                                                    ) : null}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    {section.image && (
                                        <img src={section.image} alt={section.title} className="w-full md:w-1/3 h-auto  mb-4 rounded-lg" />
                                    )}
                                </li>
                                </div>  ))}
                        </ul>

                    </div>
                    
                </div>
            </div>
        </>
    );
};
