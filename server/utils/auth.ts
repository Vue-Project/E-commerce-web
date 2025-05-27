import { type User } from '@prisma/client';
export const sanitizedUser = (user: User) => {
    if (!user) return null;
    // @ts-ignore
    delete user.hashedPassword;
    return user;
};
