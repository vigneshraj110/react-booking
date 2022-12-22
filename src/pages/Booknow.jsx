import React, { Component } from "react";
import { RoomContext } from "../context";
import { Link } from "react-router-dom";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import defaultBcg from "../images/room-3.jpeg";
export default class nBooknow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg,
      startDate: new Date(),
      endDate: new Date()
      ,
    };
    this.handleChangeEnd = this.handleChangeEnd.bind(this);
    this.handleChangeStart = this.handleChangeStart.bind(this);
  }
  async bookNow() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    console.log(room);
    const response = await fetch("http://localhost:8000/api/v1/book", {
      method: "POST",
      body: JSON.stringify({
        name: room.name,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      console.log("booked");
    }
  }
  handleChangeStart(date) {
    this.setState({
      startDate: date,
    });
  }
  handleChangeEnd(date) {
    this.setState({
      endDate: date,
    });
  }
  calculateDaysLeft(startDate, endDate) {
    if (!moment.isMoment(startDate)) startDate = moment(startDate);
    if (!moment.isMoment(endDate)) endDate = moment(endDate);
    return endDate.diff(startDate, "days");
  }
  static contextType = RoomContext;
  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);

    const { startDate, endDate } = this.state;
    const daysLeft = this.calculateDaysLeft(startDate, endDate);
    if (!room) {
      return (
        <div className="container roomerror">
          <div className="row my-5">
            <div className="col-md-6 col-12 mx-auto">
              <div className="card shadow-lg border-0 p-4 error">
                <h1 className="text-center display-4">SORRY</h1>
                <h3>No such house could be found...</h3>
                <Link to="/rooms" className="btn btn-warning mt-4 ">
                  Back to House
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    }
    const { name, capacity, size, price, breakfast, pets, images } = room;
    const [mainImg, ...defaultBcg] = images;
    return (
      <div className="container my-5">
        <div className="row">
          <div className="col-md-10 mx-auto col-12 card shadow-lg border-0 p-4">
            <div>
              <h1 className="display-4">Booking</h1>
            </div>
            <div className="row">
              <div className="col-md-6 col-12 my-auto">
                <img
                  src={mainImg || defaultBcg}
                  className="img-fluid"
                  alt="selected room"
                />
              </div>
              <div className="col-md-6 col-12 my-auto">
                <h1>House Details</h1>
                <table className="table">
                  <thead className="thead-light">
                    <tr>
                      <th>House Type</th>
                      <td>{name}</td>
                    </tr>
                    <tr>
                      <th>Capacity</th>
                      <td>{capacity}</td>
                    </tr>
                    <tr>
                      <th>Size</th>
                      <td>{size} sqft.</td>
                    </tr>
                    
                  </thead>
                </table>
              </div>
            </div>
            
            <div className="row">
              <div className="col-md-6 col-12">
               
              </div>
              <div className="col-md-6 col-12">
                <h6 className="font-weight-bold">
                  Net Amount :{" "}
                  <span className="badge badge-info">Rs {price}</span>
                </h6>
              
              </div>
            </div>
            <div className="row my-4">
              <div className="col-md-6 col-12">
                <div className="form-group">
                  <label htmlFor="payment" className="font-weight-bolder">
                    Payment Options
                  </label>
                  <select className="form-control">
                    <option disabled>Select payment option</option>
                    <option value="Credit">Credit Card</option>
                    <option value="Debit">Debit Card</option>
                    <option value="checkin">Pay After Visiting the House</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6 col-12 my-auto">
                <div className="col-md-6 col-12 float-right">
                  <button
                    className="btn btn-block btn-outline-primary"
                    data-toggle="modal"
                    data-target="#thanks"
                    onClick={() => {
                      this.bookNow();
                    }}
                  >
                    Confirm 
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="thanks">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body p-4">
                <h3>Thank you </h3>
                <p className="lead">Thanks for visiting us</p>
              </div>
              <div className="modal-footer">
                <Link to="/" className="btn btn-dark">
                  Goto Home
                </Link>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}