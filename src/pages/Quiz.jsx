import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { getCurrentUser } from '../utils/auth';
import { saveQuizReport } from '../utils/localStorage';

const Quiz = () => {
  const navigate = useNavigate();
  const currentUser = getCurrentUser();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds

  const questions = [
    {
      question: 'When was the Constitution of India adopted?',
      options: ['26th January 1950', '26th November 1949', '15th August 1947', '26th January 1949'],
      correct: 1,
      explanation: 'The Constitution was adopted on 26th November 1949 and came into effect on 26th January 1950.'
    },
    {
      question: 'How many Fundamental Rights are guaranteed by the Indian Constitution?',
      options: ['Four', 'Five', 'Six', 'Seven'],
      correct: 2,
      explanation: 'The Indian Constitution guarantees six Fundamental Rights in Part III (Articles 12-35).'
    },
    {
      question: 'Which article is known as the "Heart and Soul" of the Constitution?',
      options: ['Article 14', 'Article 21', 'Article 32', 'Article 370'],
      correct: 2,
      explanation: 'Article 32 (Right to Constitutional Remedies) is called the heart and soul of the Constitution by Dr. B.R. Ambedkar.'
    },
    {
      question: 'How many Fundamental Duties are there in the Constitution?',
      options: ['9', '10', '11', '12'],
      correct: 2,
      explanation: 'There are 11 Fundamental Duties. Originally 10 were added in 1976, and one more was added in 2002.'
    },
    {
      question: 'Which Fundamental Right prohibits discrimination on grounds of religion, race, caste, sex, or place of birth?',
      options: ['Right to Equality', 'Right to Freedom', 'Right to Freedom of Religion', 'Cultural and Educational Rights'],
      correct: 0,
      explanation: 'Right to Equality (Article 15) prohibits discrimination on these grounds.'
    },
    {
      question: 'Who is known as the "Father of the Indian Constitution"?',
      options: ['Mahatma Gandhi', 'Jawaharlal Nehru', 'Dr. B.R. Ambedkar', 'Sardar Vallabhbhai Patel'],
      correct: 2,
      explanation: 'Dr. B.R. Ambedkar is known as the Father of the Indian Constitution as he was the Chairman of the Drafting Committee.'
    },
    {
      question: 'Which amendment added Fundamental Duties to the Constitution?',
      options: ['40th Amendment', '41st Amendment', '42nd Amendment', '43rd Amendment'],
      correct: 2,
      explanation: 'The 42nd Amendment Act, 1976 added Fundamental Duties to the Constitution.'
    },
    {
      question: 'Which writ is used to protect personal liberty?',
      options: ['Mandamus', 'Habeas Corpus', 'Certiorari', 'Prohibition'],
      correct: 1,
      explanation: 'Habeas Corpus is used to protect personal liberty by directing authorities to produce the detained person.'
    },
    {
      question: 'What is the minimum age to become the President of India?',
      options: ['30 years', '35 years', '40 years', '45 years'],
      correct: 1,
      explanation: 'According to Article 58, a person must be at least 35 years old to become the President of India.'
    },
    {
      question: 'Which part of the Constitution deals with Fundamental Rights?',
      options: ['Part II', 'Part III', 'Part IV', 'Part V'],
      correct: 1,
      explanation: 'Part III of the Constitution (Articles 12-35) deals with Fundamental Rights.'
    }
  ];

  useEffect(() => {
    if (!currentUser) {
      navigate('/signin');
    }
  }, [currentUser, navigate]);

  useEffect(() => {
    if (showResult) return;
    
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleFinishQuiz();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [showResult]);

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNext = () => {
    if (selectedAnswer === '') {
      alert('Please select an answer');
      return;
    }

    if (questions[currentQuestion].correct === selectedAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer('');
    } else {
      handleFinishQuiz();
    }
  };

  const handleFinishQuiz = () => {
    let finalScore = score;
    if (selectedAnswer !== '' && questions[currentQuestion].correct === selectedAnswer) {
      finalScore += 1;
    }

    const quizData = {
      score: finalScore,
      totalQuestions: questions.length,
      percentage: Math.round((finalScore / questions.length) * 100),
      answers: {}
    };

    if (currentUser) {
      saveQuizReport(currentUser.email, quizData);
    }

    setScore(finalScore);
    setShowResult(true);
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer('');
    setScore(0);
    setShowResult(false);
    setTimeLeft(600);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (!currentUser) {
    return null;
  }

  if (showResult) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="text-6xl mb-4">
              {percentage >= 80 ? '🎉' : percentage >= 60 ? '👍' : '📚'}
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Quiz Complete!</h2>
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg p-8 mb-6">
              <p className="text-2xl mb-2">Your Score</p>
              <p className="text-5xl font-bold mb-2">{score} / {questions.length}</p>
              <p className="text-2xl">{percentage}%</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Performance</h3>
              <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
                <div
                  className={`h-4 rounded-full ${
                    percentage >= 80 ? 'bg-green-600' : percentage >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                  }`}
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
              {percentage >= 80 && (
                <p className="text-green-600 font-semibold">Excellent! You have a strong understanding of the Constitution!</p>
              )}
              {percentage >= 60 && percentage < 80 && (
                <p className="text-yellow-600 font-semibold">Good job! Keep learning to improve your score.</p>
              )}
              {percentage < 60 && (
                <p className="text-red-600 font-semibold">Keep studying! Review the Constitution section to improve.</p>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleRestart}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
              >
                Take Quiz Again
              </button>
              <button
                onClick={() => navigate('/dashboard')}
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-200"
              >
                View Dashboard
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">Constitutional Knowledge Quiz</h1>
              <p className="text-gray-600">Question {currentQuestion + 1} of {questions.length}</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-blue-600">{formatTime(timeLeft)}</div>
              <p className="text-sm text-gray-500">Time Remaining</p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-6">
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-blue-600 h-3 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          {/* Question */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">{question.question}</h2>
            <div className="space-y-3">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  className={`w-full text-left p-4 rounded-lg border-2 transition duration-200 ${
                    selectedAnswer === index
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-gray-300 hover:border-blue-300 hover:bg-gray-50'
                  }`}
                >
                  <span className="font-medium text-gray-800">{String.fromCharCode(65 + index)}. {option}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between">
            <button
              onClick={() => navigate('/dashboard')}
              className="px-6 py-2 text-gray-600 hover:text-gray-800"
            >
              Exit Quiz
            </button>
            <button
              onClick={handleNext}
              disabled={selectedAnswer === ''}
              className="bg-blue-600 text-white px-8 py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;

