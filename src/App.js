import React, { useState, useEffect } from 'react';
import { FaClock } from 'react-icons/fa';

const QuizApp = () => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState('');
    const [userAnswers, setUserAnswers] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const [usedIds, setUsedIds] = useState([]);
    const [timer, setTimer] = useState(30);
    const [enableOptions, setEnableOptions] = useState(false);


    useEffect(() => {
      const getRandomId = () => Math.floor(Math.random() * 100) + 1;

      const getData = async () => {
          try {
              const randomId = getRandomId();
              if (usedIds.includes(randomId)) {
                getData();
                return;
              }
              const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${randomId}`);
              if (!response.ok) {
                  throw new Error('Veri alınamadı');
              }
              const data = await response.json();
              setQuestions(prevQuestions => [...prevQuestions, data]);
              setUsedIds(prevIds => [...prevIds, randomId]);
          } catch (error) {
              console.error('Soru alınamadı:', error);
          }
      };

      if (questions.length < 10) {
          getData();
      }

      if (currentQuestionIndex === 0) {
        setEnableOptions(false);
        setTimeout(() => {
          setEnableOptions(true);
        }, 10000);
      } 
    }, [questions.length, usedIds, currentQuestionIndex]);
    
    useEffect(() => {
      const countdown = setInterval(() => {
          if (timer > 0) {
              setTimer(timer - 1);
          } else {
              handleNextQuestion();
          }
      }, 1000);
      return () => clearInterval(countdown);
    }, );

    const handleOptionSelect = (option) => {
      if (enableOptions) {
        setSelectedOption(option);
      }

        const buttons = document.querySelectorAll('.option button');
        buttons.forEach((button, index) => {
        button.classList.remove('btn-danger');
        if (String.fromCharCode(65 + index) === option && enableOptions) {
          button.classList.add('btn-danger'); 
        }
      });
    };

    const handleNextQuestion = () => {
      const updatedUserAnswers = [...userAnswers];
      updatedUserAnswers.push(selectedOption);
      setUserAnswers(updatedUserAnswers);
      const buttons = document.querySelectorAll('.option button');
      buttons.forEach((button, index) => {
        button.classList.remove('btn-danger');
      })

      setSelectedOption('');
      
      if (currentQuestionIndex < 9) {
        setCurrentQuestionIndex(prevIndex => prevIndex + 1);
        setTimer(30); 
        setEnableOptions(false);
      } else {
        setShowResults(true);
      }
      setTimeout(() => {
        setEnableOptions(true); 
      }, 10000);
  };


  return (
      <div className="quiz-container d-flex justify-content-center align-items-center vh-100" style={{backgroundImage: 'linear-gradient(to right, purple, darksalmon )'}}>
        {!showResults ? (
            <div className="question-container col-md-5">
                <div className="card">
                    <div className="card-body" style={{backgroundColor:"#fff5ee"}}>
                        <h2 className="card-title ms-3">Soru {currentQuestionIndex + 1}</h2>
                        <hr/>
                        <p className="card-text ms-3">{questions[currentQuestionIndex]?.title} ?</p>
                        <div className="options-container">
                            {questions[currentQuestionIndex]?.body.split('\n').map((option, index) => (
                                <div className="option" key={index} onClick={() => handleOptionSelect(String.fromCharCode(65 + index))}>
                                  <button type="button" className={"ms-3 mt-2 me-3 btn btn-outline-danger"} disabled={!enableOptions}>{String.fromCharCode(65 + index)}</button>{option}
                                </div>
                            ))}
                        </div>
                        <div className="timer-container mt-5">
                            <FaClock className="timer-icon" />
                            <span className="timer">{timer} saniye</span>
                        </div>
                    </div>
                </div>
            </div>
            ) : (
            <div className="results-container">
                <h2>Sonuçlar</h2>
                <table style={{ backgroundColor: '#fff5ee', borderCollapse: 'collapse', width: '100%' }}>
                  <thead>
                    <tr>
                      <th style={{ border: '1px solid #000', padding: '8px', backgroundColor: '#fff5ee' }}>Soru</th>
                      <th style={{ border: '1px solid #000', padding: '8px', backgroundColor: '#fff5ee' }}>Kullanıcı Yanıtı</th>
                    </tr>
                  </thead>
                  <tbody>
                    {questions.slice(0, 10).map((question, index) => (
                      <tr key={question.id}>
                        <td style={{ border: '1px solid #000', padding: '8px' }}>{index + 1} - {question.title} ? </td>
                        <td style={{ border: '1px solid #000', padding: '8px' }}>{userAnswers[index]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
            </div>
          )}
    </div>
);
};

export default QuizApp;
