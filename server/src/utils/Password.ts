import bcrypt from 'bcryptjs';

class Password {
  public async generateHash(password: string): Promise<string> {
    const hash = await bcrypt.hash(password, 6);

    return hash;
  }

  public async checkHash(password: string, hash: string): Promise<Boolean> {
    const check = await bcrypt.compare(password, hash);

    return check;
  }
}

export default new Password();
