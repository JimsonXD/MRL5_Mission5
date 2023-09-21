const mongoose = require("mongoose");
const Booking = require("../src/models/bookingModel");
const { bookToView } = require("../src/controllers/bookingController");

describe("bookToView Function Unit Test", () => {
    beforeAll(async () => {
        await mongoose.connect("mongodb://localhost:27017/testdb", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    });

    afterAll(async () => {
        await mongoose.disconnect();
    });

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("should create a new booking", async () => {
        const req = {
            body: {
                firstName: "John",
                lastName: "Doe",
                phoneNumber: "1234567890",
                email: "johndoe@example.com",
                selectedDate: "2023-10-01",
                selectedTime: "10:00 AM",
            },
        };
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        const saveSpy = jest.spyOn(Booking.prototype, "save").mockResolvedValueOnce();

        await bookToView(req, res);

        expect(saveSpy).toHaveBeenCalledTimes(1); 
        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.json).toHaveBeenCalledWith({ message: "Booking saved successfully" });
        expect(Booking).toHaveBeenCalledTimes(1); 
        expect(Booking.mock.calls[0][0]).toEqual({
            firstName: "John",
            lastName: "Doe",
            phoneNumber: "1234567890",
            email: "johndoe@example.com",
            selectedDate: "2023-10-01",
            selectedTime: "10:00 AM",
        });
    });
});