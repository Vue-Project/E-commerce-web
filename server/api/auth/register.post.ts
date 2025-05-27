import db from '~/utils/db';
import { authSchema } from '~/server/utils/valadations';

export default defineEventHandler(async event => {
    const { name, password, email } = await readValidatedBody(event, body => authSchema.parse(body));

    const existingUser = await db.user.findUnique({
        where: { email },
    });
    if (existingUser) {
        throw createError({
            statusCode: 400,
            message: 'User already exists with this email',
        });
    }

    const hashedPassword = await hashPassword(password);
    const user = await db.user.create({
        data: {
            name,
            email,
            hashedPassword,
        },
    });
    // setResponseStatus(event, 201);
    // sendRedirect(event, '/');
    // return sanitizedUser(user);
    const transformedUser = sanitizedUser(user);
    if (transformedUser) {
        await setUserSession(event, {
            user: transformedUser,
        });
    }
    return transformedUser;
});
