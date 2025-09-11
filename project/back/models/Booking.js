import mongoose from '../db/connect.js'

const BookingSchema = mongoose.Schema({
    turf_id : { type : mongoose.Schema.Types.ObjectId, ref : "turf"},
    user_id : { type : mongoose.Schema.Types.ObjectId, ref : "user"},
    date : String,
    slot : [],
    amount : Number,
    adv_amount : Number,
    remain_amount : Number,
})

const Booking = mongoose.model("booking", BookingSchema);

export default Booking;