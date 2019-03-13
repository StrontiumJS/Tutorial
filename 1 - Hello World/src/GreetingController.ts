import { injectable } from "inversify"
import { ControllerInput, ControllerOutput, EndpointController, isUndefined, either, isString } from "strontium"

@injectable()
export class GreetingController extends EndpointController {

	public inputValidator = {
        body: isUndefined,
        headers: {},
        query: {
			name: either(
				isString,
				isUndefined
			)
		},
        params: {},
        meta: {},
    }

    public outputValidator = isString

    public async handle(
        input: ControllerInput<GreetingController>
    ): Promise<ControllerOutput<GreetingController>> {
		return `Hi ${input.query.name || "there"}, Welcome to Strontium!`
	}

}