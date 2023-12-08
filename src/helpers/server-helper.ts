import prisma from "../../prisma";

export const connectToDatabase = async () => {
    try {
        await prisma.$connect();
        console.log("Connected to the database");
    } catch (error) {
        console.error("Error connecting to the database:", error);
        throw error; // Rethrow the error to handle it in the calling code
    }
};
