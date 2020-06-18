import Password from './Password';

describe('Password', () => {
  test('Should generate a hash', async () => {
    const hash = await Password.generateHash('My Password');

    expect(hash).toHaveReturned;
  });

  test('Should verify that the password is the same as the hash', async () => {
    const hash = await Password.generateHash('password');

    const passwordIsValid = await Password.checkHash('password', hash);

    expect(passwordIsValid).toBe(true);
  });
});
