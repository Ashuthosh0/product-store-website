import mongoose from "mongoose";
const uri = 'mongodb+srv://pvgar09:jYeN7vYOUgetoGf7@uv.esloz.mongodb.net/uv?retryWrites=true&w=majority&appName=uv';
export const connectDB = async () => {
	try {
		const conn = await mongoose.connect(uri);
		console.log(`MongoDB Connected: ${conn.connection.host}`);
	} catch (error) {
		console.error(`Error: ${error.message}`);
		process.exit(1); // process code 1 code means exit with failure, 0 means success
	}
};
