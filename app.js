const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.route("/rideshares/rides").get(async (req, res, next) => {
  try {
    const data = await new Promise((resolve, reject) => {
      const authorization = req.headers["authorization"];

      const jwtToken =
        authorization?.startsWith("Bearer") && authorization.split(" ")[1];

      setTimeout(() => {
        if (jwtToken)
          resolve([
            {
              rideshareTripLegDetailID: 2,
              reservationReferenceID: "E0BUHG",
              tripLegReferenceID: "98AIHG",
              rideType: "lyft",
              currentStatus: "COMPLETED",
              providerRideID: "1970491078232177260",
              providerSupportURL:
                "https://help-staging.lyft.com/hc/en-us/requests/new?ticket_form_id=360000876973&lb_ride_id=1970491078232177260&tags=concierge_ondemand_ride",
              origin: {
                address: "5202 S Corning Ave  Los Angeles CA 90056-1104",
                latitude: 33.99481,
                longitude: -118.37213,
                etaSeconds: null,
              },
              destination: {
                address: "5525 W Slauson Ave  Los Angeles CA 90056-1047",
                latitude: 33.9897,
                longitude: -118.37848,
                etaSeconds: null,
              },
              passenger: {
                passengerID: 65041,
                passengerUUID: "4a46b8aa-0728-4944-a987-30e2eb1873af",
                firstName: "Tamara",
                lastName: "Amiak",
              },
              tripLeg: {
                tripLegID: 772,
                tripLegReferenceID: "98AIHG",
              },
              driver: {
                firstName: "Chris",
                imageURL:
                  "https://lyftapi.s3.amazonaws.com/staging/photos/320x200/1531839227711722164_driver.jpg",
                rating: "5.0",
                lat: null,
                lng: null,
              },
              vehicle: {
                imageURL:
                  "https://lyftapi.s3.amazonaws.com/staging/photos/320x200/1531839227711722164_driver.jpg",
                make: "GMC",
                model: "Yukon XL",
                year: 2018,
                licensePlate: "3LYF123",
                licensePlateState: "CA",
                color: "Black",
              },
              rideDetails: {
                distanceMiles: 0.77,
                durationSeconds: 84,
                price: {
                  amount: 991,
                  currency: "USD",
                  description: "Total ride price",
                },
              },
              statusLogs: [
                {
                  RideshareTripLegStatusLogID: 2,
                  rideshareTripLegDetailID: 2,
                  rideshareUserTypeID: 1,
                  tripLegStatusID: 6,
                  tripLegStatusReasonID: 1,
                  rideshareStatusReason: null,
                  createdOnUTC: "2024-07-16T22:12:25.057Z",
                  createdByUserID: 1,
                  tripLegStatus: {
                    tripLegStatusID: 6,
                    tripLegStatusName: "Confirmed",
                    description:
                      "The transportation provider's driver has confirmed they are going to service the trip leg, but they have not began the service.",
                    TripLegStatusBC: "CONFIRMED",
                    isActive: true,
                    createdOnUTC: "2023-07-21T04:36:13.103Z",
                    createdByUserID: 1,
                  },
                },
                {
                  RideshareTripLegStatusLogID: 3,
                  rideshareTripLegDetailID: 2,
                  rideshareUserTypeID: 1,
                  tripLegStatusID: 6,
                  tripLegStatusReasonID: 1,
                  rideshareStatusReason: null,
                  createdOnUTC: "2024-07-16T22:14:54.226Z",
                  createdByUserID: 1,
                  tripLegStatus: {
                    tripLegStatusID: 6,
                    tripLegStatusName: "Confirmed",
                    description:
                      "The transportation provider's driver has confirmed they are going to service the trip leg, but they have not began the service.",
                    TripLegStatusBC: "CONFIRMED",
                    isActive: true,
                    createdOnUTC: "2023-07-21T04:36:13.103Z",
                    createdByUserID: 1,
                  },
                },
                {
                  RideshareTripLegStatusLogID: 4,
                  rideshareTripLegDetailID: 2,
                  rideshareUserTypeID: 1,
                  tripLegStatusID: 6,
                  tripLegStatusReasonID: 1,
                  rideshareStatusReason: null,
                  createdOnUTC: "2024-07-16T22:18:33.640Z",
                  createdByUserID: 1,
                  tripLegStatus: {
                    tripLegStatusID: 6,
                    tripLegStatusName: "Confirmed",
                    description:
                      "The transportation provider's driver has confirmed they are going to service the trip leg, but they have not began the service.",
                    TripLegStatusBC: "CONFIRMED",
                    isActive: true,
                    createdOnUTC: "2023-07-21T04:36:13.103Z",
                    createdByUserID: 1,
                  },
                },
                {
                  RideshareTripLegStatusLogID: 5,
                  rideshareTripLegDetailID: 2,
                  rideshareUserTypeID: 1,
                  tripLegStatusID: 6,
                  tripLegStatusReasonID: 1,
                  rideshareStatusReason: null,
                  createdOnUTC: "2024-07-16T22:21:51.741Z",
                  createdByUserID: 1,
                  tripLegStatus: {
                    tripLegStatusID: 6,
                    tripLegStatusName: "Confirmed",
                    description:
                      "The transportation provider's driver has confirmed they are going to service the trip leg, but they have not began the service.",
                    TripLegStatusBC: "CONFIRMED",
                    isActive: true,
                    createdOnUTC: "2023-07-21T04:36:13.103Z",
                    createdByUserID: 1,
                  },
                },
                {
                  RideshareTripLegStatusLogID: 6,
                  rideshareTripLegDetailID: 2,
                  rideshareUserTypeID: 1,
                  tripLegStatusID: 7,
                  tripLegStatusReasonID: 1,
                  rideshareStatusReason: null,
                  createdOnUTC: "2024-07-16T22:24:45.862Z",
                  createdByUserID: 1,
                  tripLegStatus: {
                    tripLegStatusID: 7,
                    tripLegStatusName: "On-site",
                    description:
                      "The transportation provider's driver is on-site and waiting for the passenger.",
                    TripLegStatusBC: "ONSITE",
                    isActive: true,
                    createdOnUTC: "2023-07-21T04:36:13.103Z",
                    createdByUserID: 1,
                  },
                },
                {
                  RideshareTripLegStatusLogID: 7,
                  rideshareTripLegDetailID: 2,
                  rideshareUserTypeID: 1,
                  tripLegStatusID: 8,
                  tripLegStatusReasonID: 1,
                  rideshareStatusReason: null,
                  createdOnUTC: "2024-07-16T22:26:04.301Z",
                  createdByUserID: 1,
                  tripLegStatus: {
                    tripLegStatusID: 8,
                    tripLegStatusName: "On Board",
                    description: "The passenger is in the vehicle.",
                    TripLegStatusBC: "ONBOARD",
                    isActive: true,
                    createdOnUTC: "2023-07-21T04:36:13.103Z",
                    createdByUserID: 1,
                  },
                },
                {
                  RideshareTripLegStatusLogID: 8,
                  rideshareTripLegDetailID: 2,
                  rideshareUserTypeID: 1,
                  tripLegStatusID: 11,
                  tripLegStatusReasonID: 1,
                  rideshareStatusReason: null,
                  createdOnUTC: "2024-07-16T22:26:58.596Z",
                  createdByUserID: 1,
                  tripLegStatus: {
                    tripLegStatusID: 11,
                    tripLegStatusName: "Completed",
                    description:
                      "The passenger reached their destination and the trip leg is complete.",
                    TripLegStatusBC: "COMPLETED",
                    isActive: true,
                    createdOnUTC: "2023-07-21T04:36:13.103Z",
                    createdByUserID: 1,
                  },
                },
              ],
            },
          ]);
        else {
          reject("Please login and try again");
        }
      }, 1200);
    });

    res.status(200).json({
      status: "success",
      message: "Success on fetching rides",
      data: {
        data,
      },
    });
  } catch (err) {
    res.status(401).json({
      status: "failed",
      message: "Please login and try again",
    });
  }
});

app.route("/rideshares/auth").post(async (req, res, next) => {
  try {
    const users = [
      { username: "john", password: "passpass" },
      { username: "yishak", password: "passispass" },
    ];
    const { username, password } = req.body;
    console.log(username, password);
    const data = await new Promise((resolve, reject) => {
      const [user] = users.filter(
        (user) => user.password === password && user.username === username
      );

      setTimeout(() => {
        if (user) {
          resolve({
            AuthenticationResult: {
              AccessToken: "abc_access_token",
              IdToken: "xyz_id_token",
            },
          });
        } else {
          reject("something went wrong");
        }
      }, 1200);
    });

    res.status(200).json({
      status: "success",
      message: "Success on loggin in user",
      data: {
        data,
      },
    });
  } catch (err) {
    res.status(401).json({
      status: "failed",
      message: "Invalid email or password",
    });
  }
});

// set port, listen for requests
const server = app.listen(8000, () => {
  console.log(`Server is running on port ${8000}.`);
});
