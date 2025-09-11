// Note: kindly add children favorite on category list
// refer https://www.youtube.com/watch?v=enopDSs3DRw&ab_channel=TraversyMedia for authentication
const products = {
    id: "",
    name: "",
    typeOfCuts: "",
    // cleanType: "", // plainWater, turmeric, turmericAndRockSallt 🧂
    size: "", // tiny, small, medium, large, big
    quantity: "", // 1/4, 1/2, 3/4, 1, 2 ::: 🧮 calc needed
    // buyingPrice: "",
    pricePerKg: "",
    quantityAfterCleaning: "", // in grams kind off!👌🏼
    categories: "",
    availability: true,
    image: "",
};
const productUpdates = {
    productName: "",
    productSize: "", // by default medium 🎖️
    productQuantity: "",
    totalPrice: "",
    discription: "", // to take notes related to shop and its person details.

};
const otpVerification = {
    uniqueId: "",
    mobileNumber: "",
};
const getCustomerDetails = {
    id: "UUID",
    name: "",
    pincode: "",
    address1: "",
    address2: "", // checkbox with true value for storing the address of the customer.
    dob: "" // optional because for advertisement.
};
const placeOrder = {
    productId: "",
    productName: "",
    quantity: "", // keep even though for 1/4 kg it will increase the profit!
    productPrice: "",
    typeOfCuts: "",
    cleanType: ""
};
const orderList = {
    orderId: "",
    productId: "",
    productName: "",
    quantity: "",
    typeOfCuts: "",
    cleanType: "",
    getCustomerDetails // its object
};
const driverDetails = {
    // please keed driving licence and passport size photo ready | Handy 👈🏻;
    name: "",
    passportSizePhoto: "",
    drivingLicencePhoto: "",
};
const isDelivered = {
    orderId: "", // uuid from backend
    status: ["PACKING", "DISPATCHED", "DELIVERED"],
};

