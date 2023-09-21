const Booking = require("../src/models/bookingModel");
const bookingService = require("../src/services/bookingService");

describe("bookingService", () => {
  describe("createBooking", () => {
    it("should create a new booking", async () => {
      const bookingData = {
        firstName: "John",
        lastName: "Doe",
        phoneNumber: "1234567890",
        email: "john@example.com",
        selectedDate: "2023-09-25",
        selectedTime: "10:00 AM",
      };

      Booking.prototype.save = jest.fn(() => Promise.resolve());

      const result = await bookingService.createBooking(bookingData);

      expect(result).toEqual({ message: "Booking saved successfully" });
      expect(Booking.prototype.save).toHaveBeenCalledTimes(1);
    });


    it("should throw an error when saving fails", async () => {
      const bookingData = {
      };

      Booking.prototype.save = jest.fn(() => Promise.reject(new Error("MongoDB error")));

      try {
        await bookingService.createBooking(bookingData);
      } catch (error) {
        expect(error.message).toEqual("Error saving booking to MongoDB");
      }
    });
  });

  describe("getBookings", () => {
    it("should retrieve all bookings", async () => {
      const fakeBookings = [
        { firstName: "John", lastName: "Doe" },
        { firstName: "Jane", lastName: "Smith" },
      ];

      Booking.find = jest.fn(() => ({ sort: () => Promise.resolve(fakeBookings) }));

      const result = await bookingService.getBookings();

      expect(result).toEqual(fakeBookings);
      expect(Booking.find).toHaveBeenCalledTimes(1);
    });

    it("should throw an error when fetching fails", async () => {
      Booking.find = jest.fn(() => ({ sort: () => Promise.reject(new Error("MongoDB error")) }));

      try {
        await bookingService.getBookings();
      } catch (error) {
        expect(error.message).toEqual("Failed to fetch bookings");
      }
    });
  });
});
