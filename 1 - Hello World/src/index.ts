import "reflect-metadata"

import { Runtime, FastifyServer, AggregateLogger, ConsoleLogger, LogLevel } from "strontium";
import { GreetingController } from "./GreetingController";

const greeterRuntime = new Runtime([
	new AggregateLogger([
		new ConsoleLogger(LogLevel.INFO)
	]),
	new FastifyServer([{
		method: "GET",
		route: "/greet",
		endpointController: GreetingController
	}])
])

greeterRuntime.startup()