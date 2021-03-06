import validator from 'validator'
import { LatLngValidation } from '../../presentation/validation/ports/coordinates-validation'

export class CoordinatesValidator implements LatLngValidation {
  validate(coordinates: string): boolean {
    return validator.isLatLong(coordinates)
  }
}
