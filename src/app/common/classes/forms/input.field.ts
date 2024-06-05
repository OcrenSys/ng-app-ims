import { ControlTypeEnum } from '../../enums/forms/control.type.enum';
import { FieldBase, FieldTypes } from './field.base';

export class InputField extends FieldBase<FieldTypes> {
	override controlType = ControlTypeEnum.input;
}
