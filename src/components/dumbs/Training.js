import React, { Fragment } from "react"

import { CountDown } from "../enhancers"
import { AddRecordForm } from "../containers"

import { H1, Button, Card, H2, CircularPie } from "../style"
import ConfettiRain from "./ConfettiRain"

export const TrainingTypes = {
	CONFIGURING: "CONFIGURING", // Choosing between regular or random exercises order
	ON_BREAK: "ON_BREAK", // Between exercises
	EXERCISING: "EXERCISING", // Doing some workout, finally !
	FINISHED: "FINISHED" // The end. Congrats
}

const Configuring = ({ switchScreen }) => (
	<Button onClick={switchScreen}>Let's get started</Button>
)

const Finished = () => (
	<Fragment>
		<ConfettiRain />
		<H1>You reached the end of the program. Rest well !</H1>
	</Fragment>
)

const Exercising = ({ switchScreen, timing: { perExercise }, exercise }) => (
	<CountDown start={perExercise} threshold={0} guard={switchScreen}>
		{({ count, pause, resume, isPaused }) => (
			<Fragment>
				<H2>{exercise.name}</H2>
				<Card>
					<CircularPie remaining={count} total={perExercise}>
						{count}s remaining before break
					</CircularPie>
					<Button onClick={isPaused ? resume : pause}>Pause</Button>
				</Card>
			</Fragment>
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
			<Fragment>
				<H2>
					{nextExercise
						? `Coming next: ${nextExercise.name}`
						: `Congratulations, you made it !`}
				</H2>
				<Card>
					<CircularPie remaining={count} total={perBreak}>
						{count}s remaining before exercise
					</CircularPie>
					<Button onClick={isPaused ? resume : pause}>Pause</Button>
				</Card>
				<AddRecordForm exerciseId={previousExercise.id} timing={perExercise} />
			</Fragment>
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
