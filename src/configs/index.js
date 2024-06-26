import dotenv from'dotenv';
dotenv.config();
const configs ={
    PORT : process.env.PORT || 5001,
    MONGODB_CONNECTION_STRING : process.env.MONGODB_CONNECTION_STRING,
    JWT_SECRET_KEY : process.env.JWT_SECRET_KEY,
    JWT_EXPIRES_IN : process.env.JWT_EXPIRES_IN,
    JWT_REFRESH_EXPIRES_IN : process.env.JWT_REFRESH_EXPIRES_IN,
    JWT_REFRESH_COOKIE_NAME : process.env.JWT_REFRESH_COOKIE_NAME
}
export default configs;