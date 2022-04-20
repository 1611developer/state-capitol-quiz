import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'What is the capital of Alabama?',
			answerOptions: [
				{ answerText: 'Huntsville', isCorrect: false },
				{ answerText: 'Birmingham', isCorrect: false },
				{ answerText: 'Montgomery', isCorrect: true },
			],
		},
		{
			questionText: 'What is the capitol of Alaska?',
			answerOptions: [
				{ answerText: 'Anchorage', isCorrect: false },
				{ answerText: 'Juneau', isCorrect: true },
				{ answerText: 'Fairbanks', isCorrect: false },
			],
		},
		{
			questionText: 'What is the capitol of Arizona?',
			answerOptions: [
				{ answerText: 'Phoenix', isCorrect: true },
				{ answerText: 'Scottsdale', isCorrect: false },
				{ answerText: 'Tucson', isCorrect: false },
			],
		},
		{
			questionText: 'What is the capitol of Arkansas?',
			answerOptions: [
				{ answerText: 'Littlerock', isCorrect: true },
				{ answerText: 'Fayetteville', isCorrect: false },
				{ answerText: 'Bentonville', isCorrect: false },
			],
		},
		{
			questionText: 'What is the capitol of California?',
			answerOptions: [
				{ answerText: 'Los Angeles', isCorrect: false },
				{ answerText: 'San Diego', isCorrect: false },
				{ answerText: 'Sacramento', isCorrect: true },
			],
		},
		{
			questionText: 'What is the capital of Colorado?',
			answerOptions: [
				{ answerText: 'Colorado Springs', isCorrect: false },
				{ answerText: 'Denver', isCorrect: true },
				{ answerText: 'Boulder', isCorrect: false },
			],
		},
		{
			questionText: 'What is the capitol of Connecticut?',
			answerOptions: [
				{ answerText: 'Stamford', isCorrect: false },
				{ answerText: 'Hartford', isCorrect: true },
				{ answerText: 'New Haven', isCorrect: false },
			],
		},
		{
			questionText: 'What is the capitol of Deleware?',
			answerOptions: [
				{ answerText: 'Dover', isCorrect: true },
				{ answerText: 'Wilmington', isCorrect: false },
				{ answerText: 'Newark', isCorrect: false },
			],
		},
		{
			questionText: 'What is the capitol of Florida?',
			answerOptions: [
				{ answerText: 'Tampa', isCorrect: false },
				{ answerText: 'Miami', isCorrect: false },
				{ answerText: 'Tallahassee', isCorrect: true },
			],
		},
		{
			questionText: 'What is the capitol of Georgia?',
			answerOptions: [
				{ answerText: 'Savannah', isCorrect: false },
				{ answerText: 'Athens', isCorrect: false },
				{ answerText: 'Atlanta', isCorrect: true },
			],
		},
		{
			questionText: 'What is the capital of Hawaii?',
			answerOptions: [
				{ answerText: 'Pearl City', isCorrect: false },
				{ answerText: 'Honolulu', isCorrect: true },
				{ answerText: 'Hilo', isCorrect: false },
			],
		},
		{
			questionText: 'What is the capitol of Idaho?',
			answerOptions: [
				{ answerText: 'Boise', isCorrect: true },
				{ answerText: 'Idaho Falls', isCorrect: false },
				{ answerText: 'Twin Falls', isCorrect: false },
			],
		},
		{
			questionText: 'What is the capitol of Illinois?',
			answerOptions: [
				{ answerText: 'Springfield', isCorrect: true },
				{ answerText: 'Chicago', isCorrect: false },
				{ answerText: 'Aurora', isCorrect: false },
			],
		},
		{
			questionText: 'What is the capitol of Indiana?',
			answerOptions: [
				{ answerText: 'Fort Wayne', isCorrect: false },
				{ answerText: 'Bloomington', isCorrect: false },
				{ answerText: 'Indianapolis', isCorrect: true },
			],
		},
		{
			questionText: 'What is the capitol of Iowa?',
			answerOptions: [
				{ answerText: 'Iowa City', isCorrect: false },
				{ answerText: 'Cedar Rapids', isCorrect: false },
				{ answerText: 'Des Moines', isCorrect: true },
			],
		},
		{
			questionText: 'What is the capital of Kansas?',
			answerOptions: [
				{ answerText: 'Wichita', isCorrect: false },
				{ answerText: 'Topeka', isCorrect: true },
				{ answerText: 'Shawnee', isCorrect: false },
			],
		},
		{
			questionText: 'What is the capitol of Kentucky?',
			answerOptions: [
				{ answerText: 'Louisville', isCorrect: false },
				{ answerText: 'Frankfort', isCorrect: true },
				{ answerText: 'Lexington', isCorrect: false },
			],
		},
		{
			questionText: 'What is the capitol of Louisiana?',
			answerOptions: [
				{ answerText: 'Baton Rouge', isCorrect: true },
				{ answerText: 'Lafayette', isCorrect: false },
				{ answerText: 'New Orleans', isCorrect: false },
			],
		},
		{
			questionText: 'What is the capitol of Maine?',
			answerOptions: [
				{ answerText: 'Portland', isCorrect: false },
				{ answerText: 'Rockland', isCorrect: false },
				{ answerText: 'Augusta', isCorrect: true },
			],
		},
		{
			questionText: 'What is the capitol of Maryland?',
			answerOptions: [
				{ answerText: 'Baltimore', isCorrect: false },
				{ answerText: 'Rockville', isCorrect: false },
				{ answerText: 'Annapolis', isCorrect: true },
			],
		},
		{
			questionText: 'What is the capital of Massachusetts?',
			answerOptions: [
				{ answerText: 'Cambridge', isCorrect: false },
				{ answerText: 'Boston', isCorrect: true },
				{ answerText: 'Springfield', isCorrect: false },
			],
		},
		{
			questionText: 'What is the capitol of Michigan?',
			answerOptions: [
				{ answerText: 'Detroit', isCorrect: false },
				{ answerText: 'Lansing', isCorrect: true },
				{ answerText: 'Ann Arbor', isCorrect: false },
			],
		},
		{
			questionText: 'What is the capitol of Minnesota?',
			answerOptions: [
				{ answerText: 'Saint Paul', isCorrect: true },
				{ answerText: 'Minneapolis', isCorrect: false },
				{ answerText: 'Duluth', isCorrect: false },
			],
		},
		{
			questionText: 'What is the capitol of Mississippi?',
			answerOptions: [
				{ answerText: 'Gulfport', isCorrect: false },
				{ answerText: 'Southaven', isCorrect: false },
				{ answerText: 'Jackson', isCorrect: true },
			],
		},
		{
			questionText: 'What is the capitol of Missouri?',
			answerOptions: [
				{ answerText: 'St. Louis', isCorrect: false },
				{ answerText: 'Springfield', isCorrect: false },
				{ answerText: 'Jefferson City', isCorrect: true },
			],
		},
		{
			questionText: 'What is the capital of Montana?',
			answerOptions: [
				{ answerText: 'Billings', isCorrect: false },
				{ answerText: 'Helena', isCorrect: true },
				{ answerText: 'Butte', isCorrect: false },
			],
		},
		{
			questionText: 'What is the capitol of Nebraska?',
			answerOptions: [
				{ answerText: 'Omaha', isCorrect: false },
				{ answerText: 'Lincoln', isCorrect: true },
				{ answerText: 'Kearney', isCorrect: false },
			],
		},
		{
			questionText: 'What is the capitol of Nevada?',
			answerOptions: [
				{ answerText: 'Carson City', isCorrect: true },
				{ answerText: 'Las Vegas', isCorrect: false },
				{ answerText: 'Reno', isCorrect: false },
			],
		},
		{
			questionText: 'What is the capitol of New Hamshire?',
			answerOptions: [
				{ answerText: 'Nashua', isCorrect: false },
				{ answerText: 'Dover', isCorrect: false },
				{ answerText: 'Concord', isCorrect: true },
			],
		},
		{
			questionText: 'What is the capitol of New Jersey?',
			answerOptions: [
				{ answerText: 'Newark', isCorrect: false },
				{ answerText: 'Atlantic City', isCorrect: false },
				{ answerText: 'Trenton', isCorrect: true },
			],
		},
		{
			questionText: 'What is the capital of New Mexico?',
			answerOptions: [
				{ answerText: 'Albuquerque', isCorrect: false },
				{ answerText: 'Santa Fe', isCorrect: true },
				{ answerText: 'Roswell', isCorrect: false },
			],
		},
		{
			questionText: 'What is the capitol of New York?',
			answerOptions: [
				{ answerText: 'Albany', isCorrect: true },
				{ answerText: 'New York City', isCorrect: false },
				{ answerText: 'Buffalo', isCorrect: false },
			],
		},
		{
			questionText: 'What is the capitol of North Carolina?',
			answerOptions: [
				{ answerText: 'Raleigh', isCorrect: true },
				{ answerText: 'Charlotte', isCorrect: false },
				{ answerText: 'Greensboro', isCorrect: false },
			],
		},
		{
			questionText: 'What is the capitol of North Dakota?',
			answerOptions: [
				{ answerText: 'Fargo', isCorrect: false },
				{ answerText: 'Grand Forks', isCorrect: false },
				{ answerText: 'Bismarck', isCorrect: true },
			],
		},
		{
			questionText: 'What is the capitol of Ohio?',
			answerOptions: [
				{ answerText: 'Cleveland', isCorrect: false },
				{ answerText: 'Cincinnati', isCorrect: false },
				{ answerText: 'Columbus', isCorrect: true },
			],
		},
		{
			questionText: 'What is the capital of Oklahoma?',
			answerOptions: [
				{ answerText: 'Tulsa', isCorrect: false },
				{ answerText: 'Oklahoma City', isCorrect: true },
				{ answerText: 'Norman', isCorrect: false },
			],
		},
		{
			questionText: 'What is the capitol of Oregon?',
			answerOptions: [
				{ answerText: 'Portland', isCorrect: false },
				{ answerText: 'Salem', isCorrect: true },
				{ answerText: 'Eugene', isCorrect: false },
			],
		},
		{
			questionText: 'What is the capitol of Pennsylvania?',
			answerOptions: [
				{ answerText: 'Harrisburg', isCorrect: true },
				{ answerText: 'Philadelphia', isCorrect: false },
				{ answerText: 'Scranton', isCorrect: false },
			],
		},
		{
			questionText: 'What is the capitol of Rhode Island?',
			answerOptions: [
				{ answerText: 'Newport', isCorrect: false },
				{ answerText: 'Pawtucket', isCorrect: false },
				{ answerText: 'Providence', isCorrect: true },
			],
		},
		{
			questionText: 'What is the capitol of South Carolina?',
			answerOptions: [
				{ answerText: 'Charleston', isCorrect: false },
				{ answerText: 'Greenville', isCorrect: false },
				{ answerText: 'Columbia', isCorrect: true },
			],
		},
		{
			questionText: 'What is the capitol of South Dakota?',
			answerOptions: [
				{ answerText: 'Sioux Falls', isCorrect: false },
				{ answerText: 'Rapid City', isCorrect: false },
				{ answerText: 'Pierre', isCorrect: true },
			],
		},
		{
			questionText: 'What is the capital of Tennessee?',
			answerOptions: [
				{ answerText: 'Memphis', isCorrect: false },
				{ answerText: 'Nashville', isCorrect: true },
				{ answerText: 'Knoxville', isCorrect: false },
			],
		},
		{
			questionText: 'What is the capitol of Texas?',
			answerOptions: [
				{ answerText: 'Houston', isCorrect: false },
				{ answerText: 'Austin', isCorrect: true },
				{ answerText: 'Dallas', isCorrect: false },
			],
		},
		{
			questionText: 'What is the capitol of Utah?',
			answerOptions: [
				{ answerText: 'Salt Lake City', isCorrect: true },
				{ answerText: 'Provo', isCorrect: false },
				{ answerText: 'West Jordan', isCorrect: false },
			],
		},
		{
			questionText: 'What is the capitol of Vermont?',
			answerOptions: [
				{ answerText: 'Burlington', isCorrect: false },
				{ answerText: 'Manchester', isCorrect: false },
				{ answerText: 'Montpelier', isCorrect: true },
			],
		},
		{
			questionText: 'What is the capitol of Virginia?',
			answerOptions: [
				{ answerText: 'Virginia Beach', isCorrect: false },
				{ answerText: 'Alexandria', isCorrect: false },
				{ answerText: 'Richmond', isCorrect: true },
			],
		},
		{
			questionText: 'What is the capital of Washington?',
			answerOptions: [
				{ answerText: 'Tacoma', isCorrect: false },
				{ answerText: 'Olympia', isCorrect: true },
				{ answerText: 'Seattle', isCorrect: false },
			],
		},
		{
			questionText: 'What is the capitol of West Virginia?',
			answerOptions: [
				{ answerText: 'Charleston', isCorrect: true },
				{ answerText: 'Morgantown', isCorrect: false },
				{ answerText: 'Fairmont', isCorrect: false },
			],
		},
		{
			questionText: 'What is the capitol of Wisconsin?',
			answerOptions: [
				{ answerText: 'Madison', isCorrect: true },
				{ answerText: 'Milwaukee', isCorrect: false },
				{ answerText: 'Greenbay', isCorrect: false },
			],
		},
		{
			questionText: 'What is the capitol of Wyoming?',
			answerOptions: [
				{ answerText: 'Sheridan', isCorrect: false },
				{ answerText: 'Jackson', isCorrect: false },
				{ answerText: 'Cheyenne', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);

	const [showScore, setShowScore] = useState(false);

	const [score, setScore] = useState(0);

	const handleAnswerButtonClick = (isCorrect) => {
		if(isCorrect===true){
			setScore(score + 1);
		} else {
			alert("incorrect!")
		}

		const nextQuestion = currentQuestion + 1;
		if(nextQuestion < questions.length){
			setCurrentQuestion(nextQuestion);
		} else {
			// alert("you have reached the end of the quiz!")
			setShowScore(true);
		}
	};

	function refreshPage(){ 
		window.location.reload(); 
	};

	return (
		<div className='app'>
			{/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}
			{/* {false ? ( */}
			{showScore ? (
				<div className='score-section'>You scored {score} out of {questions.length}
					<button type="button" onClick={ refreshPage }> <span>Retake?</span> </button> 
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion +1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
						<button onClick={()=> handleAnswerButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
