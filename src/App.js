import React, { useState } from 'react';

export default function App() {
	
	const questions = [
		{
			questionText: 'What is the last letter in the English alphabet?',
			answerOptions: [
				{ answerText: 'Q', answerSymbol: 'A', isCorrect: false },
				{ answerText: 'W', answerSymbol: 'B', isCorrect: false },
				{ answerText: 'Z', answerSymbol: 'C', isCorrect: true, isTrue: true },
				{ answerText: 'R', answerSymbol: 'D', isCorrect: false },
			],
		},
		{
			questionText: 'What is the capital of Great Britain?',
			answerOptions: [
				{ answerText: 'New York', answerSymbol: 'A', isCorrect: false },
				{ answerText: 'Paris', answerSymbol: 'B', isCorrect: false },
				{ answerText: 'London', answerSymbol: 'C', isCorrect: true, isTrue: true },
				{ answerText: 'Dublin', answerSymbol: 'D', isCorrect: false },
			],
		},
		{
			questionText: 'What is the name of a famous business book?',
			answerOptions: [
				{ answerText: 'Rich Dad, Poor Dad', answerSymbol: 'A', isCorrect: true, isTrue: true },
				{ answerText: 'Very rich grandma', answerSymbol: 'B', isCorrect: false },
				{ answerText: 'Uncle Scrooge', answerSymbol: 'C', isCorrect: false },
				{ answerText: 'Poor husband', answerSymbol: 'D', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', answerSymbol: 'A', isCorrect: true, isTrue: true },
				{ answerText: 'Samsung', answerSymbol: 'B', isCorrect: false },
				{ answerText: 'Amazon', answerSymbol: 'C', isCorrect: false },
				{ answerText: 'Microsoft', answerSymbol: 'D', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '3', answerSymbol: 'A', isCorrect: false },
				{ answerText: '4', answerSymbol: 'B', isCorrect: false },
				{ answerText: '12', answerSymbol: 'C', isCorrect: false },
				{ answerText: '7', answerSymbol: 'D', isCorrect: true, isTrue: true },
			],
		},
	];

	let [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [startTest, setStartTest] = useState(true);


	const handleAnswerOptionClick = (isCorrect) => {
			  if (isCorrect) {
			  setScore(score * 2 || 500);   
		  }

	const nextQuestion = currentQuestion + 1;
		if (isCorrect && nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);	
		}

		else {
			setShowScore(true);
			setStartTest(true);
		}
	};

	const handleStartTest = () => {
		setCurrentQuestion(0);
		setStartTest(false);
		setShowScore(false);
		setScore(0);
	}

	return (
		  <div className='app-wrap'>
			{
			  startTest ? (
				<div className='start-screen'>
					<div className='start-wrap'>
						<div className='hand'>
						</div>
						<div class="start-content">
					<h1>Who wants to be a millionaire?</h1>
				  <button onClick={handleStartTest} className='start-button'>Start</button></div></div>
				  {showScore  && (
					<div className='score-section'>
						<div className='hand'>
						</div>
						<div className='total-content'>
					  <p className="total">Total score: </p>
					  <span className="score">${score} earned</span>	
					  <button onClick={handleStartTest} className='start-button'>Try again</button>
					  </div>
					</div>
				  )}
				</div>
			  ) : (
				  <div className='container'>
					<div className='quiz-section'>
						<div className='question-section'>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
						</div>
						<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button className="button-answer" onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}><span class="answer-symbol">{answerOption.answerSymbol}</span>{answerOption.answerText}</button>
						))}
						</div>
					</div>	  
					<div className='score-table'>
						<div className="score-cell">$1,000,000</div>
						<div className="score-cell">$500,000</div>
						<div className="score-cell">$250,000</div>
						<div className="score-cell">$125,000</div>
						<div className="score-cell">$64,000</div>
						<div className="score-cell">$32,000</div>
						<div className="score-cell">$16,000</div>
						<div className="score-cell">$8,000</div>
						<div className="score-cell">$4,000</div>
						<div className="score-cell">$2,000</div>
						<div className="score-cell">$1,000</div>
						<div className="score-cell">$500</div>
						<div className="score-cell received-points"><div className='question-count'>${score}</div></div>
					</div>
					<nav class="mobile-nav">
						<input class="mobile-nav__check" type="checkbox" id="showmenu"/>
						<label class="mobile-nav__showmenu" for="showmenu"></label>
						<ul class="hide-score-table">
							<div className="score-cell">$1,000,000</div>
							<div className="score-cell">$500,000</div>
							<div className="score-cell">$250,000</div>
							<div className="score-cell">$125,000</div>
							<div className="score-cell">$64,000</div>
							<div className="score-cell">$32,000</div>
							<div className="score-cell">$16,000</div>
							<div className="score-cell">$8,000</div>
							<div className="score-cell">$4,000</div>
							<div className="score-cell">$2,000</div>
							<div className="score-cell">$1,000</div>
							<div className="score-cell">$500</div>
							<div className="score-cell"><div className='question-count'>${score}</div></div>
 						</ul>
					</nav>
				  </div>
				  )}
			  </div>
			  );
		}