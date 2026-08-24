import bcrypt from 'bcrypt'; 

export async function hashSenha(senha: string) {
    const saltRounds = 12;
    const salt = await bcrypt.genSalt(saltRounds);

    const hash = await bcrypt.hash(senha, salt);

    return hash;
}