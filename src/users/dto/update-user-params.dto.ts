import { IsNumberString, Validate } from "class-validator";
import { IsUserIdValidConstraint } from "../validations/is-user-id-valid.constraint";
import { IsUserIdValid } from "../validations/is-user-id-valid";

export class UpdateUserParamsDto {
    @IsNumberString()

    @IsUserIdValid()

    id: number;
}