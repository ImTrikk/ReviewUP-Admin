import { dbConnection } from "../Database/database.js";

// counts all the courses available
export const CourseCounter = async (req, res) => {
	try {
		const course = await dbConnection.query(
			"select count(course_id) from courses",
		);
		const count = course.rows[0].count;

		if (count === 0) {
			return res.status(400).json({ count, message: "There are no course yet" });
		}
		return res.status(200).json({ count, message: "Retrieved module counter" });
	} catch (err) {
		console.log(err);
		return res.status(500).json({ message: "Internal Server Error" });
	}
};

// counts all the reported course modules
export const CountReport = async (req, res) => {
	try {
	} catch (err) {
		console.log(err);
		return res.status(500).json({ message: "Internal server error" });
	}
};
