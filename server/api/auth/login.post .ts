import db from '~/utils/db';
import { authSchema } from '~/server/utils/valadations';

export default defineEventHandler(async event => {
    const { password, email } = await readValidatedBody(event, body => authSchema.parse(body));

    const existingUser = await db.user.findUnique({
        where: { email },
    });

    if (!existingUser) {
        throw createError({
            statusCode: 400,
            message: 'User not found with this email',
        });
    }

    if (!existingUser.hashedPassword) {
        const connectedOAuthAccount = await db.oauthAccount.findFirst({
            where: {
                userId: existingUser.id,
            },
        });
        if (connectedOAuthAccount) {
            const oAuthProvider = connectedOAuthAccount.providerId;
            throw createError({
                statusCode: 400,
                message: `account connected with ${oAuthProvider}, please login with ${oAuthProvider}`,
            });
        }
    }
    if (existingUser.hashedPassword) {
        const isPasswordCorrect = await verifyPassword(existingUser.hashedPassword, password);
        if (!isPasswordCorrect) {
            throw createError({
                statusCode: 400,
                message: 'invalid credentials',
            });
        }
    }
    // const hashedPassword = await hashPassword(password);
    // const user = await db.user.create({
    //     data: {
    //         email,
    //         hashedPassword,
    //     },
    // });
    // setResponseStatus(event, 201);
    // sendRedirect(event, '/');
    // return sanitizedUser(user);
    const transformedUser = sanitizedUser(existingUser);
    if (transformedUser) {
        await setUserSession(event, {
            user: transformedUser,
        });
    }
    return transformedUser;
});
