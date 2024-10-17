import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import photorelish from "../../../public/photorelish.jpg"
 
export const IELTS = () => {
    const navigate = useNavigate();

    const handleBack = () => { 
        navigate(-1);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
        <div className='relative w-full h-[90px] md:h-[200px] lg:h-[180px] overflow-hidden font-thin'>
                <img
                    src={photorelish}
                    alt="Background"
                    className="w-full h-ful"
                />

                <div className="justify-center absolute inset-0 flex items-center bg-black bg-opacity-0 text-white text-center p-4">
                    <h1 className={`text-2xl md:text-4xl font-bold mb- `}  >IELTS</h1>
                </div>
            </div>
            <div className=" p-6 sm:p-8 md:p-10 lg:p-12 ">
                <div className="relative">
                    <div
                        onClick={handleBack}
                        className="fixed  left-1 bg-green-800 h-10 w-10 text-gray-100 p-2 rounded-full cursor-pointer flex items-center justify-center"
                    >
                        <FaArrowLeft className="text-2xl" />
                    </div>
                    <div className="max-w-4xl mx-auto">
                        {/* <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-green-800 text-center"></h1> */}

                        <div className=' flex flex-col md:flex-row md:space-x-4 mb-6'>
                            <div className='flex-1'>
                            <p className="text-base sm:text-lg">
                                    <span className='font-bold'>IELTS (International English Language Testing System)</span> is one of the most popular English language
                                    proficiency tests for those who wish to study, work, or migrate to English-speaking countries. It
                                    assesses a person's ability to communicate in English across four key language skills: listening,
                                    reading, writing, and speaking. IELTS is recognized globally by universities, employers, immigration
                                    authorities, and professional bodies.
                                </p>
                            </div>
                            <div className='flex justify-center'>
                                <img src='https://img.freepik.com/free-photo/english-book-resting-table-working-space_23-2149429574.jpg?ga=GA1.1.830621292.1707550020&semt=ais_hybrid' className='rounded-xl w-auto max-w-xs' alt="English Book" />
                            </div>
                        </div>
                     

                                <h2 className='text-xl font-bold mt-4'>Types of IELTS Tests</h2>
                                <ul className="list-decimal ml-8 p-1 text-base sm:text-lg">
                                    <li><strong>IELTS Academic:</strong> Designed for those applying for higher education or professional registration in an English-speaking environment.</li>
                                    <li><strong>IELTS General Training:</strong> Suitable for those planning to undertake non-academic training, gain work experience, or migrate to an English-speaking country.</li>
                                </ul>

                                <h2 className='text-xl font-bold mt-4'>IELTS Test Format</h2>
                                <p className="text-base sm:text-lg">The IELTS exam is divided into four sections: Listening, Reading, Writing, and Speaking. The total test duration is around 2 hours and 45 minutes.</p>

                        <ul className='list-decimal pl-5 space-y-16 text-base sm:text-lg mt-10'>
                            {/* Listening, Reading, Writing, and Speaking sections */}
                            <li><strong>Listening (30 minutes)</strong>
                                <ul className='list-disc pl-5 space-y-2'>
                                    <li><strong>Format:</strong> This section consists of four recordings of native English speakers, and the test taker must answer 40 questions.
                                        <ul className='list-decimal pl-10 space-y-2'>
                                            <li><strong>Recording 1:</strong> A conversation between two people set in an everyday social context.</li>
                                            <li><strong>Recording 2:</strong> A monologue set in an everyday social context (e.g., a speech about local facilities).</li>
                                            <li><strong>Recording 3:</strong> A conversation between up to four people set in an educational or training context.</li>
                                            <li><strong>Recording 4:</strong> A monologue on an academic subject (e.g., a lecture).</li>
                                        </ul>
                                    </li>
                                    <li><strong>Question Types:</strong> Multiple choice, matching, plan/map/diagram labeling, form/note/table/flow-chart/summary completion, sentence completion.</li>
                                </ul>
                            </li>
                            <li><strong>Reading (60 minutes)</strong>
                                <ul className='list-disc pl-5 space-y-2'>
                                    <li><strong>Academic:</strong>
                                        <ul className='list-decimal pl-5 space-y-2'>
                                            <li><strong>Format:</strong> 3 long texts taken from books, journals, magazines, and newspapers. They may contain diagrams, graphs, or illustrations.</li>
                                            <li><strong>Question Types:</strong> Multiple choice, identifying information, identifying the writer's views/claims, matching information/headings/features/sentence endings, summary/note/table/flow-chart completion, sentence completion, short-answer questions.</li>
                                        </ul>
                                    </li>
                                    <li><strong>General Training:</strong>
                                        <ul className='list-decimal pl-5 space-y-2'>
                                            <li><strong>Format:</strong> Extracts from books, magazines, newspapers, advertisements, notices, and company handbooks.</li>
                                            <li><strong>Question Types:</strong> Similar to the Academic test but based on the content relevant to everyday life.</li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li><strong>Writing (60 minutes)</strong>
                                <ul className='list-disc pl-5 space-y-2'>
                                    <li><strong>Academic:</strong>
                                        <ul className='list-decimal pl-5 space-y-2'>
                                            <li><strong>Task 1:</strong> Describe, summarize, or explain information from a graph, chart, table, or diagram in at least 150 words.</li>
                                            <li><strong>Task 2:</strong> Write an essay of at least 250 words responding to a point of view, argument, or problem.</li>
                                        </ul>
                                    </li>
                                    <li><strong>General Training:</strong>
                                        <ul className='list-decimal pl-5 space-y-2'>
                                            <li><strong>Task 1:</strong> Write a letter requesting information or explaining a situation (at least 150 words).</li>
                                            <li><strong>Task 2:</strong> Write an essay in response to a point of view, argument, or problem (at least 250 words).</li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li><strong>Speaking (11–14 minutes)</strong>
                                <ul className='list-disc pl-5 space-y-2'>
                                    <li><strong>Format:</strong> The speaking test is a face-to-face interview between the test taker and an examiner. It is divided into three parts:
                                        <ul className='list-decimal pl-10 space-y-2'>
                                            <li><strong>Part 1:</strong> Introduction and interview.</li>
                                            <li><strong>Part 2:</strong> Long turn with a task card.</li>
                                            <li><strong>Part 3:</strong> Discussion on abstract ideas and issues.</li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>

                        <div className='flex flex-col md:flex-row md:space-x-4 mt-10'>
                            <div className='flex-1'>
                                <h2 className='text-xl font-bold mt-4'>IELTS Test Format</h2>
                                <ul className='list-disc pl-5 space-y-2'>
                                    <li><strong>Band Scores:</strong> Each of the four sections (Listening, Reading, Writing, Speaking) is scored on a scale of 0 to 9. The overall band score is an average of the four individual scores.</li>
                                    <li><strong>Score Validity:</strong> IELTS scores are valid for two years from the test date.</li>
                                </ul>

                                <h2 className='text-xl font-bold mt-4'>Why Take IELTS?</h2>
                                <ul className='list-disc pl-5 space-y-2'>
                                    <li><strong>Study Abroad:</strong> Required by most universities in English-speaking countries.</li>
                                    <li><strong>Work:</strong> Many employers, professional registration bodies, and governments accept IELTS as proof of English language proficiency.</li>
                                    <li><strong>Migration:</strong> Required by immigration authorities in several countries, including Australia, Canada, New Zealand, and the UK.</li>
                                </ul>
                            </div>
                            <div className='flex justify-center'>
                                <img src='https://img.freepik.com/free-photo/high-angle-kid-cheating-school-test_23-2150105018.jpg?ga=GA1.1.830621292.1707550020&semt=ais_hybrid' className='rounded-xl w-full h-72 max-w-xs' alt="Student Test" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
