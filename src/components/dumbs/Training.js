import React from "react"

import { CountDown } from "../enhancers"
import { AddRecordForm } from "../containers"
export const TrainingTypes = {
	CONFIGURING: "CONFIGURING", // Choosing between regular or random exercises order
	ON_BREAK: "ON_BREAK", // Between exercises
	EXERCISING: "EXERCISING", // Doing some workout, finally !
	FINISHED: "FINISHED" // The end. Congrats
}

const Configuring = ({ switchScreen }) => (
	<div>
		<button onClick={switchScreen}>Let's get started</button>
	</div>
)
const Finished = () => (
	<div>
		<h1>The end. Congrats</h1>
	</div>
)

const Exercising = ({ switchScreen, timing: { perExercise }, exercise }) => (
	<CountDown start={perExercise} threshold={0} guard={switchScreen}>
		{({ count, pause, resume, isPaused }) => (
			<section>
				<h2>{exercise.name}</h2>
				<h3>{count} remaining</h3>
				<button onClick={isPaused ? resume : pause}>Pause</button>
			</section>
		)}
	</CountDown>
)

// Receive the coming exercise as the exercise prop, and the one which just ended as previousExercise
const OnBreak = ({
	switchScreen,
	timing: { perBreak, perExercise },
	exercise: nextExercise,
	previousExercise
}) => (
	<CountDown start={perBreak} threshold={0} guard={switchScreen}>
		{({ count, pause, resume, isPaused }) => (
			<section>
				<h2>
					{nextExercise
						? `Coming next: ${nextExercise.name}`
						: `Congratulations, you made it !`}
				</h2>
				<h3>{count}</h3>
				<button onClick={isPaused ? resume : pause}>Pause</button>
				<AddRecordForm exerciseId={previousExercise.id} timing={perExercise} />
			</section>
		)}
	</CountDown>
)

const Training = {
	[TrainingTypes.CONFIGURING]: Configuring,
	[TrainingTypes.EXERCISING]: Exercising,
	[TrainingTypes.ON_BREAK]: OnBreak,
	[TrainingTypes.FINISHED]: Finished
}

export default Training
