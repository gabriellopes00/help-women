import { IdGenerator } from '@/infra/utils/uuid-generator'

describe('UUID Generator', () => {
  const sut = new IdGenerator()

  it('Should generate a valid UUID v4', () => {
    const uuid = sut.generate()
    expect(typeof uuid).toBe('string')
    // uuid v4 pattern
    const pattern = /^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i
    expect(uuid).toMatch(pattern)
  })
})
